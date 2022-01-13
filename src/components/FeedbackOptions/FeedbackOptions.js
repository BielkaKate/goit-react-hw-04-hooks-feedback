import propTypes from "prop-types"
import s from "./FeedbackOptions.module.css"


const FeedbackOptions = ({options, onLeaveFeedback}) => {
    return (
<div>
   {options.map((option)=>{
       return(
        <button className={s.optionButton} type="button" name={option} onClick={onLeaveFeedback}>{option}</button>
        )
    }
       )
       } 
</div>
    )
}

FeedbackOptions.propTypes = {
    options: propTypes.arrayOf(propTypes.string.isRequired
    ),
    onLeaveFeedback: propTypes.func.isRequired
 }

export default FeedbackOptions;