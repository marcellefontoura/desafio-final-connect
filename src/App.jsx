// Importando os componentes que estarão presentes em todas as páginas,
// como o cabeçalho (NavBar) e o rodapé (Footer)

import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

// Importando o arquivo de estilos globais,
// responsável por definir o padrão visual da aplicação inteira

import "./global.scss"

function App() {
  return (
    <>
      {/* Renderizando o cabeçalho */}

      <NavBar />

      {/* Renderizando o rodapé */}

      <Footer />
    </>
  );
}

export default App;
