import React from 'react';
import _ from 'lodash';

import './styles/index.scss';
import Link from "next/link";

const setImages = (previews) => {
  return previews.map((el, i) => ({
    styles: {
      backgroundImage: `url('../../static/img/preview${i}.jpg')`
    },
    ...el,
  }))
};

export default class BlogPreview extends React.Component {
  
  componentDidMount() {
    const { route } = this.props.router;
    if (route === '/Blog') {
      return this.props.fetchPreviewPosts('all');
    }
    this.props.fetchPreviewPosts();
  }
  
  render() {
    const sortedPreviews = this.props.previews ?
      this.props.previews.sort((el1, el2) => el1.order - el2.order) :
      [];
    const previews = sortedPreviews.length ? setImages(this.props.previews) : [];
    const chunkedPreviews = _.chunk(previews, 2);
    
    const styles = {
      backgroundImage: 'url(' + '../../static/img/preview1.JPG' + ')'
    };
    
    return <div className="blog-content">
      { chunkedPreviews.map(el => <div key={_.uniqueId()} className='wrap'>
        { el.map((e, i) => <div key={_.uniqueId()} className='item'>
          <Link href={`/blog/posts/${e._id}`}>
            <a className='link'>
              <div className='img' style={e.styles}>
              </div>
            </a>
          </Link>
          <div className='title-wrapper'>
            <Link href={`/blog/posts/${e._id}`}>
              <a className='link'>
                <h3 className='title'>{ e.title }</h3>
              </a>
            </Link>
            <span className='text -tag'> { e.tag }</span>
            <span className='text'> { e.text }</span>
          </div>
        </div>) }
      </div>) }
    </div>
  }
}
