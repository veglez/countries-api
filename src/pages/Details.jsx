import React, { useEffect, useState } from 'react';
import { Redirect, useHistory, useParams } from 'react-router-dom';
import BackButton from '../components/BackButton/BackButton';
import BorderCountryButton from '../components/BorderCountryButton/BorderCountryButton';
import { useData } from '../context/dataContext';
import {
  Container,
  Article,
  InfoContainer,
  Content,
  Links,
} from './detailsStyles';

const Details = () => {
  const { name } = useParams();
  const initialState = {
    borders: [],
    currentUrl: name,
    previousUrl: [],
  };
  const { allCountries } = useData();
  const [navigation, setNavigation] = useState(initialState);
  const data = allCountries.filter(
    (country) => country.name === navigation.currentUrl
  )[0];
  const historyHook = useHistory();

  //LA API TRAE CONSIGO BORDERS PERO SOLO SON LOS alpha3Code NO REALMENTE EL NOMBRE QUE FASTIDIO

  // FIX BUG WHEN CLICK ON BORDER ADD THE LATEST AND NEW BORDERS

  useEffect(() => {
    Object.keys(data).length > 0 &&
      data.borders.map((border) => {
        fetch(`https://restcountries.eu/rest/v2/alpha/${border}`)
          .then((res) => res.json())
          .then((innerData) =>
            setNavigation((p) => {
              return { ...p, borders: [...p.borders, innerData.name] };
            })
          );
      });
  }, [data]);

  useEffect(() => {
    navigation.currentUrl === undefined && <Redirect to='/' />;
  }, [navigation]);

  const handleClick = () => {
    if (navigation.previousUrl.length === 0) return historyHook.push('/');
    console.log(`al dark click en back es estado es: `, { ...navigation });
    setNavigation((p) => {
      let historial = p.previousUrl;
      const last = historial.pop();

      return {
        ...p,
        borders: [],
        currentUrl: last,
        previousUrl: historial,
      };
    });
  };

  if (Object.keys(data).length < 1) return <h3>Loading....</h3>;
  return (
    <Container>
      <BackButton handleClick={handleClick} />
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
              {navigation.borders.map((border, i) => (
                <BorderCountryButton
                  text={border}
                  key={i}
                  to={`/details/${border}`}
                  handleClick={() =>
                    setNavigation((p) => {
                      return {
                        ...p,
                        borders: [],
                        currentUrl: border,
                        previousUrl: [...p.previousUrl, p.currentUrl],
                      };
                    })
                  }
                />
              ))}
            </div>
          </Links>
        </InfoContainer>
      </Article>
    </Container>
  );
};

export default Details;
