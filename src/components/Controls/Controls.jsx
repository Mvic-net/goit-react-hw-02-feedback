import css from './Controls.module.css';

export const Controls = ({ options, handlerClick, className = '' }) => {
  return (
    <ul className={`${css.controlsList}`}>
      {options.map(option => (
        <li>
          <button
            className={`${css.controlsBtn}`}
            key={option}
            type="button"
            onClick={() => {
              handlerClick(option);
            }}
          >
            {option}
          </button>
        </li>
      ))}
    </ul>
  );
};
