import React, {useContext, useEffect} from 'react'
import { DataContext } from '../DataContext'
import Axios from '../Axios'
import Student from './Student'


const StudentList = () => {
  const {student, searchName} = useContext(DataContext)
  const [studentData, setStudentData] = student;
  const [searchByName, setSearchByName] = searchName;


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
          {studentData.filter((data) => {
            if(searchByName == "")
            {
              return data;
            }
            else if(data.firstName.toLowerCase().includes(searchByName.toLowerCase()) ||
            data.lastName.toLowerCase().includes(searchByName.toLowerCase()))
            {
              return data;
            }

          }).map((student) => (
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