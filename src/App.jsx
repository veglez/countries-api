import React from 'react';
import styled from 'styled-components';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import { useTheme } from './context/themeContext';
import Homepage from './pages/Homepage';
import Details from './pages/Details';
import { useData } from './context/dataContext';

const Container = styled.div`
  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.background};
  min-height: 100vh;
`;

const App = () => {
  const { currentTheme } = useTheme();
  const { setAllCountries } = useData();

  React.useEffect(() => {
    fetch('https://restcountries.eu/rest/v2')
      .then((res) => res.json())
      .then((data) => setAllCountries(data));
  }, []);

  return (
    <Container theme={currentTheme}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route
            exact
            path='/details/:name'
            render={(props) => (
              <Details {...props} key={props.match.params.name} />
            )}
          />
          <Route>
            <h1>404 Not Found</h1>
          </Route>
        </Switch>
      </BrowserRouter>
    </Container>
  );
};

export default App;
