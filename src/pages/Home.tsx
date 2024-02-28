import { useState } from 'react';
import DefaultLayout from '../layout/DefaultLayout';
import ProgressBar from '../components/ProgressBar';

export default function Home() {
  const [progress, setProgress] = useState(10);

  return (
    <DefaultLayout>
      <button onClick={() => setProgress(progress + 5)}>
        Increase Progress
      </button>
      <h1>Home Page</h1>
      <ProgressBar progress={progress} />
    </DefaultLayout>
  );
}
