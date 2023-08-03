const { default: mongoose } = require('mongoose');
const mongodb = require('mongoose');
const { Schema } = mongoose;

const photoSchema = new Schema(
  {
    image: String,
    title: String,
    likes: String,
    comments: Array,
    userId: mongoose.ObjectId,
    userName: String,
  },
  {
    timestamps: true,
  },
);

const Photo = mongoose.model('Photo', photoSchema);

module.exports = Photo;
