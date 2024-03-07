import { useContext } from 'react';
import { ReadingStatsContext } from '../contexts/ReadingStatsContext';

function useReadingStats() {
  const context = useContext(ReadingStatsContext);

  if (!context) {
    throw new Error(
      'useReadingStats must be used within a ReadingStatsProvider'
    );
  }
  return context;
}

export default useReadingStats;
