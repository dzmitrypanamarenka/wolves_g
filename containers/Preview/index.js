import { connect } from 'react-redux';
import { withRouter } from 'next/router';
import { previewActions } from '../../redux/actions';
import BlogPreview from '../../components/BlogPreview';

const { fetchPreviewPosts } = previewActions;

const mapStateToProps = ({ previews }) => {
  return previews;
};


const PreviewContainer = connect(
  mapStateToProps,
  {
    fetchPreviewPosts
  },
)(BlogPreview);


export default withRouter(PreviewContainer);
