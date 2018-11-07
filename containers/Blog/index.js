import {connect} from 'react-redux';
import {postActions} from '../../redux/actions';

// import store from '../../redux/store';
// import BlogPostLayout from '../../pages/BlogPost';
import BlogPostLayout from '../../components/test/huest';

const {fetchPosts} = postActions;

const mapStateToProps = (state) => {
  console.log(state)
  // const posts =  state.posts;
  return state;
};


const BlogLayoutContainer = connect(
  mapStateToProps,
  {
    fetchPosts
  },
)(BlogPostLayout);


export default BlogLayoutContainer;