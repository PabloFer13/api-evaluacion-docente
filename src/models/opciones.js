module.exports = (sequelize, DataTypes) => {
  class Opciones extends sequelize.Sequelize.Model { }
  Opciones.init({
    id: {
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
      type: DataTypes.INTEGER,
      comment: 'ID de la Opcion',
    },
    value: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    text: {
      allowNull: false,
      type: DataTypes.STRING,
    },
  }, {
    timestamps: true,
    underscored: true,
    paranoid: true,
    sequelize,
  });

  Opciones.associate = () => {
    // Opciones.belongsTo(models.Preguntas, { as: 'Pregunta' });
  };
  return Opciones;
};
