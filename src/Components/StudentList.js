import React, {useContext, useEffect} from 'react'
import { DataContext } from '../DataContext'
import Axios from '../Axios'

const StudentList = () => {
  const [studentData, setStudentData] = useContext(DataContext)

    useEffect(() => {

      Axios.get("students")
      .then(res => {
        // Here we are setting the data in studentData
        setStudentData(res.data.students);
      })
      .catch(error =>{
        console.log(error);
      })

    }, [])



  return (
    <div>
          <ul>
          {studentData.map((student) => (
            <div key={student.id.toString()}>

                <li key={student.id.toString()} > {student.city} </li>

            </div>
          ))}
          </ul>


    </div>
  )
}

export default StudentList