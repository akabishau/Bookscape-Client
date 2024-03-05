import React, { useState, createContext, useEffect } from 'react';

type ReadingStats = {
  goal: number;
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
  const [goal, setGoal] = useState(20);
  const [completed, setCompleted] = useState(5);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (goal > 0) {
      setProgress((completed / goal) * 100);
    }
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
