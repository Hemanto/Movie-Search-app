import './App.css';
import Home from './components/Home';
import Search from './components/Search';



function App() {
  return (
      <div>
        <Search/>
        <h2 style={{textAlign:'center'}}>IN THEATERS</h2>
        <Home/>
      </div>
  );
}

export default App;
