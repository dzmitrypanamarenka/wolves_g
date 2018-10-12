import React from 'react';
import { Button } from 'antd';

import Blog from '../components/Blog';
import 'antd/dist/antd.css';

export default () => <div className="router-wrap">
  <Blog/>
  <Button type="danger" size='large'>Danger</Button>
</div>;
