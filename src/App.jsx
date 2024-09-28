import './App.css'
import Footer from './commons/Footer';
import Inicio from './pages/Inicio';
import Menu from './commons/Menu'
import "bootstrap/dist/css/bootstrap.min.css";


function App() {

  return (
    <>
    <Menu></Menu>
      <main className="sectionMain">
        <Inicio></Inicio>
      </main>
      <Footer></Footer>
    </>
  );
}

export default App
