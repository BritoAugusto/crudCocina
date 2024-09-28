import './App.css'
import Footer from './components/commons/Footer.jsx';
import Inicio from './components/pages/Inicio.jsx';
import Menu from './components/commons/Menu.jsx'
import "bootstrap/dist/css/bootstrap.min.css";
import CardReceta from './components/recetas/CardReceta.jsx';


function App() {

  return (
    <>
    <Menu></Menu>
      <main className="sectionMain">
        <Inicio></Inicio>
        <CardReceta></CardReceta>
        <CardReceta></CardReceta>
      </main>
      <Footer></Footer>
    </>
  );
}

export default App
