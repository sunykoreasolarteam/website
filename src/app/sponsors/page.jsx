import fs from 'fs';
import path from 'path';
import SponsorsClient from '../../components/SponsorsClient';

export const metadata = {
  title: 'Our Partners | SUNY Korea Solar Team',
  description: 'We are proud to partner with industry leaders who support student engineering and sustainable mobility innovation.',
};

export default function Sponsors() {
  const sponsorsBasePath = path.join(process.cwd(), 'public', 'assets', 'sponsors');
  
  const getLogos = (category) => {
    const dirPath = path.join(sponsorsBasePath, category);
    if (!fs.existsSync(dirPath)) return [];
    
    return fs.readdirSync(dirPath)
      .filter(f => f.match(/\.(png|jpg|jpeg|svg)$/i))
      .map(file => `/assets/sponsors/${category}/${file}`);
  };

  const titleLogos = getLogos('title-partner');
  const foundingLogos = getLogos('founding-partner');
  const goldLogos = getLogos('gold-partner');
  const silverLogos = getLogos('silver-partner');
  const bronzeLogos = getLogos('bronze-partner');

  return (
    <SponsorsClient 
      titleLogos={titleLogos}
      foundingLogos={foundingLogos}
      goldLogos={goldLogos}
      silverLogos={silverLogos}
      bronzeLogos={bronzeLogos}
    />
  );
}
