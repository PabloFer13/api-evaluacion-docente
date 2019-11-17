module.exports = (sequelize, DataTypes) => {
  class Respuestas extends sequelize.Sequelize.Model { }
  Respuestas.init({
    id: {
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
      type: DataTypes.INTEGER,
      comment: 'ID del Maestro',
    },
    value: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    tipo: {
      allowNull: false,
      type: DataTypes.STRING,
    },
  }, {
    timestamps: true,
    underscored: true,
    paranoid: true,
    sequelize,
  });

  Respuestas.associate = (models) => {
    const { Cargas, Preguntas } = models;
    Respuestas.belongsTo(Cargas, { as: 'Cargas' });
    Respuestas.belongsTo(Preguntas, { as: 'Respuestas' });
  };
  return Respuestas;
};
