import { createContext, useContext, useReducer } from "react";

const InitialStoreState = {
	dataPerson: {},
	isLoading: false,
};

const StoreActions = {
	SET_DATAPERSON: "SET_DATAPERSON",
	SET_ISLOADING: "SET_ISLOADING",
};

const StoreReducer = (state, action) => {
	switch (action.type) {
		case StoreActions.SET_DATAPERSON:
			return { ...state, dataPerson: action.payload.dataPerson };
		case StoreActions.SET_ISLOADING:
			return { ...state, isLoading: action.payload.isLoading };

		default:
			break;
	}
};

const StoreContext = createContext();

export const useStore = () => {
	return useContext(StoreContext);
};

const StoreProvider = ({ children }) => {
	const [state, dispatch] = useReducer(StoreReducer, InitialStoreState);

	const ChangeStateDataPerson = (dataPerson) => {
		dispatch({ type: StoreActions.SET_DATAPERSON, payload: { dataPerson: dataPerson } });
	};

	const ChangeStateLoading = (isLoading) => {
		dispatch({ type: StoreActions.SET_ISLOADING, payload: { isLoading: isLoading } });
	};

	return <StoreContext.Provider value={{ ...state, ChangeStateDataPerson, ChangeStateLoading }}>{children}</StoreContext.Provider>;
};

export default StoreProvider;
