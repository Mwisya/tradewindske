import './App.css';
import {About, Display, Footer, Header, Partnership, RateCard, WhyChooseUs, } from './components/Index';



function App() {
  return (
    <div className="App">
      <Header/>
      <Display/>
      <About/>
      <RateCard/>
      <WhyChooseUs/>
      <Partnership/>
      <Footer/>
      {/* <Navigation/> */}
    </div>
  );
}

export default App;
