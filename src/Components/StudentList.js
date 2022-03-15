import React, {useContext, useEffect} from 'react'
import { DataContext } from '../DataContext'
import Axios from '../Axios'
import Student from './Student'

const StudentList = () => {
  const [studentData, setStudentData] = useContext(DataContext)


    useEffect(() => {
// Fetch the api when the component will mount
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
    <div className='studentList'>
          <ul>
          {studentData.map((student) => (
            <div key={student.id.toString()}>

                <Student key={student} img = {student.pic} firstName = {student.firstName}
                lastName = {student.lastName} email = {student.email} company = {student.company}
                skill = {student.skill}  grades = {student.grades}
                />

            </div>
          ))}
          </ul>


    </div>
  )
}

export default StudentList