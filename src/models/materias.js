module.exports = (sequelize, DataTypes) => {
  class Materias extends sequelize.Sequelize.Model { }
  Materias.init({
    id: {
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
      type: DataTypes.INTEGER,
      comment: 'ID de la Materia',
    },
    nombre: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    codigo: {
      allowNull: false,
      type: DataTypes.STRING,
    },
  }, {
    timestamps: true,
    underscored: true,
    paranoid: true,
    sequelize,
  });

  Materias.associate = (models) => {
    const { Ofertas, Maestros } = models;
    Materias.hasMany(Ofertas, { as: 'Ofertas ' });
    Materias.belongsToMany(Maestros, { through: 'materias_maestros', as: 'Maestros' });
  };
  return Materias;
};
