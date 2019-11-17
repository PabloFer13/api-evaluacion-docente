import { Op } from 'sequelize';
import db from '../models';
import periodosServices from '../services/periodos';

const { sequelize, Alumnos, Cargas } = db;

export default {
  async hi(req, res) {
    res.status(200).json({
      hello: 'world',
    });
  },

  async login(req, res) {
    const { email, password } = req.body;

    const alumno = await Alumnos.findOne({ where: { email } });

    if (!alumno || alumno.password !== password) {
      res.status(401)
        .send({
          err: 'bad-credentials',
          message: 'Could not find a user with those credentials. Try Again.',
        });
    } else {
      res.status(200)
        .send('OK');
    }
  },

  async getCargas(req, res) {
    const { id: idAlumno } = req.params;
    const currentPeriodo = await periodosServices.getCurrentPeriodo();

    if (!currentPeriodo) {
      res.status(200);
    }

    const cargasIDs = await sequelize.query(`SELECT cr.id FROM cargas AS cr INNER JOIN alumnos AS al ON al.id = cr.alumno_id INNER JOIN ofertas AS of ON of.id = cr.oferta_id WHERE of.periodo_id = ${currentPeriodo.id} AND al.id = ${idAlumno} LIMIT ALL`, { type: sequelize.QueryTypes.SELECT });

    const idsCargas = cargasIDs.map(({ id }) => id);

    const cargas = await Cargas.findAll({
      where: {
        id: {
          [Op.in]: idsCargas,
        },
      },
      include: [
        {
          model: db.Ofertas,
          as: 'Oferta',
          include: [{ association: 'Horario' }, { association: 'Materia' }, { association: 'Maestro' }],
        },
      ],
    });

    res.status(200)
      .send({ cargas });
  },
};
