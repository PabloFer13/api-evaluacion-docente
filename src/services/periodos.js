import moment from 'moment';
import db from '../models';

const { sequelize } = db;

export default {
  async getCurrentPeriodo() {
    const sem = await sequelize.query(`SELECT id FROM periodos WHERE '${moment().format('YYYY-MM-DD HH:mm:ssZ')}' BETWEEN periodos.inicio AND periodos.fin LIMIT 1`, {
      type: sequelize.QueryTypes.SELECT,
      model: sequelize.Cargas,
      mapToModel: true,
    });


    return Array.isArray(sem) && sem.length > 0
      ? db.Periodos.findByPk(
        sem[0].id,
        {
          include: [
            {
              association: 'Preguntas',
              include: [
                {
                  association: 'Opciones',
                },
              ],
            },
          ],
        },
      )
      : null;
  },
};

