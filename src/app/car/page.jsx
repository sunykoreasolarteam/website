import fs from 'fs';
import path from 'path';
import CarClient from '../../components/CarClient';

export const metadata = {
  title: 'The Car | SUNY Korea Solar Team',
  description: 'Explore Samjoko-I, our high-efficiency solar-powered race vehicle designed for international competition.',
};

export default function Car() {
  const turntableBasePath = path.join(process.cwd(), 'public', 'assets', '36frame-turntable');
  let imagePaths = [];

  if (fs.existsSync(turntableBasePath)) {
    const files = fs.readdirSync(turntableBasePath).filter(f => f.match(/^frame\.\d+\.png$/i));
    
    imagePaths = files.sort((a, b) => {
      const numA = parseInt(a.match(/frame\.(\d+)\.png/i)[1], 10);
      const numB = parseInt(b.match(/frame\.(\d+)\.png/i)[1], 10);
      return numA - numB;
    }).map(file => `/assets/36frame-turntable/${file}`);
  }

  return <CarClient imagePaths={imagePaths} />;
}
