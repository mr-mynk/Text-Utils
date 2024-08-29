import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import Alert from "./components/Alert";
import { BrowserRouter,Routes,Route } from "react-router-dom";


function App() {
  const [theme, setTheme] = useState("light");
  const [btnText, setBtnText] = useState("Dark Mode");
  const [myStyle, setMyStyle] = useState({
    color: "black",
    backgroundColor: "white",
  });
  const [alert, setAlert] = useState(null);
  const showAlert = (type, msg) => {
    setAlert({
      type:type,
      msg:msg
    });
    setTimeout(() => {
      setAlert(null);
    },1500)
  };
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      setBtnText("Light Mode");
      document.body.style.backgroundColor = "#2a2f34";
      setMyStyle({
        color: "white",
        backgroundColor: "#2a2f34",
      });
      document.title ='TextUtils Dark-mode';
      showAlert('success','Dark Mode Activated.!');
    } else { 
      setTheme("light");
      setBtnText("Dark Mode");
      document.body.style.backgroundColor = "white";
      setMyStyle({
        color: "black",
        backgroundColor: "white",
      });
      showAlert('success','Light Mode Activated.!');
      document.title='TextUtils Light-mode'
    }
  };
  return (
    <>
      {/* <Navbar  option1='Home' option2='Contact' option3={69}/> */}
      {/* <Navbar
        theme={theme}
        title="TextUtils"
        option1="Home"
        option2="About"
        option3="Contact"
        toggleTheme={toggleTheme}
        btnText={btnText}
      /> */}
      {/* <Alert alert= {alert} /> */}
      {/* <Textform heading="Enter the text to analyze below" myStyle={myStyle} showAlert={showAlert} /> */}
      {/* <About myStyle={myStyle} /> */}

      <BrowserRouter>
      <Navbar theme={theme} title="TextUtils" option1="Home" option2="About" option3="Contact" toggleTheme={toggleTheme} btnText={btnText} />
      <Alert alert= {alert} />
        <Routes>
          <Route path="/" element={<Textform heading="Enter the text to modify below" myStyle={myStyle} showAlert={showAlert} />} />
          <Route path="/home" element={<Textform heading="Enter the text to analyze below" myStyle={myStyle} showAlert={showAlert} />} />
          <Route path="/about" element={<About myStyle={myStyle} />} />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;