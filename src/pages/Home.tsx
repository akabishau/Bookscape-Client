import DefaultLayout from '../layout/DefaultLayout';
import ReadingGoalHero from '../components/ReadingGoalHero';

export default function Home() {
  return (
    <DefaultLayout>
      <ReadingGoalHero />
      <br />
      <br />
      <h1>Home Page Content</h1>
    </DefaultLayout>
  );
}
