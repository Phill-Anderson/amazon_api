/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('urdun_comment', {
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
		ognoo: {
			type: DataTypes.DATE,
			allowNull: false
		},
		ner: {
			type: DataTypes.STRING(150),
			allowNull: true
		},
		comment: {
			type: DataTypes.STRING(450),
			allowNull: true
		}
	}, {
		tableName: 'urdun_comment',
		timestamps: false
	});
};
