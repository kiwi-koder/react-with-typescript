import * as React from "react";
import * as ReactDOM from "react-dom";
// import App from "./App";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";
// import { Hello } from "./Hello";
import StatefulHello from "./components/StatefulHello";

ReactDOM.render(<StatefulHello name="Josh" />, document.getElementById(
    "root"
) as HTMLElement);
registerServiceWorker();
