import React from 'react';
import {Icon} from 'antd';

import './styles/style.scss';

export default () => <div className='twitter'>
    <div className='tweet'>
        <div className='icon'><Icon type="twitter" theme="outlined" /></div>
        <div className='content'>
            <p className='text'>#best_site #Dim_best_developer what a wonderfull day today</p>
            <span className='date'>3s day ago</span>
        </div>
    </div>
    <div className='tweet'>
        <div className='icon'><Icon type="twitter" theme="outlined" /></div>
        <div className='content'>
            <p className='text'>#best_site #Dim_best_developer what a wonderfull day today</p>
            <span className='date'>3s day ago</span>
        </div>
    </div>
</div>;