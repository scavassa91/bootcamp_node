module.exports = (sequelize, DataType) => {
    const Tasks = sequelize.define("Tasks", {
        "id": {
            "type": DataType.INTEGER,
            "primaryKey": true,
            "autoIncrement": true
        },
        "title": {
            "type": DataType.STRING,
            "allowNull": false,
            "validade": {
                "notEmpty": true
            }
        },
        "done": {
            "type": DataType.BOOLEAN,
            "allowNull": false,
            "defaultValue": false
        }
    });

    return Tasks;
};