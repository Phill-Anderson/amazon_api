/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('video', {
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
			type: DataTypes.STRING(450),
			allowNull: false
		},
		garchig: {
			type: DataTypes.STRING(450),
			allowNull: false
		},
		video: {
			type: DataTypes.STRING(600),
			allowNull: false
		},
		tailbar: {
			type: DataTypes.TEXT,
			allowNull: true
		}
	}, {
		tableName: 'video',
		timestamps: false
	});
};
