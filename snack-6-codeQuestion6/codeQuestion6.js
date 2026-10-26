const chef = {
	name: "Chef Hyur",
	age: 29,
	makeBurger: (num = 1) => {
		console.log(`Ecco ${num} hamburger per te!`);
	},
	restaurant: {
		name: "Hyur's Burgers",
		welcomeClient: () => {
			console.log("Benvenuto!");
		},
		address: {
			street: 'Main Street',
			number: 123,
			showAddress: () => {
				console.log("Main Street 123");
			}
		},
		isOpen: true,
	}
}

// 'La scelta migliore da scegliere per questo esercizio è lo spread(...) 
// con uno spread(...) a ogni livello che contiene un oggetto e non con un solo spread(...) che non basterebbe per questo esercizio.'