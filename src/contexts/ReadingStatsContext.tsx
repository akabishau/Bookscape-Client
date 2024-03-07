import React, { useState, createContext, useEffect } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

type ReadingStats = {
  goal: number | null;
  setGoal: (goal: number) => void;
  completed: number;
  setCompleted: (completed: number) => void;
  progress: number;
};

export const ReadingStatsContext = createContext<ReadingStats | undefined>(
  undefined
);

type ProviderProps = {
  children: React.ReactNode;
};

export const ReadingStatsProvider: React.FC<ProviderProps> = ({ children }) => {
  const [goal, setGoal] = useLocalStorage<number | null>('readingGoal', null);
  const [completed, setCompleted] = useLocalStorage<number>(
    'booksCompleted',
    7
  );
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress(goal && goal > 0 ? (completed / goal) * 100 : 0);
  }, [completed, goal]);

  const value: ReadingStats = {
    goal,
    setGoal,
    completed,
    setCompleted,
    progress
  };

  return (
    <ReadingStatsContext.Provider value={value}>
      {children}
    </ReadingStatsContext.Provider>
  );
};
