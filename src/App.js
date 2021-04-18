import Styles from "./App.module.scss";
import Navigation from "./components/Layout/Header";
import Notice from "./components/Notice/Notice";
import Footer from "./components/Layout/Footer";

function App() {
  return (
    <div className={Styles.App}>
      <Navigation />
      <div className={Styles.Container}>
        <Notice />
      </div>
      <Footer />
    </div>
  );
}

export default App;
