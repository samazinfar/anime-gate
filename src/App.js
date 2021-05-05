import "./App.css";
import Navbar from "./components/Navbar";
import Horloge2 from "./components/Horloge2";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Horloge2 />
      <Footer/>
    </div>
  );
}
