import PropTypes from 'prop-types'
import s from './FeedbackOptions.module.css'

function FeedbackOptions({ options, onLeaveFeedback }) {
  const optionsArr = Object.keys(options)

  return (
    <div className={s.buttons}>
      {optionsArr.map((option) => (
        <button
          key={option}
          type="button"
          className={s.button}
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </button>
      ))}
    </div>
  )
}

export default FeedbackOptions

FeedbackOptions.propTypes = {
  options: PropTypes.objectOf(PropTypes.number.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
}
