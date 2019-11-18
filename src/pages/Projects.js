import React from 'react';
import { Link, BrowserRouter as Router, Route } from 'react-router-dom'
import Project1 from '../projects/project_1'
import Project2 from '../projects/project_2'

class Projects extends React.Component {
    render() {

        return(
            <Router >
                <div>
                    <h1> Projects </h1>
                        <Route path = '/project1' component = {Project1} />
                        <Route path = '/project2' component = {Project2} />
                        <Link to = '/project1'>Project #1</Link>
                        <Link to = '/project2'>Project #2</Link>
                </div>
            </Router>
        )
    }
}

export default Projects
