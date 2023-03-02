import Router from "./router/Router";
import { BrowserRouter } from "react-router-dom";
import StoreProvider from "./context/useStore";

function App() {
	return (
		<StoreProvider>
			<BrowserRouter>
				<Router />
			</BrowserRouter>
		</StoreProvider>
	);
}

export default App;
