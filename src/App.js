import logo from './logo.svg';
import './App.css';
import Info from './Components/info';
import Navegation from './Components/Nav';
import Main from './Components/main';
import Profile from './Components/profile'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">

          <Info/>
          <Navegation/>
          <Main/>
          <Profile/>
    </div>
  );
}

export default App;
