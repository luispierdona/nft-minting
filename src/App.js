import './App.css';
import Header from './components/topbar';
import Body from './components/body';

function App() {

  return (
    <div className="App" style={{ height: '900px' }}>
      <Header />
      <Body />
    </div>
  );
}

export default App;
