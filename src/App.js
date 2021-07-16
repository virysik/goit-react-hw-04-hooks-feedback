import { useState } from 'react'
import Statistics from 'components/Statistics'
import FeedbackOptions from 'components/FeedbackOptions'
import Section from 'components/Section'
import Notification from 'components/Notification'
import s from './App.module.css'

function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  function handleClick(option) {
    switch (option) {
      case 'good':
        return setGood((s) => s + 1)

      case 'neutral':
        return setNeutral((s) => s + 1)

      case 'bad':
        return setBad((s) => s + 1)

      default:
        throw new Error(`there is no such an option as ${option}`)
    }
  }

  let countTotalFeedback = good + neutral + bad

  let countPositiveFeedbackPercentage =
    good !== 0 ? Math.round((good * 100) / countTotalFeedback) : 0

  return (
    <div className={s.container}>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={{ good, neutral, bad }}
          onLeaveFeedback={handleClick}
        ></FeedbackOptions>
      </Section>

      <Section title="Statistics">
        {countTotalFeedback ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback}
            positivePercentage={countPositiveFeedbackPercentage}
          ></Statistics>
        ) : (
          <Notification message="No feedback given" />
        )}
      </Section>
    </div>
  )
}
export default App
