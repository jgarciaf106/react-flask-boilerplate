const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null
		},
		actions: {
			exampleFunction: () => {
				const store = getStore();
				//console.log(store.message);
			}
		}
	};
};

export default getState;
