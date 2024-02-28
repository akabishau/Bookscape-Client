import styled from 'styled-components';
import { useState } from 'react';
import ProgressBar from './ProgressBar';

function ReadingGoalHero() {
  const [progress, setProgress] = useState(10);
  return (
    <Wrapper>
      <Goal>
        <h1>Reading Goal</h1>
        <button onClick={() => setProgress(progress + 5)}>Edit</button>
        <p>{progress}%</p>
        <p>You have read 43 of 50 books.</p>
        <p>6 books behind schedule</p>
      </Goal>
      <ProgressBar progress={progress} />
    </Wrapper>
  );
}

export default ReadingGoalHero;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
  gap: 1rem;
  background-color: pink;
`;

const Goal = styled.div`
  display: grid;
  gap: 1rem;
  justify-items: start;
  background-color: yellow;
`;
