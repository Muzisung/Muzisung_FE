import Styles from "./App.module.scss";
import Navigation from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";

function App() {
  return (
    <div className={Styles.App}>
      <Navigation />
      <div className="container"></div>
      <Footer />
    </div>
  );
}

export default App;
