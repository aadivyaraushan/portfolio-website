import Topbar from "./components/topbar/TopBar"
import Intro from "./components/intro/Intro"
import Portfolio from "./components/portfolio/Portfolio"
import Contact from "./components/contact/Contact"
import Menu from "./components/menu/Menu"
import About from "./components/about/About"
import Toggle from "./components/toggle/Toggle"
import Tools from "./components/tools/Tools"
import "./App.scss"
import {useState, useContext} from "react";
import { ThemeContext } from "./context"


function App() {

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const [menuOpen, setMenuOpen] = useState(false);


  return (
    <div className="app" style={{
      backgroundColor: darkMode ? "#222" : "white", 
      color: darkMode && "white"
      }}>
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Toggle />
      <div className="sections">
        <Intro />
        <About />
        <Portfolio />
        <Tools />
        <Contact />
      </div>
    </div>
  );
}

export default App;
