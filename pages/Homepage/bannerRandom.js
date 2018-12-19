import React from "react";

export default () => {
  const matchSrc = {
    0: 'http://www.spiele-offensive.de/gfxa/wbg/300x250_1.jpg',
    1: 'http://www.spiele-offensive.de/gfxa/wbg/300x250_2.jpg',
    2: 'http://www.spiele-offensive.de/gfxa/wbg/300x250_3.jpg'
  };
  const matchHref = {
    0: 'http://www.spiele-offensive.de/referrer.php?p=10&pid=483&bid=143',
    1: 'http://www.spiele-offensive.de/referrer.php?p=11&pid=483&bid=143',
    2: 'http://www.spiele-offensive.de/referrer.php?p=12&pid=483&bid=143'
  };
  const numb = Math.round(Math.random() * 2);
  return <a href={matchHref[numb]} className='link'>
    <img src={matchSrc[numb]} alt='banner' className='img'/>
  </a>
}
