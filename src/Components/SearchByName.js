import React, {useContext} from 'react'
import { DataContext } from '../DataContext';

const SearchByName = () => {
  const {searchName} = useContext(DataContext);
  const [searchByName, setSearchByName] = searchName;



  const hangleChange = (e) => {
    setSearchByName(e.target.value);
  }

  return (
    <div className='searchArea'>
      <input type='text' placeholder='Search by name' className='searchByName' onChange={hangleChange} />
    </div>
  )
}

export default SearchByName