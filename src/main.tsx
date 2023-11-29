import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Provider } from "react-redux/es/exports";
import { PersistGate } from "redux-persist/lib/integration/react";
import { store, persistor } from "./redux/persist.ts";
import { store2 } from "./redux/reducer.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <Provider store={store2}>
        {/* <PersistGate loading={null} persistor={persistor}> */}
            <App />
        {/* </PersistGate> */}
    </Provider>
);
