import { BackendURL } from "../component/backendURL";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			phones: [],
			tvs: [],
			laptops: [],
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},

			getPhones: async () => {
				const urlBackend = process.env.BACKEND_URL				
				try {
					const response = await fetch(urlBackend + 'phones')
					const data = await response.json()
					setStore({phones: data})

				} catch (error) {
					console.error("Error getting phones from API:");
				}
			},

			getTvs: async () => {
				const urlBackend = process.env.BACKEND_URL
				try {
					const response = await fetch(urlBackend + 'tvs')
					const data = await response.json()		
					setStore({tvs: data})
				} catch (error) {
					console.error("Error getting TVs from API:");
				}
			},

			getLaptops: async () => {
				const urlBackend = process.env.BACKEND_URL
				try {
					const response = await fetch(urlBackend + 'laptops')
					const data = await response.json()
					setStore({laptops: data})

				} catch (error) {
					console.error("Error getting Laptops from API:");
				}
			},
		}
	};
};

export default getState;
