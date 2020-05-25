/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('urdun', {
		id: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		ognoo: {
			type: DataTypes.DATE,
			allowNull: false
		},
		web_id: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: false
		},
		user: {
			type: DataTypes.STRING(100),
			allowNull: false
		},
		garchig: {
			type: DataTypes.STRING(450),
			allowNull: false
		},
		urdun: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		image: {
			type: DataTypes.STRING(450),
			allowNull: false
		},
		view: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: true,
			defaultValue: '1'
		},
		share_button: {
			type: DataTypes.STRING(1000),
			allowNull: true
		}
	}, {
		tableName: 'urdun',
		timestamps: false
	});
};
