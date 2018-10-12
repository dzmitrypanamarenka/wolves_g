import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const PostSchema = new Schema({
  title: {
    type: String,
    unique: true
  },
  tag: {
    type: String
  },
  text: {
    type: String
  }
});
const PostModel = mongoose.model('posts', PostSchema);

export default PostModel;
