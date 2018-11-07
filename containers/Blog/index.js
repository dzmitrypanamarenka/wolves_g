import { connect } from 'react-redux';
import { postActions } from '../../redux/actions';
import Blog from '../../components/Blog';

const { fetchPosts } = postActions;

const mapStateToProps = ({ posts }) => {
  // const posts =  state.posts;
  return posts;
};


const BlogContainer = connect(
  mapStateToProps,
  {
    fetchPosts
  },
)(Blog);


export default BlogContainer;