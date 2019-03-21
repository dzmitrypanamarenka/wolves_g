import next from 'next';


const dev = process.env.NODE_ENV === 'development';

export default next({ dev });

