module.exports = (sequelize, DataTypes) => {
  class Alumnos extends sequelize.Sequelize.Model { }
  Alumnos.init({
    id: {
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
      type: DataTypes.INTEGER,
      comment: 'ID del Alumno',
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
    matricula: {
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

  Alumnos.associate = (models) => {
    Alumnos.hasMany(models.Cargas, { as: 'Cargas' });
    Alumnos.belongsToMany(models.Periodos, { through: 'periodos_alumnos', as: 'Periodos' });
  };
  return Alumnos;
};
