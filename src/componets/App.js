import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import AboutPage from "./AboutPage";
import Header from "./common/Header";
import CoursesPage from "./CoursesPage";
import HomePage from "./HomePage";
import ManageCoursePage from "./ManageCoursePage";
import NotFoundPage from "./NotFoundPage";

function App() {
    return (
        <div className="container-fluid">
            <Header />
            <Switch>
                <Route path="/" exact component={HomePage}></Route>
                <Route path="/courses" component={CoursesPage}></Route>
                <Route path="/about" component={AboutPage}></Route>
                <Route path="/course/:slug" component={ManageCoursePage}></Route>
                <Redirect from="/about-page" to="about"></Redirect>
                <Route component={NotFoundPage}></Route>
            </Switch>
        </div>
    );
}

export default App;
