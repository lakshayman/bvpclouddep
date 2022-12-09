import Navbar from './components/Navbar';
import Main from './components/Main';
import Introduction from './components/Introduction';
import './App.css';
import Faculty from './components/Faculty';
import Training from './components/Training';
import Student from './components/Student';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
      <Introduction />
      <Faculty />
      <Training />
      <Student />
    </div>
  );
}

export default App;
