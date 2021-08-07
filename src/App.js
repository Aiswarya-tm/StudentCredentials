import "./App.css";
import styled from "styled-components";
import { AccountBox } from "./components/accountBox";
import Dashboard from "./components/Dashboard";
import StudentList from "./components/StudentList";
import {
  useHistory,
  Switch,
  Route,
  useLocation,
  Redirect,
  useRouteMatch,
} from "react-router-dom";
import React from "react";
import StudentDashboard from "./components/StudentDashboard";
import Company from "./components/Company";

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

function App() {
  return (
    <React.Fragment>
      <Switch>

      <Route exact path="/" component={AccountBox} />
      <Route exact path="/studentList/:subject"  component={StudentList} />
      <Route  path="/admin-dashboard"  component={Dashboard} />
      <Route exact path="/student-dashboard" component={StudentDashboard} />
      <Route exact path="/verify-student-certificate" component={Company} />
      
        {/* <AppContainer>
          <AccountBox />
        </AppContainer> */}
        
      </Switch>
    </React.Fragment>
  );
}

export default App;
