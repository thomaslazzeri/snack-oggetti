const chef = {
	name: "Chef Hyur",
	age: 29,
	makeBurger: (num = 1) => {
		console.log(`Ecco ${num} hamburger per te!`);
	},
}

const restaurant = {
	name: "Hyur's Burgers",
	address: {
		street: 'Main Street',
		number: 123,
	},
	openingDate: new Date(2025, 3, 11),
	isOpen: false,
};

// 'Il metodo migliore per clonare l'oggetto chef è lo spread(...) perché accetta le funzioni e 
// per clonare l'oggetto restaurant è structuredClone() perché copia gli oggetti annidati complessi.'