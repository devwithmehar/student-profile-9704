import React, {useState, useContext, useEffect} from 'react'
import {ImPlus , ImMinus } from 'react-icons/im'
import StudentGrades from './StudentGrades';
import TagForm from './TagForm';
import ShowTags from './ShowTags';
import { DataContext } from '../DataContext';

const Student = ({id,img, firstName,  lastName , email , company,  skill , grades }) => {

  const [isHide, setIsHide] = useState(true);
  const [tag, setTag] = useState([]);
  const {student} = useContext(DataContext)
  const [studentData, setStudentData] = student;






  let sum = 0;

  grades.forEach(grade => {

       sum = parseInt(grade) + sum;

  });

   let average = (sum/grades.length);

   const changeStatus = () => {
     setIsHide(!isHide);
   }

  return (
    <div className='studentContent'>
      <div className='studentArea'>
          <div className='picArea'>
          <img src= {img} alt = "Student Pic" className='pic' />
          </div>

          <div className='studentData' >
              <h1> {firstName} {lastName} </h1>

               <ul className='adjustInfo'>
                 <li> Email : {email} </li>
                 <li> Company : {company} </li>
                 <li> Skills : {skill} </li>
                 <li> Average : {average}% </li>
               </ul>

                {/* Here we import the component depend on the condition */}
                {isHide ? "" : <StudentGrades grades={grades} />}



                {tag.length !=0 ? <ShowTags tag={tag} studentId={id} /> : ""}

                <TagForm tag={tag} setTag={setTag}   studentId={id}  />
          </div>
      </div>

      <div className='showGrades'>
      {isHide ? <ImPlus className='iconStyle' onClick={changeStatus} /> : <ImMinus className='iconStyle' onClick={changeStatus} /> }

      </div>

    </div>
  )
}

export default Student