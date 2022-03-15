import {React} from 'react';
import './App.css';
import {DataProvider} from "./DataContext";
import StudentList from "./Components/StudentList"
import MainContent from './Components/MainContent';



function App() {

  return (
    <DataProvider>
    <div className='app'>
      <MainContent />
      {/* <StudentList /> */}


    </div>

    </DataProvider>
  );
}

export default App;
