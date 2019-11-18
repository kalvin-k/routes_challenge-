import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './App.css';
import About from './pages/About';
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import Home from './pages/Home'
import Contact from './pages/Contact'

function App() {
  return (
    <div className="App">
        <Router>
            <Route path = '/about' component = {About} />
            <Route path = '/skills' component = {Skills} />
            <Route path = '/projects' component = {Projects} />
            <Route path = '/contact' component = {Contact} />
            <Route path = '/' exact component = {Home} />

            <Link to = '/skills' >Skills </Link>
            <br />
            <Link to = '/projects' >Projects </Link>
            <br />
            <Link to = '/contact' >Contact </Link>
        </Router>
    </div>
  );
}

export default App;
