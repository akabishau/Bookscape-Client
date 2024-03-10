import styled from 'styled-components';
import { useState } from 'react';

import ReadingGoalModal from './ReadingGoalModal';
import useReadingStats from '../../hooks/useReadingStats';

function ReadingGoal() {
  const [isModalOpen, setModalOpen] = useState(false);
  const { goal, completed, progress } = useReadingStats();

  return (
    <ReadingGoalContainer>
      <h1>Reading Goal</h1>
      <div>
        <button onClick={() => setModalOpen(true)}>Set Reading Goal</button>
        <ReadingGoalModal
          isOpen={isModalOpen}
          onClose={() => setModalOpen(false)}
        />
      </div>
      <p>{progress}%</p>
      {goal ? (
        <p>
          You have read {completed} of {goal} books.
        </p>
      ) : (
        <p>You haven't set a reading goal for 2024 yet.</p>
      )}
      <p>{goal - completed} books behind schedule</p>
    </ReadingGoalContainer>
  );
}

export default ReadingGoal;

const ReadingGoalContainer = styled.div`
  display: grid;
  gap: 1rem;
  justify-items: start;
  background-color: pink;
`;
