// Importamos React (necesario para trabajar con componentes)
import React from "react";

// Importamos todos los componentes creados en la carpeta components
import "./App.css";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Section from "./components/Section";
import Aside from "./components/Aside";
import Footer from "./components/Footer";

// Definimos el componente principal de la aplicación
function App() {
  // El return es lo que se va a renderizar en la pantalla
  // Llamamos a cada componenete ("<Navbar />")
  return (
    <div>
      <Navbar />
      <Main />
      <Section />
      <Aside />
      <Footer />
    </div>
  );
}

// Exportamos el componente App para poder usarlo en otros archivos
export default App;