import React from "react";
import {Navbar, Form, FormControl, Button} from "react-bootstrap";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import DropdownButton from "../dropdown/DropdownButton";
import DefaultButton from "../buttons/DefaultButton";

const NavBar = () => {
    return <div>
        <Router>
            <Navbar className="d-flex">
                <Form className="d-flex flex-grow-1">
                    <FormControl className="d-flex flex-grow-1" type="text" placeholder="Search" variant="m-1"/>
                </Form>
                <DefaultButton buttonText="Paieška"/>
                <DropdownButton/>
            </Navbar>
            <Switch>
            </Switch>
        </Router>
    </div>
};
export default NavBar;