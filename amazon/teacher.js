/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('teacher', {
		id: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: false,
			primaryKey: true
		},
		name: {
			type: DataTypes.STRING(20),
			allowNull: false
		},
		phone: {
			type: DataTypes.STRING(12),
			allowNull: false
		},
		password: {
			type: DataTypes.STRING(12),
			allowNull: false
		},
		login_date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		birth_date: {
			type: DataTypes.DATEONLY,
			allowNull: true
		}
	}, {
		tableName: 'teacher',
		timestamps: false
	});
};
