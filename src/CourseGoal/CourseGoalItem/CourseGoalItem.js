import React from 'react';
import './CourseItem.css';

const CourseGoalItem =(props)=>{
    return(
        <li className="goal-item"> {props.children}</li>
    );
}

export default CourseGoalItem;
