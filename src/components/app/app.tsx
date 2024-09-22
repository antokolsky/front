import { FC } from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "@/router/router";
import { ErrorList } from "../errorList/errorList";

const App: FC = () => {
	return (
		<>
			<RouterProvider router={router} />
			<ErrorList />
		</>
	);
};

export default App;
