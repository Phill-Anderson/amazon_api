/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('course', {
		id: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: false,
			primaryKey: true
		},
		name: {
			type: DataTypes.STRING(200),
			allowNull: false
		},
		price: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		tailbar: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		createdAt: {
			type: DataTypes.DATE,
			allowNull: false
		},
		updatedAt: {
			type: DataTypes.DATE,
			allowNull: false
		}
	}, {
		tableName: 'course',
		timestamps: false
	});
};
