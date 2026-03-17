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

  const principleLogos = getLogos('principle-partners');
  const technicalLogos = getLogos('technical-partners');
  const industryLogos = getLogos('industry-partners');
  const academicLogos = getLogos('academic-support');

  return (
    <SponsorsClient 
      principleLogos={principleLogos}
      technicalLogos={technicalLogos}
      industryLogos={industryLogos}
      academicLogos={academicLogos}
    />
  );
}
