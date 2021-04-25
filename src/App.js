import Styles from "./App.module.scss";
import Navigation from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import Sidebar from "./components/Layout/Sidebar";

function App() {
  return (
    <div className={Styles.App}>
      <Navigation />
      <Sidebar />
      <div className="container"></div>
      <Footer />
    </div>
  );
}

export default App;
