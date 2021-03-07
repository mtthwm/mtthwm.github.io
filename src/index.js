import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './pages/about';
import Skills from './pages/skills';
import Projects from './pages/projects';
import Experience from './pages/experience';
import Education from './pages/education';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path='/' exact>
          <About/>
        </Route>
        <Route path='/skills' exact>
          <Skills/>
        </Route>
        <Route path='/projects' exact>
          <Projects/>
        </Route>
        <Route path='/experience' exact>
          <Experience/>
        </Route>
        <Route path='/education' exact>
          <Education/>
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);