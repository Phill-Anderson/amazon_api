/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('urdun_category', {
		id: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		ner: {
			type: DataTypes.STRING(150),
			allowNull: false
		}
	}, {
		tableName: 'urdun_category',
		timestamps: false
	});
};
