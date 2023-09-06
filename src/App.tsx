import './App.css';
import { Counter } from './components/Counter';
import { SetCounter } from './components/SetCounter';

function App() {
  return (
    <div className="App">
      <div className="container">
        <SetCounter />
        <Counter />
      </div>
    </div>
  );
}

export default App;
