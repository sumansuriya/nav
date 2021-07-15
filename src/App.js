import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Link,
  useHistory,
} from "react-router-dom";
import { AdminList } from "./pages/AdminList";
import { AdminSignin } from "./pages/AdminSignin";
import { AdminSignUp } from "./pages/AdminSignUp";
import { EmployeeAdd } from "./pages/EmployeeAdd";
import { EmployeeList } from "./pages/EmployeeList";
import { AppNav } from "./pages/AppNav";
import { useSelector } from "react-redux";
import { EmployeeSignin } from "./pages/EmployeeSignin";
import { EmployeeTaskList } from "./pages/EmployeeTaskList";
import { EmployeeTaskAdd } from "./pages/EmployeeTaskAdd";
import{EmployeeTimeExtensionRequestAdd} from "./pages/EmployeeTimeExtensionRequestAdd";
import{ AdminTaskExtensionRequestList} from "./pages/AdminTaskExtensionRequestList";
import { EmployeeLeaveRequestAdd } from "./pages/EmployeeLeaveRequestAdd";
import{AdminLeaveApprovalList} from "./pages/AdminLeaveApprovalList";
import{EmployeeStatusCheckList} from "./pages/EmployeeStatusCheckList";
import{EmployeeTimeExtensionStatusCheck} from "./pages/EmployeeTimeExtensionStatusCheck";
import{AboutUs} from "./pages/AboutUs";
import { EmployeeAboutUs } from "./pages/EmployeeAboutUs";
import { EmployeeBenchList } from "./pages/EmployeeBenchList";
import { EmployeeReportList } from "./pages/EmployeeReportList";

function App() {
  const history = useHistory();
  const state = useSelector((state) => state);

  // Will chekck from the storage
  // if (!state.authSuccess) {
  //   history.push("/user-signin");
  // }
  const authSuccessFromStorage = localStorage.getItem("authSuccess");
  //  if (authSuccessFromStorage !== "1") {
  //    history.push("/admin-signin");
  //  }

  return (
    <>
      {authSuccessFromStorage === "1" }

      <Route exact path="/" component={AdminSignin} />

      {/** Demo IN the Class */}
      <Route exact path="/admin-list" component={AdminList} />
      <Route exact path="/admin-signin" component={AdminSignin} />
      <Route exact path="/admin-signup" component={AdminSignUp} />
      <Route exact path="/employee-add" component={EmployeeAdd} />
      <Route exact path="/employee-list" component={EmployeeList} />
      <Route exact path="/employee-signin" component={EmployeeSignin} />
      <Route exact path="/employee-task-list" component={EmployeeTaskList} />
      <Route exact path="/employee-task-add" component={EmployeeTaskAdd} />
      <Route exact path="/employee-request-list" component={AdminTaskExtensionRequestList} />
      <Route exact path="/employee-request-add" component={EmployeeTimeExtensionRequestAdd} />
      <Route exact path="/employee-leave-request-add" component={EmployeeLeaveRequestAdd} />
      <Route exact path="/admin-leave-request-list" component={AdminLeaveApprovalList} />
      <Route exact path="/employee-status-checklist" component={EmployeeStatusCheckList} />
      <Route exact path="/employee-status-checkform" component={EmployeeTimeExtensionStatusCheck} />
      <Route exact path="/employee-bench-list" component={EmployeeBenchList} />
      <Route exact path="/employee-report-list" component={EmployeeReportList} />

      <Route exact path="/about-us" component={AboutUs} />
      <Route exact path="/employee-about-us" component={EmployeeAboutUs} />


    </>
  );
}

export default App;
