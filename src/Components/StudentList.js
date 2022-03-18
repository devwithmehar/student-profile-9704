import React, {useContext, useEffect, useState} from 'react'
import { DataContext } from '../DataContext'
import Axios from '../Axios'
import Student from './Student'


const StudentList = () => {
  const {student, searchName , searchTags } = useContext(DataContext)
  const [studentData, setStudentData] = student;
  const [searchByName, setSearchByName] = searchName;
  const [searchByTag, setsearchByTag] = searchTags;



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

          }).filter((value) =>{
            if(searchByTag == "")
            {
              return value;
            }
            else if(value.hasOwnProperty('tags'))
            {
              let matchTag = "";

              value.tags.map((tagValue) =>{
                tagValue.map((finalTag) =>{


                  if(finalTag.tagName.toLowerCase().includes(searchByTag.toLowerCase()))
                  {
                    console.log(matchTag);
                    matchTag = finalTag.tagName;

                  }

                })

              })
              return matchTag;
            }


          }).map((student) => (
            <div key={student.id}>

                <Student key={student} id={student.id} img = {student.pic} firstName = {student.firstName}
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