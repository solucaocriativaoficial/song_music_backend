const connection = require('../database/connection');
const Schema = connection.Schema;
const SongSChema = new Schema({
    song_name: {
        type: String,
        required: true,
    },
    cd_id:{
        type: connection.Schema.Types.ObjectId,
        ref: "Cd",
        required: true,
    },
    createdAt:{
        type: Date
    },
    updateAt:{
        type: Date,
        default: Date.now
    }
},{
    collection: "song",
})

module.exports = connection.model('Song', SongSChema)