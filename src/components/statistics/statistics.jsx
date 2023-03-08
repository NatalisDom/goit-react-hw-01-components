import PropTypes from 'prop-types'
import { getRandomHexColor } from 'utils/randomHexColor'
import css from 'components/statistics/Statistics.module.css'


// створюємо компонент реакт
// якщо title  не переданий, не повинна рендеритись розмітка заголовка <h2>
// у розмітку підгружається масив з файлу data.json

export const Statistics = ({ title, stats }) => {
  return (
    <section className={css.statistics}>
      {/* {title && <h2 className={css.title}>{title}</h2>} */}
      <h2 className={css.title}> Upload stats</h2>

      <ul className={css.statList}>
        {stats.map(({ id, label, percentage }) => {
          return (
            <li
              key={id}
              className={css.item}
              style={{ backgroundColor: getRandomHexColor(), }}
            >
              <span className={css.label}>{label}</span>
              <span className={css.percentage}>{percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  )
}


Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};


