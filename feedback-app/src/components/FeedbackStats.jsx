import { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';

function FeedbackStats() {
  const { feedback } = useContext(FeedbackContext);

  const l = feedback.length;
  const reviewsInfo = l > 1 ? `${l} Reviews` : l > 0 ? 'One Review' : 'No Reviews Yet';
  let avg = feedback.reduce((acc, cur) => {
    return acc + cur.rating / l;
  }, 0);
  avg = avg.toFixed(1).replace(/[.,]0$/, '');

  return (
    <div className="feedback-stats">
      <h4>{reviewsInfo}</h4>
      <h4>Average Rating: {isNaN(avg) ? 0 : avg}</h4>
    </div>
  );
}

export default FeedbackStats;
