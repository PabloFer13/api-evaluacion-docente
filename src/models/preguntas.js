module.exports = (sequelize, DataTypes) => {
  class Preguntas extends sequelize.Sequelize.Model { }
  Preguntas.init({
    id: {
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
      type: DataTypes.INTEGER,
      comment: 'ID de la Pregunta',
    },
    text: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    tipo: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    min: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    max: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
  }, {
    timestamps: true,
    underscored: true,
    paranoid: true,
    sequelize,
  });

  Preguntas.associate = (models) => {
    const { Periodos, Respuestas, Opciones } = models;
    Preguntas.belongsToMany(Periodos, { through: 'periodos_preguntas' });
    Preguntas.hasMany(Respuestas, { as: 'Respuestas ' });
    Preguntas.hasMany(Opciones, { as: 'Opciones' });
  };
  return Preguntas;
};
