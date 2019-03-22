import next from 'next';
import dotenv from 'dotenv';

dotenv.config();

const dev = process.env.NODE_ENV === 'development';

export default next({ dev });

