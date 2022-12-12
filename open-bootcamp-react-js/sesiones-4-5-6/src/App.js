import logo from './logo.svg';
import './App.css';
import ComponentClass from './components/ComponentClass';
import ComponentFunction from './components/ComponentFunction';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ComponentClass />
        <hr />
        <ComponentFunction />
      </header>
    </div>
  );
}

export default App;
