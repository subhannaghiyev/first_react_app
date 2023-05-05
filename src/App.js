import './App.css';
import Header from './components/Header';
import Middle from './components/Middle';
import Footer from './components/Footer';
import Middle2 from './components/Middle2';

function App() {
  return(
    <>
    <Header />
    <div className="type">
    <Middle bgColor={"red"} />
    <Middle bgColor={"yellow"} />
    <Middle bgColor={"blue"} />
    </div>
    <div className="contact">
            <h2>Contact me</h2>
            <p>
              I am available for contract work, when you're ready - let me know!
            </p>
            <div className="cards">
              <Middle2 bgcolor={"#f76400"} text={"hello@example.com"} />
              <Middle2 bgcolor={"#00ac69"} text={"555-123-4567"} />
            </div>
          </div>
    <Footer />
    </>
  )
}

export default App;