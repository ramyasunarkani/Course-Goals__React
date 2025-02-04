import React,{useState} from 'react';
import './App.css';

import CourseGoalInput from './CourseGoal/CourseInput/CourseGoalInput';
import CourseGoalList from './CourseGoal/CourseGoalList/CourseGoalList'
function App() {
  const [courseGoals,setCourseGoals ]=useState([
    { text: "Do all exercises!", id: "g1" },
    { text: "Finish the course!", id: "g2" },
  ])
 const addGoalHandler=(input)=>{
  
  setCourseGoals ((prevState)=>{
    return [{text:input,id:Math.random().toString()},...prevState];

  })
 }

  return (
    <div>
      <section id="goal-form">
        <CourseGoalInput onAddGoal={addGoalHandler} />
      </section>      
      <section id="goals">
      <CourseGoalList items={courseGoals}/>
      </section>
    </div>
  );
}

export default App;
