import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/app/app";
import { store } from "./store";
import { Provider } from "react-redux";
import { ThemeProvider } from "@gravity-ui/uikit";
import "./styles/index.scss";
import "@gravity-ui/uikit/styles/styles.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<Provider store={store}>
		<React.StrictMode>
			<ThemeProvider theme="light">
				<App />
			</ThemeProvider>
		</React.StrictMode>
	</Provider>
);
