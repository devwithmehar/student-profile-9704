import React from 'react'
import StudentList from './StudentList'
import SearchByName from './SearchByName'
import SearchByTag from './SearchByTag'


const MainContent = () => {
  return (
    <div className='mainContent'>

    <SearchByName />
    
    <SearchByTag />


    <div className='scrollArea'>
       <StudentList />

    </div>

    </div>
  )
}

export default MainContent