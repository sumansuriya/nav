import React from 'react';
import { Nav, Navbar } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { updateRenderAction } from "../redux/EmployeeReducer";
import logo from "../logo15.png";
import { signOutAction } from "../redux/UserReducer";
function EmployeeAboutUs(){
  const signOut = () => {
    // Logical Operation.
    // cookies / sessino are getting removed from the browser
    dispatch(signOutAction());

    // redirect the user to login page.
    history.push("/");
  };
    const dispatch = useDispatch();
const history = useHistory();
const clearEmployeeRequestURef = () => {
    dispatch(updateRenderAction({}));
    history.push("/employee-request-add");
  };
  const clearEmployeeLeaveRequestURef = () => {
    dispatch(updateRenderAction({}));
    history.push("/employee-leave-request-add");
  };
    return(
        <div>
        <div>
        <Navbar bg="dark" variant="dark" expand="">
        <img align="left" src={logo} height="5%" width="5%" />
      <Navbar.Brand href="#home"></Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />

      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
        <Nav.Link  onClick={clearEmployeeRequestURef} >
            Employee Request Add
          </Nav.Link>
          <Nav.Link  onClick={clearEmployeeLeaveRequestURef} >
            Employee Leave Request Add
          </Nav.Link>
          <Nav.Link as={Link} to="/employee-status-checklist">
            Employee Status Check List
          </Nav.Link>
          <Nav.Link as={Link} to="/employee-status-checkform">
            Employee Status Check Form
          </Nav.Link>
          <Nav.Link onClick={signOut}>Sign Out</Nav.Link>
  
  </Nav>
        
        </Navbar.Collapse>
       
      </Navbar>
      </div>
      <div className= "text-light">
      <center><h1>Welcome to Task Management System
      </h1></center>
      </div>
      </div>
      );
 
      


    
};

export {EmployeeAboutUs}