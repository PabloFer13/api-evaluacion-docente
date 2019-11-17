module.exports = (sequelize, DataTypes) => {
  class Ofertas extends sequelize.Sequelize.Model { }
  Ofertas.init({
    id: {
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
      type: DataTypes.INTEGER,
      comment: 'ID de la Oferta',
    },
  }, {
    timestamps: true,
    underscored: true,
    paranoid: true,
    sequelize,
  });

  Ofertas.associate = (models) => {
    const {
      Periodos, Materias, Maestros, Horarios, Cargas,
    } = models;
    Ofertas.belongsTo(Horarios, { as: 'Horario' });
    Ofertas.belongsTo(Maestros, { as: 'Maestro' });
    Ofertas.belongsTo(Materias, { as: 'Materia' });
    Ofertas.belongsTo(Periodos, { as: 'Periodo' });
    Ofertas.hasMany(Cargas, { as: 'Cargas' });
  };
  return Ofertas;
};
