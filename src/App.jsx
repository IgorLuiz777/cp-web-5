import './index.css'
import './App.css'
import Menu from './components/menu/Menu'
import { Outlet } from 'react-router-dom'
import Footer from './components/footer/Footer'

function App() {
  return (
    <div className="container">
      <header>
        <Menu></Menu>
      </header>
      <Outlet/>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
}

export default App;
