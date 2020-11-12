const {Schema} = require('mongoose')

module.exports = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        id: {
            type: Number,
            required: true
        }
    }
)
