import React, {createContext, useState} from "react";

export const DataContext = createContext();

export const DataProvider = props =>{

  const [studentData, setStudentData] = useState([]);
  const [searchByName, setSearchByName] = useState("");
  const [searchByTag, setsearchByTag] = useState("");


  return(
    <DataContext.Provider value={{student: [studentData, setStudentData],
                                  searchName: [searchByName, setSearchByName],
                                  searchTags: [searchByTag, setsearchByTag] }} >

       {props.children}

    </DataContext.Provider>
  );
}