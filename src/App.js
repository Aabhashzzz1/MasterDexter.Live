import './App.css';
import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main';
import { Container } from './components/Container/Container';
import { Features } from './components/Features/Features';
import { Functions } from './components/Functions/Functions';
import { Info } from './components/Info/Info';
import { Extra } from './components/Extra/Extra';
import { Footer } from './components/Footer/Footer';
function App() {
  return (
    <div className="App">
      <Header />
      <br />
      <Main />
      <br />
      {/* <Container /> */}
      <br />
      <Features />
      <br />
      <Functions />
      <br />
      <Info />
      <br />
      <Extra />
      <br />
      <Footer />
    </div>
  );
}

export default App;
