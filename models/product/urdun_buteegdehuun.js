/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('urdun_buteegdehuun', {
		id: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		urdun_id: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: false
		},
		buteegdehuun_id: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: false
		}
	}, {
		tableName: 'urdun_buteegdehuun',
		timestamps: false
	});
};
