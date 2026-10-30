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
};

const deepCopy = (oggetto) => {
    const copia = {}

    for (const chiave in oggetto) {
        const valore = oggetto[chiave];

        if (typeof valore === 'object') {
            copia[chiave] = deepCopy(valore);
        } else {
            copia[chiave] = oggetto[chiave];
        }
    }
    return copia;
};

const chefCopia = deepCopy(chef);

console.log(chef.restaurant === chefCopia.restaurant);
console.log(chef.restaurant.address === chefCopia.restaurant.address);
chefCopia.restaurant.address.showAddress();