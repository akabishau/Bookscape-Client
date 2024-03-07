import styled from 'styled-components';
import { useState } from 'react';
import ProgressBar from './ProgressBar';
import ReadingGoalModal from './ReadingGoalModal';
import useReadingStats from '../hooks/useReadingStats';

function ReadingGoalHero() {
  return (
    <Wrapper>
      <ReadingGoal />
      <ProgressBar />
    </Wrapper>
  );
}

export default ReadingGoalHero;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
  gap: 1rem;
`;

const Goal = styled.div`
  display: grid;
  gap: 1rem;
  justify-items: start;
  background-color: yellow;
`;

function ReadingGoal() {
  const [isModalOpen, setModalOpen] = useState(false);
  const { goal, setGoal, completed, progress } = useReadingStats();

  const handleSetGoal = goal => {
    setGoal(goal);
    setModalOpen(false);
  };
  return (
    <ReadingGoalContainer>
      <h1>Reading Goal</h1>
      <div>
        <button onClick={() => setModalOpen(true)}>Set Reading Goal</button>
        <ReadingGoalModal
          isOpen={isModalOpen}
          onClose={() => setModalOpen(false)}
          onSetGoal={handleSetGoal}
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

const ReadingGoalContainer = styled.div`
  /* Add styles for the container */
  background-color: pink;
`;
