import React, {useState} from 'react';
import Navbar from './components/navbar/Navbar';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Section from "./components/section/Section";
import {LANGUAGES, LINKS} from "./res/Constants";
import loadable from "@loadable/component";

const Background = loadable(() => import('./components/images/Background'));

const App = () => {
  const [language, setLanguage] = useState(LANGUAGES.LT);

  return (
    <Router>
      <Navbar setLanguage={setLanguage}
              language={language}/>
      <Background/>
      <div style={{display: 'flex', minHeight: '100vh'}}>
        <Switch>
          {language.LINKLABELS.map((sectionName, index) => (
            <Route exact path={LINKS[index]}
                   key={index}>
              <Section label={sectionName}
                       index={index}
                       language={language}/>
            </Route>
          ),)}
          <Route path='/*'>
            <Section label={language.LINKLABELS[0]}
                     index={0}
                     language={language}/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
