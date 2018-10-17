import React from 'react';
import Link from 'next/link';

import './styles.scss';

export default ({ _id, title, text }) => <section className={`${_id}-post post-wrap`}>
    <h3 className='title'>{ title }</h3>
    <p className='text'>{ text }</p>
    <Link href={`/blog/posts/${_id}`}>
      <a>push</a>
    </Link>
  </section>
