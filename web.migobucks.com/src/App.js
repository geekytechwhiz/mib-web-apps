import { ThemeProvider } from "@mui/material/styles";
import React from "react";
import { Route, Switch } from "react-router-dom";
import About from "./components/about";
import Contact from "./components/contact";
// import Home from "./components/home-v2";
// import MigoApp from "./components/home-v3";
import MigoApp from "./pages/migo-app/migo-app";
// import Brands from "./components/home-v4";
import Privacy from "./components/terms-components/privacy";
import Terms from "./components/terms-components/terms";
import Brand from "./pages/brand";
import Buddy from "./pages/buddy";
import ExecutiveProgram from "./pages/career/executive-program";
import TechnicalTraining from "./pages/career/technical-training";
import TrainingDetails from "./pages/career/trainingDetails";
import Home from "./pages/landing";

import theme from "./assets/theme";
import OJT from "./pages/career/ojt";
import Trainer from "./pages/career/trainer";
import Professionals from "./pages/career/professionals";
import ComingSoon from "./pages/common/coming-soon";

function App() {
  return (
    <ThemeProvider theme={theme}>
    <div className="App"> 
      <Switch>/technical-training
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} /> 
        <Route exact path="/ojt" component={OJT} />
        <Route exact path="/coming-soon" component={ComingSoon} />
        <Route exact path="/executive-program" component={ExecutiveProgram} />
        <Route exact path="/technical-training" component={TechnicalTraining } />
        <Route exact path="/professionals" component={Professionals } /> 
        <Route exact path="/ojt/:category/details/:id" component={TrainingDetails} />
        <Route exact path="/trainer/register" component={Trainer} />
        <Route exact path="/brands" component={Brand} />
        <Route exact path="/buddy" component={Buddy} />
        <Route exact path="/app" component={MigoApp} />
        <Route exact path="/terms" component={Terms} />
        <Route exact path="/privacy" component={Privacy} />
      </Switch>
    </div>
    </ThemeProvider>
  );
}

export default App;
