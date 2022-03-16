import React from 'react'

const StudentGrades = (grades) => {

  const showList = (li) =>{
    return li();
  }


  return (
    <ul className='adjustGrades'>

      {
        showList(() => {
          const row = [];
          for (var i = 0; i < grades.grades.length; i++) {
            let sum = 0;
            sum = i + 1;
            row.push(<li key={i}> Test {sum}:  <span className='gradeSpan'> {grades.grades[i]}% </span> </li>);
          }
          return row;
        })
      }
    </ul>
  )
}

export default StudentGrades