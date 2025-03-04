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
				try {
					const response = await fetch("https://super-duper-space-adventure-pjpjqx6q46qp27jgx-3001.app.github.dev/api/phones")

					const data = await response.json()
					
					setStore({phones: data.phones})

				} catch (error) {
					console.error("Error getting phones from API:");
				}
			},
			getTvs: async () => {
				try {
					const response = await fetch("https://super-duper-space-adventure-pjpjqx6q46qp27jgx-3001.app.github.dev/api/tvs")

					const data = await response.json()			
					
					setStore({tvs: data.tvs})

				} catch (error) {
					console.error("Error getting TVs from API:");
				}
			},

			getLaptops: async () => {
				try {
					const response = await fetch("https://super-duper-space-adventure-pjpjqx6q46qp27jgx-3001.app.github.dev/api/laptops")

					const data = await response.json()
					
					setStore({laptops: data.laptops})

				} catch (error) {
					console.error("Error getting Laptops from API:");
				}
			},
		}
	};
};

export default getState;
