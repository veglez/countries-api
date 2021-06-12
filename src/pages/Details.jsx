import React  from 'react';
import {  useHistory, useParams } from 'react-router-dom';
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
  const { allCountries } = useData();
  const historyHook = useHistory();

  const data = allCountries.filter(
    (country) => country.name === name
  )[0];

  const borders = data.borders
  .map(alphaCode => allCountries
    .filter( country => country.alpha3Code === alphaCode))

  const handleClick = () => {
    historyHook.goBack()
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
              {borders.map((border, i) => (
                <BorderCountryButton
                  key={i} 
                  text={border[0].name}
                  to={`/details/${border[0].name}`}
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
