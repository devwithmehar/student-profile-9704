import React, {createContext, useState} from "react";

export const DataContext = createContext();

export const DataProvider = props =>{

  const [studentData, setStudentData] = useState([]);
  const [searchByName, setSearchByName] = useState("");
  const [tag, setTag] = useState([]);


  return(
    <DataContext.Provider value={{student: [studentData, setStudentData],
                                  searchName: [searchByName, setSearchByName],
                                  tags: [tag, setTag] }} >

       {props.children}

    </DataContext.Provider>
  );
}