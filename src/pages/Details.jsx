import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BackButton from '../components/BackButton/BackButton';
import BorderCountryButton from '../components/BorderCountryButton/BorderCountryButton';
import {
  Container,
  Article,
  InfoContainer,
  Content,
  Links,
} from './detailsStyles';
const Details = () => {
  // const { name } = useParams();
  const name = 'belgium';
  const [data, setData] = useState({});
  const [bordersName, setBordersName] = useState([]);

  //NAME DEBE ESTAR CAPITALIZE

  const baseUrl = `https://restcountries.eu/rest/v2/name/${name}`;

  useEffect(() => {
    fetch(baseUrl)
      .then((res) => res.json())
      .then((country) => setData(country[0]))
      .catch((err) => {
        console.error(err);
        //FALTA EVITAR QUE SE RENDERICE SE INTENTE LLEGAR A UN CATCH OSEA... UN 404
      });
  }, []);

  //LA API TRAE CONSIGO BORDERS PERO SOLO SON LOS alpha3Code NO REALMENTE EL NOMBRE QUE FASTIDIO

  useEffect(() => {
    Object.keys(data).length > 0 &&
      data.borders.map((border) => {
        fetch(`https://restcountries.eu/rest/v2/alpha/${border}`)
          .then((res) => res.json())
          .then((innerData) => setBordersName((p) => [...p, innerData.name]));
      });
  }, [data]);

  if (Object.keys(data).length < 1 && bordersName.length < 1)
    return <h3>Loading....</h3>;
  return (
    <Container>
      <BackButton />
      <Article>
        <img src={data.flag} alt={`flag of ${data.name}`} />
        <InfoContainer className='info'>
          <h3>{data.name}</h3>
          <Content className='content'>
            <ul>
              <li>
                <p>
                  <span>Native Name: </span>
                  {data.nativeName}
                </p>
              </li>
              <li>
                <p>
                  <span>Population: </span>
                  {data.population.toLocaleString()}
                </p>
              </li>
              <li>
                <p>
                  <span>Region: </span>
                  {data.region}
                </p>
              </li>
              <li>
                <p>
                  <span>Sub Region: </span>
                  {data.subregion}
                </p>
              </li>
              <li>
                <p>
                  <span>Capital: </span>
                  {data.capital}
                </p>
              </li>
            </ul>
            <ul>
              <li>
                <p>
                  <span>Top Level Domain: </span>
                  {data.topLevelDomain}
                </p>
              </li>
              <li>
                <p>
                  <span>Currencies: </span>
                  {data.currencies.map((currency) => currency.name).join(', ')}
                </p>
              </li>
              <li>
                <p>
                  <span>Languages: </span>
                  {data.languages.map((language) => language.name).join(', ')}
                </p>
              </li>
            </ul>
          </Content>
          <Links className='links'>
            <p>Border Countries: </p>
            <div>
              {bordersName.map((border, i) => (
                <BorderCountryButton text={border} key={i} />
              ))}
            </div>
          </Links>
        </InfoContainer>
      </Article>
    </Container>
  );
};

export default Details;
