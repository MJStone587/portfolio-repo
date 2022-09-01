import "./style.css";
import Navbtn from "./component/Navbtn";

function App() {
  return (
    <nav className="navbar">
      <Navbtn text="Home" btnName="navbarBtn" />
      <Navbtn text="Skills" btnName="navbarBtn" />
      <Navbtn text="Projects" btnName="navbarBtn" />
      <Navbtn text="Socials" btnName="navbarBtn" />
    </nav>
  );
}

export default App;
