import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Noticias from "./pages/Noticias";
import Home from "./pages/Home";
import Pagina1 from "./pages/Pagina1";
import Pagina2 from "./pages/Pagina2";
import Pagina3 from "./pages/Pagina3";
import Pagina4 from "./pages/Pagina4";
import MyNavBar from "./Navbar/MyNavBar";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <MyNavBar />

        <Switch>
          <Route path="/" href="#one" exact component={Home} />
          <Route path="/pagina1" component={Pagina1} />
          <Route path="/pagina2" component={Pagina2} />
          <Route path="/pagina3" component={Pagina3} />
          <Route path="/noticias" component={Noticias} />
          <Route path="/pagina4" component={Pagina4} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
