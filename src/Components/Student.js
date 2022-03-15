import React from 'react'

const Student = ({img, firstName,  lastName , email , company,  skill , grades}) => {

  let sum = 0;

  grades.forEach(grade => {

       sum = parseInt(grade) + sum;

  });

   let average = (sum/grades.length);

  return (
    <div className='studentContent'>
          <div className='picArea'>
          <img src= {img} alt = "Student Pic" className='pic' />
          </div>

          <div className='studentInfo'>
              <h1> {firstName} {lastName} </h1>

               <ul>
                 <li> Email : {email} </li>
                 <li> Company : {company} </li>
                 <li> Skills : {skill} </li>
                 <li> Average : {average}% </li>
               </ul>
          </div>

    </div>
  )
}

export default Student