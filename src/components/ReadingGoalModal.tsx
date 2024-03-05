import { useState } from 'react';
import styled from 'styled-components';

// Styled components for the modal
const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalContainer = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  width: 400px; // Adjust the width as necessary
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ModalTitle = styled.h2`
  margin: 0;
  font-size: 24px;
`;

const ModalInput = styled.input`
  margin: 20px 0;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const ModalButton = styled.button`
  background-color: #ff8c00;
  color: white;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #ff7f00;
  }
`;

const CancelButton = styled(ModalButton)`
  background-color: transparent;
  color: black;

  &:hover {
    background-color: #f0f0f0;
  }
`;

// The modal component itself
const ReadingGoalModal = ({ isOpen, onClose, onSetGoal }) => {
  const [goal, setGoal] = useState('');

  if (!isOpen) {
    return null;
  }

  return (
    <ModalBackdrop onClick={onClose}>
      <ModalContainer onClick={e => e.stopPropagation()}>
        <ModalTitle>Reading Goal</ModalTitle>
        <div>How many books would you like to read in 2024?</div>
        <ModalInput
          type="number"
          value={goal}
          onChange={e => setGoal(e.target.value)}
          placeholder="Enter number"
        />
        <ModalButton onClick={() => onSetGoal(goal)}>Set goal</ModalButton>
        <CancelButton onClick={onClose}>Cancel</CancelButton>
      </ModalContainer>
    </ModalBackdrop>
  );
};

export default ReadingGoalModal;
