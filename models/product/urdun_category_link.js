/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('urdun_category_link', {
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
		cat_id: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: false
		}
	}, {
		tableName: 'urdun_category_link',
		timestamps: false
	});
};
