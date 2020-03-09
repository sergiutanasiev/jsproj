const user = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        username: {
            type: DataTypes.STRING,
            unique: true
        }
    })

    User.associate = models => {
        User.hasMany(models.Message, { onDelete: 'CASCADE' })
    }

    return User
}

export default user