import React from 'react';
import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system">
        <div className="title">
          <Title headline="Planetas" />
        </div>
        <div className="planets">
          {planets.map((planet, index) => (
            <PlanetCard
              key={ index }
              planetName={ planet.name }
              planetImage={ planet.image }
            />
          ))}
        </div>
      </div>
    );
  }
}

export default SolarSystem;
