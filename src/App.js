import "./App.css";
import Header from "./components/Header";
import IndexNav from "./components/IndexNav";
import PageDisplay from "./components/PageDisplay";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <IndexNav />
      <PageDisplay />
      <Footer />
    </div>
  );
}

export default App;
