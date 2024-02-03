import reliabilityImg from '../../../public/reliability.jpg';
import Hero from '@/components/Hero';

export default function PerformancePage() {
  return (
    <Hero
      imgData={reliabilityImg}
      imgAlt='welding'
      title='Super high reliability hosting '
    />
  );
}
