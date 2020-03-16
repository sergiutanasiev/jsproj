import bcrypt from 'bcrypt'

const user = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        username: {
            type: DataTypes.STRING,
            unique: true
        },
        email: DataTypes.STRING,
        password: DataTypes.STRING
    }, {
        hooks: {
            beforeCreate: (user) => {
                const salt = bcrypt.genSaltSync()
                user.password = bcrypt.hashSync(user.password, salt)
            }
        },
        instanceMethods: {
            validPassword: (password) => {
                return bcrypt.compareSync(password, this.password)
            }
        }
    })

    User.associate = models => {
        User.hasMany(models.Message, { onDelete: 'CASCADE' })
    }

    return User
}

export default user