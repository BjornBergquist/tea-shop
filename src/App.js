import { HomeView } from "./views/homeview/HomeView";
import { Header } from "./components/header/Header";
import { Footer } from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <HomeView />
      <Footer />
    </div>
  );
}

export default App;
