import React from 'react';
import {Row, Col} from 'antd';
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
    this.props.fetchPreviewPosts();
  }
  
  render(){
    const previews = this.props.previews ? setImages(this.props.previews) : {};
    const chunkedPreviews = _.chunk(previews, 2);
    
    const styles = {
      backgroundImage: 'url(' + '../../static/img/preview1.JPG' + ')'
    };
    
    return <div className="blog-content">
      { chunkedPreviews.map(el => <Row key={_.uniqueId()} gutter={24}>
        { el.map((e, i) => <Col key={_.uniqueId()} span='12' className='item'>
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
            <span className='text'> { e.tag }</span>
          </div>
        </Col>) }
      </Row>) }
    </div>
  }
}
