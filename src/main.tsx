import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Provider } from "react-redux/es/exports";
import { store2 } from "./redux/reducer.ts";
import { RecoilRoot } from "recoil";
// import { PersistGate } from "redux-persist/lib/integration/react";
// import { store, persistor } from "./redux/persist.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <RecoilRoot>
        <Provider store={store2}>
            {/* <PersistGate loading={null} persistor={persistor}> */}
            <App />
            {/* </PersistGate> */}
        </Provider>
    </RecoilRoot>
);
