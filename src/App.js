import Styles from "./App.module.scss";
import Navigation from "./components/Layout/Header";

function App() {
  return (
    <div className={Styles.App}>
      <Navigation />
      <div className="container"></div>
    </div>
  );
}

export default App;
