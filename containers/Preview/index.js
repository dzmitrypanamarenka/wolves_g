import { connect } from 'react-redux';
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


export default PreviewContainer;