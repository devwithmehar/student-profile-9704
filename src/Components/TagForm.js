import React, {useState, useContext, useHistory} from 'react'
import { DataContext } from '../DataContext';

const TagForm = ({tag,setTag , studentId}) => {
  const [input, setInput] = useState('');
  const {student} =  useContext(DataContext);
  const [studentData, setStudentData] = student;



  const handleChange = (e) =>{
    setInput(e.target.value);
  }



  const handleSubmit = (e) =>{
    e.preventDefault();

   const newTag = {
     id: Math.floor(Math.random() *1000),
     tagName: input,
     studentId: studentId
   }



   setTag(prevData => [...prevData,newTag]);



    setInput('');


  }



  return (
    <form className='tagForm' onSubmit={handleSubmit} >

      <input
      type= 'text'
      placeholder = 'Add a tag'
      value={input}
      name='tag'
      className='tagInput'
      onChange={handleChange}
      />

    </form>
  )
}

export default TagForm