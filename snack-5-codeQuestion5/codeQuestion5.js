const hamburger = { 
	name: "Cheese Burger", 
	weight: 250,
	maker: {
		name: "Anonymous Chef",
		restaurant: {
			name: "Hyur's Burgers",
			address: "Main Street, 123",
			isOpen: true,
		},
		age: 29
	}
};

const newRestaurant = {...hamburger.maker.restaurant};
newRestaurant.name = "Hyur's II";
newRestaurant.address = "Second Street, 12";
const secondBurger = {...hamburger};
secondBurger.maker.restaurant = newRestaurant;
secondBurger.maker.name = "Chef Hyur";

console.log(hamburger.maker.name); // 'Chef Hyur'
console.log(secondBurger.maker.name); // 'Chef Hyur'
console.log(hamburger.maker.restaurant.name); // 'Hyur's II'
console.log(secondBurger.maker.restaurant.name); // 'Hyur's II'

// 'Il totale di oggetti che sono stati creati in questo esercizio sono 5 ovvero:
// 1. hamburger
// 2. maker (dentro hamburger)
// 3. restaurant (dentro maker)
// 4. newRestaurant (copia dello spread)
// 5. secondBurger (copia dello spread)'