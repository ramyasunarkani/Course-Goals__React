import React,{useState} from 'react';
import Button from '../UI/Button';
import './CourseInput.css';
 const CourseInput=(props)=>{
  const [newInput,setNewInput]=useState("");
  const [isValid,setIsValid]=useState(true);

  const goalInputChangeHandler = (event) => {
    if (event.target.value.trim().length >0) {
      setIsValid(true);
    }
    setNewInput(event.target.value);
    

  };

  const formSubmitHandler=(event)=>{
    event.preventDefault();
    if(newInput.trim().length===0){
      setIsValid(false);
      return;
    }
    props.onAddGoal(newInput);

    setNewInput("");

  }
  return(
    <form onSubmit={formSubmitHandler}>
        <div className={`form-control ${!isValid ? "invalid":""}`}>
            <label htmlFor="goalInput"> Course Goal</label>
            <input type='text' id='goalInput' 
            value={newInput} 
            onChange={goalInputChangeHandler}/>
        </div>
        <Button type='submit'>Add Goal</Button>
    </form>
  );
 }
export default CourseInput ;
