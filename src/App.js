import React from 'react';
import Header from './components/Header';
import SolarSystem from './components/SolarSystem';
import Missions from './components/Missions';
import './App.css';
import Footer from './components/Footer';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <section className="planet-section">
          <SolarSystem />
        </section>
        <Missions />
        <Footer />
      </div>
    );
  }
}

export default App;
