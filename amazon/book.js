/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('book', {
		id: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		user_id: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: false,
			references: {
				model: 'user',
				key: 'id'
			}
		},
		une: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: false
		},
		name: {
			type: DataTypes.STRING(45),
			allowNull: false
		},
		create_date: {
			type: DataTypes.DATE,
			allowNull: false
		}
	}, {
		tableName: 'book',
		timestamps: false
	});
};
