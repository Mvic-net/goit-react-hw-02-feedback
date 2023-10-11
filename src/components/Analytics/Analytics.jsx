export const Analytics = ({
  countTotalFeedback,
  countPositiveFeedbackPercent,
}) => {
  return (
    <>
      <h2>Analytics</h2>
      <div>
        <p>Total: </p>
        <span>{countTotalFeedback} %</span>
      </div>
      <div>
        <p>Positive feedback: </p>
        <span>{countPositiveFeedbackPercent} %</span>
      </div>
    </>
  );
};
