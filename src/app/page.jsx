import fs from 'fs';
import path from 'path';
import HomeClient from '../components/HomeClient';

export default function Home() {
  const sponsorsBasePath = path.join(process.cwd(), 'public', 'assets', 'sponsors');
  const allSponsorsUrls = [];

  const categories = ['principle-partners', 'technical-partners', 'industry-partners', 'academic-support'];
  
  categories.forEach(category => {
    const dirPath = path.join(sponsorsBasePath, category);
    if (fs.existsSync(dirPath)) {
      const files = fs.readdirSync(dirPath).filter(f => f.match(/\.(png|jpg|jpeg|svg)$/i));
      files.forEach(file => {
        allSponsorsUrls.push(`/assets/sponsors/${category}/${file}`);
      });
    }
  });

  return <HomeClient allSponsorLogos={allSponsorsUrls} />;
}
