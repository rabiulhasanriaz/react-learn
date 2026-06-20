import { CORE_CONCEPTS } from './data.js';
import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';
import TabButton from './components/TabButton.jsx';


function Main(){
  return (
    <main>
      <section id="core-concepts">
        <h2>Time to get started!</h2>
        <ul>
          <CoreConcept {...CORE_CONCEPTS[0]}/>
          <CoreConcept {...CORE_CONCEPTS[1]}/>
          <CoreConcept {...CORE_CONCEPTS[2]}/>
          <CoreConcept {...CORE_CONCEPTS[3]}/>
        </ul>
      </section>
      <section id="examples">
        <h2>Examples</h2>
        <menu>
          <TabButton>Components</TabButton>
        </menu>
      </section>
    </main>
  );
}


function App() {
  return (
    <div>
      <Header />
      <Main />
    </div>
  );
}

export default App;
