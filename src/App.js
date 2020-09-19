import React, {useState} from 'react';
import Navbar from './components/navbar/Navbar';
import Jumbotron from 'react-bootstrap/Jumbotron';
import bgImage from './res/img/background/desert.jpg';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Section from "./components/section/Section";
import {LANGUAGES, LINKS} from "./res/Constants";

const App = () => {
    const bgStyle = {
        margin: 'auto',
        backgroundPosition: 'top center',
        backgroundRepeat: 'no-repeat',
        backgroundImage: `url(${bgImage})`,
        minHeight: '150vh',
        padding: '0',
        backgroundSize: 'cover',
        opacity: '0.97'
    };

    const [language, setLanguage] = useState(LANGUAGES.LT);

    return (
        <Router>
            <Jumbotron style={bgStyle}>
                <Navbar setLanguage={setLanguage}
                        language={language}/>
                <Switch>
                    {language.LINKLABELS.map((sectionName, index) => (
                            <Route exact path={LINKS[index]}
                                   key={index}>
                                <Section label={sectionName}
                                         index={index}
                                         language={language}/>
                            </Route>
                        ),
                    )}
                    <Route path='/*'>
                        <Section label={language.LINKLABELS[0]}
                                 index={0}
                                 language={language}/>
                    </Route>
                </Switch>
            </Jumbotron>
        </Router>
    );
};

export default App;
