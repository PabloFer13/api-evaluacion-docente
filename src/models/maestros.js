module.exports = (sequelize, DataTypes) => {
  class Maestros extends sequelize.Sequelize.Model { }
  Maestros.init({
    id: {
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
      type: DataTypes.INTEGER,
      comment: 'ID del Maestro',
    },
    nombre: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    segundoNombre: {
      allowNull: true,
      type: DataTypes.STRING,
    },
    apellido: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    segundoApellido: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    email: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    password: {
      allowNull: false,
      type: DataTypes.STRING,
    },
  }, {
    timestamps: true,
    underscored: true,
    paranoid: true,
    sequelize,
  });

  Maestros.associate = (models) => {
    const { Materias, Ofertas } = models;
    Maestros.belongsToMany(Materias, { through: 'materias_maestros', as: 'Materias' });
    Maestros.hasMany(Ofertas, { as: 'Ofertas' });
  };
  return Maestros;
};
