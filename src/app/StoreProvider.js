// import { Children, useRef } from "react";
import { Provider } from "react-redux";
import { store } from "../store";

export default function SporeProvider({}) {
  //   const storeref = useRef();
  //   if (!storeref.current) storeref.current = store();

  return <Provider store={store}>{children}</Provider>;
  // return <Provider store={storeref.current}>{children}</Provider>;
}
