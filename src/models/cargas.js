module.exports = (sequelize, DataTypes) => {
  class Cargas extends sequelize.Sequelize.Model { }
  Cargas.init({
    id: {
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
      type: DataTypes.INTEGER,
      comment: 'ID de la Carga',
    },
    encuestaStatus: {
      type: DataTypes.STRING,
      comment: 'Status de la encuesta docente',
    }
  }, {
    timestamps: true,
    underscored: true,
    paranoid: true,
    sequelize,
  });

  Cargas.associate = (models) => {
    const { Alumnos, Respuestas, Ofertas } = models;
    Cargas.belongsTo(Alumnos, { as: 'Alumno' });
    Cargas.hasMany(Respuestas, { as: 'Respuestas ' });
    Cargas.belongsTo(Ofertas, { as: 'Oferta' });
  };
  return Cargas;
};
