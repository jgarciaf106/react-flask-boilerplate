const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null as string
		},
		actions: {
			exampleFunction: () => {
				const store = getStore();
				console.log(store.message);
			}
		}
	};
};

export default getState;
