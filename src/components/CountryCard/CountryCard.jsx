import React from 'react';
import { useTheme } from '../../context/themeContext';
import { Card } from './styles';

const CountryCard = ({ name, flag, population, region, capital }) => {
  const { currentTheme } = useTheme();

  return (
    <Card theme={currentTheme} to={`/details/${name}`}>
      <div className='card__imgContainer'>
        <img src={flag} alt={`flag of ${name}`} />
      </div>
      <div className='card__body'>
        <h2>{name}</h2>
        <p>
          <span>Population:</span> {population.toLocaleString()}
        </p>
        <p>
          <span>Region:</span> {region}
        </p>
        <p>
          <span>Capital:</span> {capital}
        </p>
      </div>
    </Card>
  );
};

export default CountryCard;
