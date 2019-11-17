module.exports = (sequelize, DataTypes) => {
  class Periodos extends sequelize.Sequelize.Model { }
  Periodos.init({
    id: {
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
      type: DataTypes.INTEGER,
      comment: 'ID del Periodo',
    },
    nombre: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    anio: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    inicio: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    fin: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    inicioEncuesta: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    finEncuesta: {
      allowNull: false,
      type: DataTypes.DATE,
    },
  }, {
    timestamps: true,
    underscored: true,
    paranoid: true,
    sequelize,
  });

  Periodos.associate = (models) => {
    const { Ofertas, Preguntas } = models;
    Periodos.hasMany(Ofertas, { as: 'Ofertas' });
    Periodos.belongsToMany(Preguntas, { through: 'periodos_preguntas', as: 'Preguntas' });
  };
  return Periodos;
};
