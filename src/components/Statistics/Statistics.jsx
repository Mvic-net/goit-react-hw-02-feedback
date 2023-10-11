import css from './Statistics.module.css';

export const Statistics = ({ good, neutral, bad, className = '' }) => {
  return (
    <>
      <h2 className={`${css.statisticsTitle}`}>Statistics</h2>
      <ul className={`${css.statisticList}`}>
        <li className={`${css.statisticsListItem}`}>
          <p className="statisticsSubTitle">Good</p>
          <span>{good}</span>
        </li>
        <li className={`${css.statisticsListItem}`}>
          <p className="statisticsSubTitle">Neutral</p>
          <span>{neutral}</span>
        </li>
        <li className={`${css.statisticsListItem}`}>
          <p className="statisticsSubTitle">Bad</p>
          <span>{bad}</span>
        </li>
      </ul>
    </>
  );
};
