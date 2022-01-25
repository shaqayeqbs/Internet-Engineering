import Layout from "./component/Layout/Layout";
import { Route, Switch, Redirect } from "react-router-dom";
import AllJewelery from "./Pages/AllJewelery";
import NotFound from "./Pages/NotFound";
import JeweleryDetail from "./Pages/JeweleryDetail";
import NewJewelery from "./Pages/NewJewelery";
import Profile from "./component/Profile/Profile";
import UpdateJewelry from "./component/Shop/UpdateJewelry";
import CartProvider from "./store/CartProvider";
import AuthPage from "./Pages/AuthPage";
function App() {
  return (
    <CartProvider>
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
          <Route path="/auth">
            <AuthPage />
          </Route>

          <Route path="/profile">
            <Profile />
          </Route>

          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Layout>
    </CartProvider>
  );
}

export default App;
