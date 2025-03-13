import React, { useContext, useEffect } from "react";

import Header from "./Components/Header/Header";
import CarouselEffect from "./Components/Carousel/CarouselEffect";
import Category from "./Components/Category/Category";
import Product from "./Components/Product/Product";
import Routing from "./Router";
import { DataContext } from "./Components/DataProvider/DataProvider";
import { Type } from "./Components/Utility/action.type";
import { auth } from "./Components/Utility/firebase";

function App() {
  const [{ user }, dispatch] = useContext(DataContext);

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // console.log(authUser);
        dispatch({
          type: Type.SET_USER,
          user: authUser,
        });
      } else {
        dispatch({
          type: Type.SET_USER,
          user: null,
        });
      }
    });
  }, []);

  return <Routing />;
}

export default App;
