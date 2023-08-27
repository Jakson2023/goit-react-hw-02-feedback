import { Buttons } from '../feedback/Feedback.styled';

export const FeedbackOptions = ({ onClick }) => {
  return (
    <Buttons>
      <button onClick={() => onClick('good')}>Good</button>
      <button onClick={() => onClick('neutral')}>Neutral</button>
      <button onClick={() => onClick('bad')}>Bad</button>
    </Buttons>
  );
};
