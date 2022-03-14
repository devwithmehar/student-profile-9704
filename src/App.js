import {React} from 'react';
import './App.css';
import {DataProvider} from "./DataContext";
import StudentList from "./Components/StudentList"



function App() {

  return (
    <DataProvider>
    <div >

      <StudentList />


    </div>

    </DataProvider>
  );
}

export default App;
