import React, {useEffect, useContext} from 'react'
import { DataContext } from '../DataContext'

const ShowTags = ({tag, studentId}) => {
  const {student} =  useContext(DataContext);
  const [studentData, setStudentData] = student;



useEffect(() => {

  const findStudent =  studentData.find((student) =>{
    return   student.id == studentId.toString();
   })
   findStudent.tags = [];
   findStudent.tags.push(tag);

}, [tag])






  return (
    <div className='showTag'>
     <ul>
      {tag.length != 0 ?
        tag.map((value) => (
          <div key={value.id}>
           <li key={value.id} className='tags'> <span>{value.tagName} </span></li>

          </div>
        ))
        :

        studentData.map((student) =>{
          if(student.hasOwnProperty('tags'))
          {

            student.tags.map((tagValue) =>{

                tagValue.map((tg) =>{
                    console.log(tg)
                    return (
                        <div key={tg.id}>
                            <li key={tg.id} className='tags'> <span>{tg.tagName} </span></li>

                        </div>
                    );
                })
            })
          }
        })

      }
      </ul>
    </div>
  )
}

export default ShowTags