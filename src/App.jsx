import Header from './components/Header/Header.jsx';
import CoreConcepts from './components/CoreConcepts.jsx';
import Examples from './components/Examples.jsx';
import { Fragment } from 'react';

function Main(){
 
  return (
    <main>
      <CoreConcepts />
      <Examples />
    </main>
  );
}


 function App() {
  return (
    <Fragment>
      <Header />
      <Main />
    </Fragment>
  );
}

export default App;
