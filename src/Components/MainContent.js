import React from 'react'
import StudentList from './StudentList'
import SearchByName from './SearchByName'


const MainContent = () => {
  return (
    <div className='mainContent'>

    <SearchByName />

    <div className='scrollArea'>
       <StudentList />

    </div>

    </div>
  )
}

export default MainContent