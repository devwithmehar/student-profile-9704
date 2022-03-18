import React, {useContext} from 'react'
import { DataContext } from '../DataContext';

const SearchByTag = () => {
  const { searchTags } = useContext(DataContext);
 const [searchByTag, setsearchByTag] = searchTags;

 const hangleChange = (e) => {
  setsearchByTag(e.target.value);
}



  return (
     <div className='searchArea'>
      <input type='text' placeholder='Search by tag' className='searchByTag' onChange={hangleChange} />
    </div>
  )
}

export default SearchByTag