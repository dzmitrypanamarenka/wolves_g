import React from 'react';

import './styles/styles.scss';
import Link from "next/link";

export default () => <div className="coming-soon">
    <Link href={`/`}>
    <a className='link'>
      <span className='title'>Zurück zur Startseite</span>
    </a>
  </Link>
</div>