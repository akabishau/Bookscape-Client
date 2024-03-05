import DefaultLayout from '../layout/DefaultLayout';
import ReadingGoalHero from '../components/ReadingGoalHero';
import { ReadingStatsProvider } from '../contexts/ReadingStatsContext';

export default function Home() {
  return (
    <DefaultLayout>
      <ReadingStatsProvider>
        <ReadingGoalHero />
      </ReadingStatsProvider>
      <br />
      <br />
      <h1>Home Page Content</h1>
    </DefaultLayout>
  );
}
