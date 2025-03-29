import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect  } from 'react-router-dom';

import Navbar from './Components/NavBar/Navbar';
import Home from './Components/Home/Home';
import './App.css';
import Recipes from './Components/Recipes/Recipes';
import Shop from './Components/Shop/Shop';
import Login from './Components/LoginSignup/Login';
import Signup from './Components/LoginSignup/Signup';
import Featured from './Components/Featured/Featured';
import Pasta from './Components/Recipes/Post/Pasta';
import Pizza from './Components/Recipes/Post/Pizza';
import Cake from './Components/Recipes/Post/Cake';
import { useAuthContext } from './hooks/useAuthContext';
import ReactGA from 'react-ga4'

ReactGA.initialize(process.env.REACT_APP_GA_ID)

function App() {
  const [active, setActive] = useState('');
  const { user } = useAuthContext()

  useEffect(() => {
    let CurrentURL = window.location.href;
    //console.log(CurrentURL);
    if (CurrentURL.endsWith('/'))
      setActive('home')
    else if (CurrentURL.endsWith('/shop'))
      setActive('shop')
    else if (CurrentURL.endsWith('/recipes'))
      setActive('recipes')
    else if (CurrentURL.endsWith('/featured'))
      setActive('featured')
    else if (CurrentURL.endsWith('/hotline'))
      setActive('hotline')
    else if (CurrentURL.endsWith('/login'))
      setActive('login')
    else if (CurrentURL.endsWith('/signup'))
      setActive('signup')
    else {
      <Router > <Redirect to="/error" /> </Router >
      setActive('404: Page not Found...')
    }
  }, [active])



  return (
    <div className="App">

      <Router>
        <Navbar active={active} setActive={setActive} />
        <Switch>
          <Route path='/' exact>
            <Home setActive={setActive} />
          </Route>
          <Route path='/recipes' exact component={Recipes} />
          <Route path='/recipes/pasta' exact >
            {user ? <Pasta />: <Redirect to={{ pathname: '/login', state: { redirectTo: '/recipes/pasta' }}} /> }
          </Route>
          <Route path='/recipes/pizza' exact >
            {user ? <Pizza />: <Redirect to={{ pathname: '/login', state: { redirectTo: '/recipes/pizza' }}} /> }
          </Route>
          <Route path='/recipes/cupcake' exact >
            {user ? <Cake />: <Redirect to={{ pathname: '/login', state: { redirectTo: '/recipes/cupcake' }}} /> }
          </Route>
          <Route path='/shop' component={Shop} />
          <Route path='/featured' exact component={Featured} />
          <Route path='/hotline' exact>
            {user ? <Pasta />: <Redirect to={{ pathname: '/login', state: { redirectTo: '/hotline' }}} /> }
          </Route>
          <Route path='/login' exact>
            <Login setActive={setActive} />  
          </Route>
          <Route path='/signup' exact>
            {!user ? <Signup setActive={setActive} /> : <Redirect to="/" /> }
          </Route>

          <Route path='/error'>
            <h1>404🤦‍♂️🤷‍♀️</h1>
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
