import logo from './logo.svg';
import './App.css';
// import Header from './components/Header/Header';
import Table from './components/Table/Table';
import { useState } from 'react';

function App() {
  // const [searchData, setSearchData] = useState(null);
  // console.log(searchData);
  return (
    <div className=' '>
      {/* <Header searchData={searchData} setSearchData={setSearchData}/> */}
      {/* <Table searchData={searchData} setSearchData={setSearchData} /> */}
      <Table />
    </div>
  );
}

export default App;
