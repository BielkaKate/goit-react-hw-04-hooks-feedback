import propTypes from "prop-types"
import s from "./Statistics.module.css"

const Statistics = ({good, neutral, bad, total, positive}) => {
    return(
        <div>
            <ul className={s.list}>
                <li className={s.listItem}>Good: {good}</li>
                <li className={s.listItem}>Neutral: {neutral}</li>
                <li className={s.listItem}>Bad: {bad}</li>
                <li className={s.listItem}>Total: {total}</li>
                <li className={s.listItem}>Positive feedback: {positive}%</li>
            </ul>
        </div>
    )
}

Statistics.propTypes = {
    good: propTypes.number.isRequired, 
    neutral: propTypes.number.isRequired, 
    bad: propTypes.number.isRequired, 
    total: propTypes.number.isRequired, 
    positive: propTypes.number.isRequired
}

export default Statistics