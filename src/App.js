import React from "react";
import NavBar from "./Components/NavbarFolder/NavBar"
import {originals,action,comedy,horror,romance,drama} from './urls'
import "./App.css"
import Banner from "./Components/Banner/Banner";
import RowPost from "./Components/RowPost/RowPost";


function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <RowPost url={originals}  title='Netflix Orginals' />
      <RowPost url={action} title='Action Movies' isSmall />
      <RowPost url={comedy} title='Comedy Movies' isSmall />
      <RowPost url={horror} title='Horror Movies' isSmall />
      <RowPost url={romance} title='Romance' isSmall />
      <RowPost url={drama} title='drama' isSmall />

    </div>
  );
}

export default App;
