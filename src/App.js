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
import FilteredPage from "./Pages/FilteredPage";
import { useState, useCallback, useEffect } from "react";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [jewelerysData, setJewelerys] = useState([]);
  const getALLjewelerys = useCallback(async () => {
    const res = await fetch(
      "https://jewelery-6fabd-default-rtdb.firebaseio.com/jewelry.json"
    );

    const data = await res.json();
    const testjewelerys = [];

    for (const key in data) {
      console.log(key);
      testjewelerys.push({
        id: key,
        key: key,
        price: data[key].price,
        title: data[key].title,
        image: data[key].image,
        color: data[key].color,
        gender: data[key].gender,
        type: data[key].type,
      });
    }

    setJewelerys(testjewelerys);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    getALLjewelerys();
  }, []);
  return (
    <CartProvider>
      <Layout>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/jewelerys" />
          </Route>
          <Route path="/jewelerys" exact>
            <AllJewelery jewelerysData={jewelerysData} isLoading={isLoading} />
          </Route>
          <Route path="/jewelerys/updatejewelry" exact>
            <UpdateJewelry />
          </Route>
          <Route path="/jewelerys/:jeweleryId">
            <JeweleryDetail
              jewelerysData={jewelerysData}
              isLoading={isLoading}
            />
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

          <Route path="/:type">
            <FilteredPage jewelerysData={jewelerysData} isLoading={isLoading} />
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
