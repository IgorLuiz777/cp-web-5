import './index.css'
import './App.css'
import Menu from './components/menu/Menu'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <div className="container">
      <header>
        <Menu></Menu>
      </header>
      <Outlet/>
      <footer>
      </footer>
    </div>
  );
}

export default App;
