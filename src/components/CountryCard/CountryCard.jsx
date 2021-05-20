import React, { useEffect, useState } from 'react';
import { useTheme } from '../../context/themeContext';
import { Card } from './styles';

const CountryCard = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const { currentTheme } = useTheme();

  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/name/Germany')
      .then((res) => res.json())
      .then((data) => {
        setData(data[0]);
        setLoading(false);
      });
  }, []);

  // console.log(typeof data.population);
  if (loading) {
    return <h1>Loading....</h1>;
  } else {
    return (
      <Card theme={currentTheme}>
        <div className='card__imgContainer'>
          <img src={data.flag} alt='country flag' />
        </div>
        <div className='card__body'>
          <h2>{data.name}</h2>
          <p>
            <span>Population:</span> {data.population.toLocaleString()}
          </p>
          <p>
            <span>Region:</span> {data.region}
          </p>
          <p>
            <span>Capital:</span> {data.capital}
          </p>
        </div>
      </Card>
    );
  }
};

export default CountryCard;
