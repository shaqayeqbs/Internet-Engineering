import Layout from "./component/Layout/Layout";
import { Route, Switch, Redirect } from "react-router-dom";
import AllJewelery from "./Pages/AllJewelery";
import NotFound from "./Pages/NotFound";
import JeweleryDetail from "./Pages/JeweleryDetail";
import CallWithUs from "./Pages/CallWithUs";
import NewJewelery from "./Pages/NewJewelery";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import Profile from "./component/Profile/Profile";
import UpdateJewelry from "./component/Shop/UpdateJewelry";
function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/jewelerys" />
        </Route>
        <Route path="/jewelerys" exact>
          <AllJewelery />
        </Route>
        <Route path="/jewelerys/updatejewelry" exact>
          <UpdateJewelry />
        </Route>
        <Route path="/jewelerys/:jeweleryId">
          <JeweleryDetail />
        </Route>
        <Route path="/new-jewelery">
          <NewJewelery />
        </Route>
        <Route path="/Call-With-Us">
          <CallWithUs />
        </Route>
        <Route path="/Login">
          <Login />
        </Route>
        <Route path="/Sign-Up">
          <SignUp />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
