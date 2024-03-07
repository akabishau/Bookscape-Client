import styled from 'styled-components';
import ProgressBar from './ProgressBar';
import ReadingGoal from './ReadingGoal';

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
