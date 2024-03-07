import styled from 'styled-components';
import { useState, useContext } from 'react';
import ProgressBar from './ProgressBar';
import ReadingGoalModal from './ReadingGoalModal';
import { ReadingStatsContext } from '../contexts/ReadingStatsContext';

function ReadingGoalHero() {
  const readingStats = useContext(ReadingStatsContext);

  if (!readingStats) {
    return null; // Return null if the context is not available
  }

  const { goal, setGoal, completed, progress } = readingStats; // Destructure the context values

  return (
    <Wrapper>
      <ReadingGoal
        goal={goal}
        setGoal={setGoal}
        completed={completed}
        progress={progress}
      />
      <ProgressBar progress={progress} />
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

function ReadingGoal({ goal, setGoal, completed, progress }) {
  const [isModalOpen, setModalOpen] = useState(false);

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
