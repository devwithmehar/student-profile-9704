import React, {createContext, useState} from "react";

export const DataContext = createContext();

export const DataProvider = props =>{

  const [studentData, setStudentData] = useState([]);


  return(
    <DataContext.Provider value={[studentData, setStudentData]} >

       {props.children}

    </DataContext.Provider>
  );
}