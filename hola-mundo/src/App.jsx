// Importamos React (necesario para trabajar con componentes)
import React from "react";

// Importamos todos los componentes creados en la carpeta components
import "./App.css";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Section from "./components/Section";
import Aside from "./components/Aside";
import Footer from "./components/Footer";

// Componente principal de la aplicación
function App() {
  // El return es lo que se va a renderizar en la pantalla
  return (
    <body>
      <Navbar />
      <Main />
      <Section />
      <Aside />
      <Footer />
    </body>
  );
}

// Exportamos el componente App para poder usarlo en otros archivos
export default App;