module.exports = (sequelize, DataTypes) => {
  class Horarios extends sequelize.Sequelize.Model { }
  Horarios.init({
    id: {
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
      type: DataTypes.INTEGER,
      comment: 'ID del Maestro',
    },
    seccion: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    primerDia: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    segundoDia: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    horaInicioPrimerDia: {
      allowNull: false,
      type: DataTypes.TIME,
    },
    horaFinPrimerDia: {
      allowNull: false,
      type: DataTypes.TIME,
    },
    horaInicioSegundoDia: {
      allowNull: false,
      type: DataTypes.TIME,
    },
    horaFinSegundoDia: {
      allowNull: false,
      type: DataTypes.TIME,
    },
  }, {
    timestamps: true,
    underscored: true,
    paranoid: true,
    sequelize,
  });

  Horarios.associate = (models) => {
    Horarios.hasMany(models.Ofertas, { as: 'Ofertas' });
  };
  return Horarios;
};
