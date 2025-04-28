const products = [
    {
        "Product": "Cereal",
        "Manufacturer": "Chokipik",
        "J": 17,
        "numInBox": 12,
        "boxesOnShelf": 2,
        "market": "deliAndGrocery",
        "color": "green"
    },
    {
        "Product": "Sliced Bread",
        "Manufacturer": "Ron's",
        "J": 30,
        "numInBox": 12,
        "boxesOnShelf": 2,
        "market": "deliAndGrocery",
        "color": "red"
    },
    {
        "Product": "Flour",
        "Manufacturer": "Kraftung",
        "J": 19,
        "numInBox": 8,
        "boxesOnShelf": 2,
        "market": "deliAndGrocery",
        "color": "red"
    },
    {
        "Product": "Oil",
        "Manufacturer": "Lespieds",
        "J": 25,
        "numInBox": 12,
        "boxesOnShelf": 6,
        "market": "deliAndGrocery",
        "color": "yellow"
    },
    {
        "Product": "Pasta",
        "Manufacturer": "Panzati",
        "J": 28,
        "numInBox": 8,
        "boxesOnShelf": 2,
        "market": "deliAndGrocery",
        "color": "red"
    },
    {
        "Product": "Sugar Powdered",
        "Manufacturer": "Susu",
        "J": 82,
        "numInBox": 12,
        "boxesOnShelf": 2,
        "market": "deliAndGrocery",
        "color": "red"
    },
    {
        "Product": "Bottled Water",
        "Manufacturer": "Aotte",
        "J": 37,
        "numInBox": 16,
        "boxesOnShelf": 2,
        "market": "deliAndGrocery",
        "color": "red"
    },
    {
        "Product": "Cheese",
        "Manufacturer": "Comte",
        "J": 15,
        "numInBox": 9,
        "boxesOnShelf": 6,
        "market": "meatAndDairy",
        "color": "red"
    },
    {
        "Product": "Coffee Dark Roast",
        "Manufacturer": "Narvalo",
        "J": 9,
        "numInBox": 8,
        "boxesOnShelf": 6,
        "market": "deliAndGrocery",
        "color": "green"
    },
    {
        "Product": "Eggs - 8 Pack",
        "Manufacturer": "Bio",
        "J": 2,
        "numInBox": 12,
        "boxesOnShelf": 6,
        "market": "meatAndDairy",
        "color": "yellow"
    },
    {
        "Product": "Milk",
        "Manufacturer": "Bourlait",
        "J": 1,
        "numInBox": 16,
        "boxesOnShelf": 2,
        "market": "meatAndDairy",
        "color": "yellow"
    },
    {
        "Product": "Tea Black",
        "Manufacturer": "TeaPalace",
        "J": 11,
        "numInBox": 20,
        "boxesOnShelf": 6,
        "market": "deliAndGrocery",
        "color": "green"
    },
    {
        "Product": "Peanut Butter",
        "Manufacturer": "PB's",
        "J": 75,
        "numInBox": 12,
        "boxesOnShelf": 6,
        "market": "deliAndGrocery",
        "color": "green"
    },
    {
        "Product": "Flour",
        "Manufacturer": "Farine",
        "J": 20,
        "numInBox": 8,
        "boxesOnShelf": 2,
        "market": "deliAndGrocery",
        "color": "green"
    },
    {
        "Product": "Olive Oil",
        "Manufacturer": "Tupiges",
        "J": 26,
        "numInBox": 12,
        "boxesOnShelf": 6,
        "market": "deliAndGrocery",
        "color": "green"
    },
    {
        "Product": "Pasta Spaghetti",
        "Manufacturer": "Elo",
        "J": 89,
        "numInBox": 8,
        "boxesOnShelf": 2,
        "market": "deliAndGrocery",
        "color": "green"
    },
    {
        "Product": "Rice Basmati",
        "Manufacturer": "Lustupacru",
        "J": 21,
        "numInBox": 10,
        "boxesOnShelf": 6,
        "market": "deliAndGrocery",
        "color": "green"
    },
    {
        "Product": "Salt",
        "Manufacturer": "Laba",
        "J": 31,
        "numInBox": 16,
        "boxesOnShelf": 9,
        "market": "deliAndGrocery",
        "color": "red"
    },
    {
        "Product": "Orange Juice",
        "Manufacturer": "Bio Juice",
        "J": 40,
        "numInBox": 16,
        "boxesOnShelf": 2,
        "market": "deliAndGrocery",
        "color": "red"
    },
    {
        "Product": "Soda",
        "Manufacturer": "Cola",
        "J": 35,
        "numInBox": 24,
        "boxesOnShelf": 2,
        "market": "deliAndGrocery",
        "color": "red"
    },
    {
        "Product": "Soda",
        "Manufacturer": "Zap",
        "J": 42,
        "numInBox": 24,
        "boxesOnShelf": 2,
        "market": "deliAndGrocery",
        "color": "red"
    },
    {
        "Product": "Apple Juice",
        "Manufacturer": "Bio Juice",
        "J": 41,
        "numInBox": 16,
        "boxesOnShelf": 2,
        "market": "deliAndGrocery",
        "color": "red"
    },
    {
        "Product": "Milk - 6 Pack",
        "Manufacturer": "Labol",
        "J": 9,
        "numInBox": 6,
        "boxesOnShelf": 2,
        "market": "meatAndDairy",
        "color": "yellow"
    },
    {
        "Product": "Soda",
        "Manufacturer": "Turko",
        "J": 36,
        "numInBox": 24,
        "boxesOnShelf": 2,
        "market": "deliAndGrocery",
        "color": "red"
    },
    {
        "Product": "Cake",
        "Manufacturer": "Bon Papa",
        "J": 14,
        "numInBox": 15,
        "boxesOnShelf": 6,
        "market": "deliAndGrocery",
        "color": "red"
    },
    {
        "Product": "Cake",
        "Manufacturer": "Pepites",
        "J": 97,
        "numInBox": 18,
        "boxesOnShelf": 6,
        "market": "deliAndGrocery",
        "color": "green"
    },
    {
        "Product": "Candy",
        "Manufacturer": "Bonbek",
        "J": 85,
        "numInBox": 12,
        "boxesOnShelf": 6,
        "market": "deliAndGrocery",
        "color": "yellow"
    },
    {
        "Product": "Cereal",
        "Manufacturer": "Crispy Chibi",
        "J": 15,
        "numInBox": 12,
        "boxesOnShelf": 2,
        "market": "deliAndGrocery",
        "color": "yellow"
    },
    {
        "Product": "Chocolate Bar",
        "Manufacturer": "Chocotte",
        "J": 86,
        "numInBox": 12,
        "boxesOnShelf": 6,
        "market": "deliAndGrocery",
        "color": "red"
    },
    {
        "Product": "Yoghurt",
        "Manufacturer": "Frugen",
        "J": 6,
        "numInBox": 30,
        "boxesOnShelf": 6,
        "market": "deliAndGrocery",
        "color": "yellow"
    },
    {
        "Product": "Bleach",
        "Manufacturer": "Jaja Vevel",
        "J": 19,
        "numInBox": 8,
        "boxesOnShelf": 1,
        "market": "janitorialSupply",
        "color": "yellow"
    },
    {
        "Product": "Cleaner",
        "Manufacturer": "Touprop",
        "J": 6,
        "numInBox": 12,
        "boxesOnShelf": 2,
        "market": "janitorialSupply",
        "color": "green"
    },
    {
        "Product": "Dishwasher Tablet",
        "Manufacturer": "Cleandish",
        "J": 14,
        "numInBox": 12,
        "boxesOnShelf": 2,
        "market": "janitorialSupply",
        "color": "blue"
    },
    {
        "Product": "Hand Soap",
        "Manufacturer": "Savion",
        "J": 9,
        "numInBox": 12,
        "boxesOnShelf": 6,
        "market": "janitorialSupply",
        "color": "red"
    },
    {
        "Product": "Shampoo",
        "Manufacturer": "Kaya",
        "J": 10,
        "numInBox": 12,
        "boxesOnShelf": 6,
        "market": "janitorialSupply",
        "color": "green"
    },
    {
        "Product": "Toiletpaper",
        "Manufacturer": "Poudou",
        "J": 18,
        "numInBox": 4,
        "boxesOnShelf": 1,
        "market": "janitorialSupply",
        "color": "green"
    },
    {
        "Product": "Cheese Mozarella",
        "Manufacturer": "Don Bernardo",
        "J": 14,
        "numInBox": 9,
        "boxesOnShelf": 6,
        "market": "meatAndDairy",
        "color": "yellow"
    },
    {
        "Product": "Cheese Parmesan",
        "Manufacturer": "Don Bernardo",
        "J": 12,
        "numInBox": 9,
        "boxesOnShelf": 6,
        "market": "meatAndDairy",
        "color": "green"
    },
    {
        "Product": "Honey",
        "Manufacturer": "Hone",
        "J": 76,
        "numInBox": 12,
        "boxesOnShelf": 6,
        "market": "deliAndGrocery",
        "color": "green"
    },
    {
        "Product": "Tuna",
        "Manufacturer": "Stark",
        "J": 16,
        "numInBox": 16,
        "boxesOnShelf": 2,
        "market": "meatAndDairy",
        "color": "green"
    },
    {
        "Product": "Eggs - 4 Pack",
        "Manufacturer": "Bio",
        "J": 3,
        "numInBox": 12,
        "boxesOnShelf": 9,
        "market": "meatAndDairy",
        "color": "yellow"
    },
    {
        "Product": "Sugar Powdered",
        "Manufacturer": "Pablo",
        "J": 93,
        "numInBox": 12,
        "boxesOnShelf": 6,
        "market": "deliAndGrocery",
        "color": "green"
    },
    {
        "Product": "Butter",
        "Manufacturer": "Paysans",
        "J": 27,
        "numInBox": 24,
        "boxesOnShelf": 9,
        "market": "deliAndGrocery",
        "color": "green"
    },
    {
        "Product": "Cereal",
        "Manufacturer": "Honey Bees",
        "J": 16,
        "numInBox": 12,
        "boxesOnShelf": 2,
        "market": "deliAndGrocery",
        "color": "green"
    },
    {
        "Product": "Chicken",
        "Manufacturer": "Mwef",
        "J": 8,
        "numInBox": 4,
        "boxesOnShelf": 1,
        "market": "meatAndDairy",
        "color": "green"
    },
    {
        "Product": "French Fries",
        "Manufacturer": "Vandame's",
        "J": 71,
        "numInBox": 12,
        "boxesOnShelf": 2,
        "market": "deliAndGrocery",
        "color": "green"
    },
    {
        "Product": "Pizza Mixed",
        "Manufacturer": "DeNiro",
        "J": 69,
        "numInBox": 32,
        "boxesOnShelf": 2,
        "market": "deliAndGrocery",
        "color": "green"
    },
    {
        "Product": "Potato Bag",
        "Manufacturer": "Miam",
        "J": 59,
        "numInBox": 4,
        "boxesOnShelf": 1,
        "market": "deliAndGrocery",
        "color": "red"
    },
    {
        "Product": "Cheese",
        "Manufacturer": "Mimolette",
        "J": 13,
        "numInBox": 9,
        "boxesOnShelf": 6,
        "market": "meatAndDairy",
        "color": "yellow"
    },
    {
        "Product": "Coffee Light Roast",
        "Manufacturer": "Narvalo",
        "J": 8,
        "numInBox": 8,
        "boxesOnShelf": 6,
        "market": "deliAndGrocery",
        "color": "green"
    },
    {
        "Product": "Bottled Water",
        "Manufacturer": "Montcuq",
        "J": 38,
        "numInBox": 16,
        "boxesOnShelf": 2,
        "market": "deliAndGrocery",
        "color": "red"
    },
    {
        "Product": "Eggs - 12 Pack",
        "Manufacturer": "Bio",
        "J": 4,
        "numInBox": 12,
        "boxesOnShelf": 2,
        "market": "meatAndDairy",
        "color": "green"
    },
    {
        "Product": "Pasta Elbows",
        "Manufacturer": "Lustupacru",
        "J": 90,
        "numInBox": 8,
        "boxesOnShelf": 2,
        "market": "deliAndGrocery",
        "color": "green"
    },
    {
        "Product": "Sugar Brown",
        "Manufacturer": "Susu",
        "J": 83,
        "numInBox": 12,
        "boxesOnShelf": 2,
        "market": "deliAndGrocery",
        "color": "green"
    },
    {
        "Product": "Tea Green",
        "Manufacturer": "TeaPalace",
        "J": 10,
        "numInBox": 20,
        "boxesOnShelf": 6,
        "market": "deliAndGrocery",
        "color": "green"
    },
    {
        "Product": "Moussaka",
        "Manufacturer": "Ronpoint",
        "J": 95,
        "numInBox": 24,
        "boxesOnShelf": 2,
        "market": "deliAndGrocery",
        "color": "blue"
    },
    {
        "Product": "Salmon",
        "Manufacturer": "NordicHarbor",
        "J": 19,
        "numInBox": 20,
        "boxesOnShelf": 6,
        "market": "meatAndDairy",
        "color": "blue"
    },
    {
        "Product": "Scallop Gratin",
        "Manufacturer": "Prypiat",
        "J": 102,
        "numInBox": 24,
        "boxesOnShelf": 2,
        "market": "deliAndGrocery",
        "color": "green"
    },
    {
        "Product": "Steak",
        "Manufacturer": "Bovora",
        "J": 6,
        "numInBox": 32,
        "boxesOnShelf": 6,
        "market": "meatAndDairy",
        "color": "blue"
    },
    {
        "Product": "Sushi Large",
        "Manufacturer": "Ulego",
        "J": 20,
        "numInBox": 8,
        "boxesOnShelf": 2,
        "market": "meatAndDairy",
        "color": "blue"
    },
    {
        "Product": "Sushi Small",
        "Manufacturer": "Ulego",
        "J": 21,
        "numInBox": 16,
        "boxesOnShelf": 2,
        "market": "meatAndDairy",
        "color": "blue"
    },
    {
        "Product": "Veal Chop",
        "Manufacturer": "Bovora",
        "J": 18,
        "numInBox": 32,
        "boxesOnShelf": 6,
        "market": "meatAndDairy",
        "color": "blue"
    },
    {
        "Product": "Crab Stick",
        "Manufacturer": "Sans",
        "J": 33,
        "numInBox": 24,
        "boxesOnShelf": 2,
        "market": "deliAndGrocery",
        "color": "green"
    },
    {
        "Product": "Hot Sauce",
        "Manufacturer": "Hothot",
        "J": 2,
        "numInBox": 12,
        "boxesOnShelf": 6,
        "market": "deliAndGrocery",
        "color": "yellow"
    },
    {
        "Product": "Icecream Chocolate",
        "Manufacturer": "MaxiCone",
        "J": 68,
        "numInBox": 24,
        "boxesOnShelf": 2,
        "market": "deliAndGrocery",
        "color": "blue"
    },
    {
        "Product": "Ketchup",
        "Manufacturer": "Kekette",
        "J": 3,
        "numInBox": 12,
        "boxesOnShelf": 6,
        "market": "deliAndGrocery",
        "color": "yellow"
    },
    {
        "Product": "Mayonnaise",
        "Manufacturer": "Yoyo",
        "J": 1,
        "numInBox": 12,
        "boxesOnShelf": 6,
        "market": "deliAndGrocery",
        "color": "green"
    },
    {
        "Product": "Pizza Cheddar",
        "Manufacturer": "ChezzyPizz",
        "J": 70,
        "numInBox": 32,
        "boxesOnShelf": 2,
        "market": "deliAndGrocery",
        "color": "blue"
    },
    {
        "Product": "Beer Blonde Ale - 6 Pack",
        "Manufacturer": "Fess",
        "J": 10,
        "numInBox": 18,
        "boxesOnShelf": 2,
        "market": "liquorStore",
        "color": "blue"
    },
    {
        "Product": "Beer Blonde Ale - Keg",
        "Manufacturer": "Fess",
        "J": 11,
        "numInBox": 6,
        "boxesOnShelf": 1,
        "market": "liquorStore",
        "color": "blue"
    },
    {
        "Product": "Beer Blond Ale",
        "Manufacturer": "Fess",
        "J": 14,
        "numInBox": 15,
        "boxesOnShelf": 9,
        "market": "liquorStore",
        "color": "yellow"
    },
    {
        "Product": "Beer Lager",
        "Manufacturer": "Teochew",
        "J": 7,
        "numInBox": 15,
        "boxesOnShelf": 9,
        "market": "liquorStore",
        "color": "green"
    },
    {
        "Product": "Chips",
        "Manufacturer": "Covidos",
        "J": 80,
        "numInBox": 16,
        "boxesOnShelf": 2,
        "market": "deliAndGrocery",
        "color": "green"
    },
    {
        "Product": "Houmus",
        "Manufacturer": "Bibi",
        "J": 34,
        "numInBox": 16,
        "boxesOnShelf": 2,
        "market": "deliAndGrocery",
        "color": "green"
    },
    {
        "Product": "Vodka",
        "Manufacturer": "Eay",
        "J": 17,
        "numInBox": 12,
        "boxesOnShelf": 2,
        "market": "liquorStore",
        "color": "green"
    },
    {
        "Product": "Chips",
        "Manufacturer": "Chipos",
        "J": 79,
        "numInBox": 16,
        "boxesOnShelf": 2,
        "market": "deliAndGrocery",
        "color": "green"
    },
    {
        "Product": "Flour",
        "Manufacturer": "Sublett's",
        "J": 18,
        "numInBox": 8,
        "boxesOnShelf": 2,
        "market": "deliAndGrocery",
        "color": "green"
    },
    {
        "Product": "Mashed Potatoes",
        "Manufacturer": "Puray",
        "J": 23,
        "numInBox": 12,
        "boxesOnShelf": 6,
        "market": "deliAndGrocery",
        "color": "green"
    },
    {
        "Product": "Pepper",
        "Manufacturer": "Afyon",
        "J": 32,
        "numInBox": 16,
        "boxesOnShelf": 9,
        "market": "deliAndGrocery",
        "color": "green"
    },
    {
        "Product": "Rice",
        "Manufacturer": "Elo",
        "J": 22,
        "numInBox": 10,
        "boxesOnShelf": 6,
        "market": "deliAndGrocery",
        "color": "yellow"
    },
    {
        "Product": "Sandwich Bread",
        "Manufacturer": "Ron's",
        "J": 29,
        "numInBox": 8,
        "boxesOnShelf": 2,
        "market": "deliAndGrocery",
        "color": "red"
    },
    {
        "Product": "Sugar Powdered",
        "Manufacturer": "Boully",
        "J": 84,
        "numInBox": 12,
        "boxesOnShelf": 6,
        "market": "deliAndGrocery",
        "color": "green"
    },
    {
        "Product": "Bleach",
        "Manufacturer": "WC Boeff",
        "J": 13,
        "numInBox": 6,
        "boxesOnShelf": 1,
        "market": "janitorialSupply",
        "color": "yellow"
    },
    {
        "Product": "Cleaner",
        "Manufacturer": "Kilemol",
        "J": 7,
        "numInBox": 12,
        "boxesOnShelf": 2,
        "market": "janitorialSupply",
        "color": "green"
    },
    {
        "Product": "Dishwasher Tablet",
        "Manufacturer": "Boum",
        "J": 11,
        "numInBox": 12,
        "boxesOnShelf": 2,
        "market": "janitorialSupply",
        "color": "blue"
    },
    {
        "Product": "Cleaner",
        "Manufacturer": "Yamo",
        "J": 5,
        "numInBox": 12,
        "boxesOnShelf": 1,
        "market": "janitorialSupply",
        "color": "green"
    },
    {
        "Product": "Dish Soap Durian",
        "Manufacturer": "Sapu",
        "J": 21,
        "numInBox": 12,
        "boxesOnShelf": 6,
        "market": "janitorialSupply",
        "color": "green"
    },
    {
        "Product": "Toiletpaper",
        "Manufacturer": "Bidet",
        "J": 16,
        "numInBox": 4,
        "boxesOnShelf": 1,
        "market": "janitorialSupply",
        "color": "green"
    },
    {
        "Product": "Coffee Medium Roast",
        "Manufacturer": "Narvalo",
        "J": 7,
        "numInBox": 8,
        "boxesOnShelf": 6,
        "market": "deliAndGrocery",
        "color": "green"
    },
    {
        "Product": "Soda",
        "Manufacturer": "JusTsistu",
        "J": 43,
        "numInBox": 24,
        "boxesOnShelf": 2,
        "market": "deliAndGrocery",
        "color": "red"
    },
    {
        "Product": "Soda",
        "Manufacturer": "Kouje",
        "J": 45,
        "numInBox": 24,
        "boxesOnShelf": 2,
        "market": "deliAndGrocery",
        "color": "yellow"
    },
    {
        "Product": "Soda",
        "Manufacturer": "Pulp",
        "J": 44,
        "numInBox": 24,
        "boxesOnShelf": 2,
        "market": "deliAndGrocery",
        "color": "red"
    },
    {
        "Product": "Soda",
        "Manufacturer": "Ropico",
        "J": 46,
        "numInBox": 24,
        "boxesOnShelf": 2,
        "market": "deliAndGrocery",
        "color": "green"
    },
    {
        "Product": "Sugar Light Brown",
        "Manufacturer": "Daron",
        "J": 92,
        "numInBox": 12,
        "boxesOnShelf": 6,
        "market": "deliAndGrocery",
        "color": "green"
    },
    {
        "Product": "Galette Ham & Cheese",
        "Manufacturer": "Prypiat",
        "J": 101,
        "numInBox": 24,
        "boxesOnShelf": 2,
        "market": "deliAndGrocery",
        "color": "blue"
    },
    {
        "Product": "Ground Beef",
        "Manufacturer": "Bovora",
        "J": 5,
        "numInBox": 20,
        "boxesOnShelf": 6,
        "market": "meatAndDairy",
        "color": "green"
    },
    {
        "Product": "Ham Pastry",
        "Manufacturer": "Ronpoint",
        "J": 96,
        "numInBox": 24,
        "boxesOnShelf": 2,
        "market": "deliAndGrocery",
        "color": "blue"
    },
    {
        "Product": "Ham",
        "Manufacturer": "B&K",
        "J": 23,
        "numInBox": 20,
        "boxesOnShelf": 6,
        "market": "meatAndDairy",
        "color": "green"
    },
    {
        "Product": "Lasagne",
        "Manufacturer": "Ronpoint",
        "J": 99,
        "numInBox": 24,
        "boxesOnShelf": 2,
        "market": "deliAndGrocery",
        "color": "blue"
    },
    {
        "Product": "Proscuito",
        "Manufacturer": "Sapore",
        "J": 22,
        "numInBox": 20,
        "boxesOnShelf": 6,
        "market": "meatAndDairy",
        "color": "green"
    },
    {
        "Product": "Chicken Leg",
        "Manufacturer": "Bovora",
        "J": 7,
        "numInBox": 16,
        "boxesOnShelf": 6,
        "market": "meatAndDairy",
        "color": "green"
    },
    {
        "Product": "Green Beans",
        "Manufacturer": "MrBean",
        "J": 73,
        "numInBox": 12,
        "boxesOnShelf": 2,
        "market": "deliAndGrocery",
        "color": "red"
    },
    {
        "Product": "Icecream Vanilla",
        "Manufacturer": "MaxiCone",
        "J": 65,
        "numInBox": 24,
        "boxesOnShelf": 2,
        "market": "deliAndGrocery",
        "color": "green"
    },
    {
        "Product": "Icecream",
        "Manufacturer": "Bonbek",
        "J": 67,
        "numInBox": 24,
        "boxesOnShelf": 2,
        "market": "deliAndGrocery",
        "color": "blue"
    },
    {
        "Product": "Pizza",
        "Manufacturer": "Bigtony",
        "J": 66,
        "numInBox": 32,
        "boxesOnShelf": 2,
        "market": "deliAndGrocery",
        "color": "blue"
    },
    {
        "Product": "Potato Pops",
        "Manufacturer": "Spok",
        "J": 74,
        "numInBox": 12,
        "boxesOnShelf": 2,
        "market": "deliAndGrocery",
        "color": "green"
    },
    {
        "Product": "Veggie Mix",
        "Manufacturer": "Ege",
        "J": 72,
        "numInBox": 12,
        "boxesOnShelf": 2,
        "market": "deliAndGrocery",
        "color": "green"
    },
    {
        "Product": "Beer Blonde Ale",
        "Manufacturer": "BK",
        "J": 16,
        "numInBox": 15,
        "boxesOnShelf": 9,
        "market": "liquorStore",
        "color": "yellow"
    },
    {
        "Product": "Beer Lager - 6 Pack",
        "Manufacturer": "Teochew",
        "J": 9,
        "numInBox": 18,
        "boxesOnShelf": 2,
        "market": "liquorStore",
        "color": "blue"
    },
    {
        "Product": "Beer Lager - Keg",
        "Manufacturer": "Teochew",
        "J": 12,
        "numInBox": 6,
        "boxesOnShelf": 1,
        "market": "liquorStore",
        "color": "blue"
    },
    {
        "Product": "Vodka",
        "Manufacturer": "Magnat",
        "J": 15,
        "numInBox": 12,
        "boxesOnShelf": 2,
        "market": "liquorStore",
        "color": "green"
    },
    {
        "Product": "Whiskey",
        "Manufacturer": "Grand Marnier",
        "J": 6,
        "numInBox": 12,
        "boxesOnShelf": 2,
        "market": "liquorStore",
        "color": "blue"
    },
    {
        "Product": "Wine",
        "Manufacturer": "Chebon",
        "J": 2,
        "numInBox": 12,
        "boxesOnShelf": 2,
        "market": "liquorStore",
        "color": "blue"
    },
    {
        "Product": "Cheese Parmesan",
        "Manufacturer": "Eros",
        "J": 11,
        "numInBox": 9,
        "boxesOnShelf": 6,
        "market": "meatAndDairy",
        "color": "green"
    },
    {
        "Product": "Cheese",
        "Manufacturer": "Gruyere",
        "J": 10,
        "numInBox": 9,
        "boxesOnShelf": 6,
        "market": "meatAndDairy",
        "color": "green"
    },
    {
        "Product": "Clotted Cream",
        "Manufacturer": "Etron",
        "J": 17,
        "numInBox": 16,
        "boxesOnShelf": 2,
        "market": "meatAndDairy",
        "color": "blue"
    },
    {
        "Product": "Pasta Penne",
        "Manufacturer": "Parillo",
        "J": 91,
        "numInBox": 8,
        "boxesOnShelf": 2,
        "market": "deliAndGrocery",
        "color": "red"
    },
    {
        "Product": "Rice",
        "Manufacturer": "UncleTony's",
        "J": 24,
        "numInBox": 10,
        "boxesOnShelf": 6,
        "market": "deliAndGrocery",
        "color": "green"
    },
    {
        "Product": "Sugar Cane",
        "Manufacturer": "Daron",
        "J": 81,
        "numInBox": 12,
        "boxesOnShelf": 2,
        "market": "deliAndGrocery",
        "color": "red"
    },
    {
        "Product": "Yoghurt",
        "Manufacturer": "Madone",
        "J": 4,
        "numInBox": 30,
        "boxesOnShelf": 6,
        "market": "deliAndGrocery",
        "color": "red"
    },
    {
        "Product": "Cleaner",
        "Manufacturer": "Wesh",
        "J": 8,
        "numInBox": 12,
        "boxesOnShelf": 2,
        "market": "janitorialSupply",
        "color": "green"
    },
    {
        "Product": "Dishwasher Tablet",
        "Manufacturer": "Cemagik",
        "J": 12,
        "numInBox": 8,
        "boxesOnShelf": 1,
        "market": "janitorialSupply",
        "color": "green"
    },
    {
        "Product": "Dish Soap Lemon",
        "Manufacturer": "Mouss",
        "J": 20,
        "numInBox": 12,
        "boxesOnShelf": 6,
        "market": "janitorialSupply",
        "color": "green"
    },
    {
        "Product": "Fabric Softener",
        "Manufacturer": "Souplesse",
        "J": 4,
        "numInBox": 12,
        "boxesOnShelf": 1,
        "market": "janitorialSupply",
        "color": "green"
    },
    {
        "Product": "Book",
        "Manufacturer": "ABC",
        "J": 47,
        "numInBox": 8,
        "boxesOnShelf": 6,
        "market": "deliAndGrocery",
        "color": "yellow"
    },
    {
        "Product": "Book",
        "Manufacturer": "Colors",
        "J": 57,
        "numInBox": 8,
        "boxesOnShelf": 6,
        "market": "deliAndGrocery",
        "color": "yellow"
    },
    {
        "Product": "Book",
        "Manufacturer": "Donnine",
        "J": 58,
        "numInBox": 8,
        "boxesOnShelf": 6,
        "market": "deliAndGrocery",
        "color": "green"
    },
    {
        "Product": "Book",
        "Manufacturer": "Electromagnetic Field",
        "J": 50,
        "numInBox": 8,
        "boxesOnShelf": 6,
        "market": "deliAndGrocery",
        "color": "yellow"
    },
    {
        "Product": "Book",
        "Manufacturer": "I Won't Share",
        "J": 53,
        "numInBox": 8,
        "boxesOnShelf": 6,
        "market": "deliAndGrocery",
        "color": "red"
    },
    {
        "Product": "Book",
        "Manufacturer": "Mother And Child",
        "J": 52,
        "numInBox": 8,
        "boxesOnShelf": 6,
        "market": "deliAndGrocery",
        "color": "green"
    },
    {
        "Product": "Cleaner",
        "Manufacturer": "Le Triangle",
        "J": 3,
        "numInBox": 12,
        "boxesOnShelf": 6,
        "market": "janitorialSupply",
        "color": "yellow"
    },
    {
        "Product": "Cat Food",
        "Manufacturer": "Miaoumiam",
        "J": 63,
        "numInBox": 12,
        "boxesOnShelf": 2,
        "market": "deliAndGrocery",
        "color": "red"
    },
    {
        "Product": "Cat Food",
        "Manufacturer": "Patpat",
        "J": 62,
        "numInBox": 12,
        "boxesOnShelf": 2,
        "market": "deliAndGrocery",
        "color": "red"
    },
    {
        "Product": "Dog Food",
        "Manufacturer": "Patpat",
        "J": 64,
        "numInBox": 16,
        "boxesOnShelf": 1,
        "market": "deliAndGrocery",
        "color": "blue"
    },
    {
        "Product": "Cake",
        "Manufacturer": "Gerbe",
        "J": 12,
        "numInBox": 15,
        "boxesOnShelf": 6,
        "market": "deliAndGrocery",
        "color": "blue"
    },
    {
        "Product": "Cake",
        "Manufacturer": "Marbre",
        "J": 100,
        "numInBox": 18,
        "boxesOnShelf": 6,
        "market": "deliAndGrocery",
        "color": "green"
    },
    {
        "Product": "Chips",
        "Manufacturer": "Vin's",
        "J": 78,
        "numInBox": 16,
        "boxesOnShelf": 2,
        "market": "deliAndGrocery",
        "color": "yellow"
    },
    {
        "Product": "Chocolate Spread",
        "Manufacturer": "Patatartine",
        "J": 77,
        "numInBox": 12,
        "boxesOnShelf": 6,
        "market": "deliAndGrocery",
        "color": "yellow"
    },
    {
        "Product": "Soda Can - 6 Pack",
        "Manufacturer": "Cola",
        "J": 60,
        "numInBox": 24,
        "boxesOnShelf": 1,
        "market": "deliAndGrocery",
        "color": "green"
    },
    {
        "Product": "Soda Can - 6 Pack",
        "Manufacturer": "Zap",
        "J": 61,
        "numInBox": 24,
        "boxesOnShelf": 1,
        "market": "deliAndGrocery",
        "color": "green"
    },
    {
        "Product": "Bottled Water",
        "Manufacturer": "Fort-lacs",
        "J": 39,
        "numInBox": 16,
        "boxesOnShelf": 2,
        "market": "deliAndGrocery",
        "color": "red"
    },
    {
        "Product": "Fabric Softener",
        "Manufacturer": "Toudou",
        "J": 2,
        "numInBox": 12,
        "boxesOnShelf": 1,
        "market": "janitorialSupply",
        "color": "green"
    },
    {
        "Product": "Paper Towel",
        "Manufacturer": "Compact",
        "J": 17,
        "numInBox": 4,
        "boxesOnShelf": 1,
        "market": "janitorialSupply",
        "color": "green"
    },
    {
        "Product": "Toiletpaper",
        "Manufacturer": "Petus",
        "J": 15,
        "numInBox": 4,
        "boxesOnShelf": 1,
        "market": "janitorialSupply",
        "color": "green"
    },
    {
        "Product": "Toothpaste",
        "Manufacturer": "Signoulos",
        "J": 1,
        "numInBox": 24,
        "boxesOnShelf": 9,
        "market": "janitorialSupply",
        "color": "green"
    },
    {
        "Product": "Book",
        "Manufacturer": "Krok",
        "J": 54,
        "numInBox": 8,
        "boxesOnShelf": 6,
        "market": "deliAndGrocery",
        "color": "yellow"
    },
    {
        "Product": "Book",
        "Manufacturer": "Once Upon A Time",
        "J": 51,
        "numInBox": 8,
        "boxesOnShelf": 6,
        "market": "deliAndGrocery",
        "color": "yellow"
    },
    {
        "Product": "Book",
        "Manufacturer": "Piticha",
        "J": 49,
        "numInBox": 8,
        "boxesOnShelf": 6,
        "market": "deliAndGrocery",
        "color": "green"
    },
    {
        "Product": "Book",
        "Manufacturer": "The Surprise",
        "J": 48,
        "numInBox": 8,
        "boxesOnShelf": 6,
        "market": "deliAndGrocery",
        "color": "yellow"
    },
    {
        "Product": "Book",
        "Manufacturer": "Vintage Storybook",
        "J": 55,
        "numInBox": 8,
        "boxesOnShelf": 6,
        "market": "deliAndGrocery",
        "color": "green"
    },
    {
        "Product": "Book",
        "Manufacturer": "Wombat",
        "J": 56,
        "numInBox": 8,
        "boxesOnShelf": 6,
        "market": "deliAndGrocery",
        "color": "yellow"
    },
    {
        "Product": "Cake",
        "Manufacturer": "Prairie",
        "J": 98,
        "numInBox": 18,
        "boxesOnShelf": 6,
        "market": "deliAndGrocery",
        "color": "green"
    },
    {
        "Product": "Cake",
        "Manufacturer": "St Michmich",
        "J": 13,
        "numInBox": 15,
        "boxesOnShelf": 6,
        "market": "deliAndGrocery",
        "color": "blue"
    },
    {
        "Product": "Chocolate Bar",
        "Manufacturer": "Denorme",
        "J": 87,
        "numInBox": 12,
        "boxesOnShelf": 6,
        "market": "deliAndGrocery",
        "color": "red"
    },
    {
        "Product": "Chocolate Powder",
        "Manufacturer": "Boudain",
        "J": 88,
        "numInBox": 16,
        "boxesOnShelf": 6,
        "market": "deliAndGrocery",
        "color": "yellow"
    },
    {
        "Product": "Sugar",
        "Manufacturer": "Daron",
        "J": 94,
        "numInBox": 12,
        "boxesOnShelf": 6,
        "market": "deliAndGrocery",
        "color": "green"
    },
    {
        "Product": "Yoghurt",
        "Manufacturer": "Yowp",
        "J": 5,
        "numInBox": 30,
        "boxesOnShelf": 9,
        "market": "deliAndGrocery",
        "color": "green"
    },
    {
        "Product": "Beer Blonde Ale - 6 Pack",
        "Manufacturer": "BK",
        "J": 8,
        "numInBox": 18,
        "boxesOnShelf": 2,
        "market": "liquorStore",
        "color": "blue"
    },
    {
        "Product": "Beer Blonde Ale - Keg",
        "Manufacturer": "Dehl",
        "J": 13,
        "numInBox": 6,
        "boxesOnShelf": 1,
        "market": "liquorStore",
        "color": "blue"
    },
    {
        "Product": "Whiskey",
        "Manufacturer": "Jack Sublett",
        "J": 5,
        "numInBox": 12,
        "boxesOnShelf": 2,
        "market": "liquorStore",
        "color": "blue"
    },
    {
        "Product": "Whiskey",
        "Manufacturer": "Japanese",
        "J": 4,
        "numInBox": 12,
        "boxesOnShelf": 2,
        "market": "liquorStore",
        "color": "blue"
    },
    {
        "Product": "Wine",
        "Manufacturer": "Heng",
        "J": 3,
        "numInBox": 12,
        "boxesOnShelf": 2,
        "market": "liquorStore",
        "color": "green"
    },
    {
        "Product": "Wine",
        "Manufacturer": "Pouilleux",
        "J": 1,
        "numInBox": 12,
        "boxesOnShelf": 2,
        "market": "liquorStore",
        "color": "green"
    },
    {
        "Product": "Squash",
        "Manufacturer": "-",
        "J": 1,
        "numInBox": 1,
        "boxesOnShelf": 4,
        "market": "greenMarket",
        "color": "green"
    },
    {
        "Product": "Zuccini",
        "Manufacturer": "-",
        "J": 2,
        "numInBox": 1,
        "boxesOnShelf": 4,
        "market": "greenMarket",
        "color": "green"
    },
    {
        "Product": "Tomato",
        "Manufacturer": "-",
        "J": 3,
        "numInBox": 1,
        "boxesOnShelf": 4,
        "market": "greenMarket",
        "color": "green"
    },
    {
        "Product": "Banana",
        "Manufacturer": "-",
        "J": 4,
        "numInBox": 1,
        "boxesOnShelf": 4,
        "market": "greenMarket",
        "color": "red"
    },
    {
        "Product": "Avocado",
        "Manufacturer": "-",
        "J": 5,
        "numInBox": 1,
        "boxesOnShelf": 4,
        "market": "greenMarket",
        "color": "green"
    },
    {
        "Product": "Apple",
        "Manufacturer": "-",
        "J": 6,
        "numInBox": 1,
        "boxesOnShelf": 4,
        "market": "greenMarket",
        "color": "green"
    },
    {
        "Product": "Lemon",
        "Manufacturer": "-",
        "J": 7,
        "numInBox": 1,
        "boxesOnShelf": 4,
        "market": "greenMarket",
        "color": "green"
    },
    {
        "Product": "Kiwi",
        "Manufacturer": "-",
        "J": 8,
        "numInBox": 1,
        "boxesOnShelf": 4,
        "market": "greenMarket",
        "color": "green"
    },
    {
        "Product": "Mango",
        "Manufacturer": "-",
        "J": 9,
        "numInBox": 1,
        "boxesOnShelf": 4,
        "market": "greenMarket",
        "color": "green"
    },
    {
        "Product": "Clementine",
        "Manufacturer": "-",
        "J": 10,
        "numInBox": 1,
        "boxesOnShelf": 4,
        "market": "greenMarket",
        "color": "red"
    },
    {
        "Product": "Potato",
        "Manufacturer": "-",
        "J": 11,
        "numInBox": 1,
        "boxesOnShelf": 4,
        "market": "greenMarket",
        "color": "red"
    },
    {
        "Product": "Pear",
        "Manufacturer": "-",
        "J": 12,
        "numInBox": 1,
        "boxesOnShelf": 4,
        "market": "greenMarket",
        "color": "red"
    },
    {
        "Product": "Watermelon",
        "Manufacturer": "-",
        "J": 13,
        "numInBox": 1,
        "boxesOnShelf": 4,
        "market": "greenMarket",
        "color": "yellow"
    },
    {
        "Product": "Melon",
        "Manufacturer": "-",
        "J": 14,
        "numInBox": 1,
        "boxesOnShelf": 4,
        "market": "greenMarket",
        "color": "green"
    },
    {
        "Product": "Pineapple",
        "Manufacturer": "-",
        "J": 15,
        "numInBox": 1,
        "boxesOnShelf": 4,
        "market": "greenMarket",
        "color": "red"
    },
    {
        "Product": "Papaya",
        "Manufacturer": "-",
        "J": 16,
        "numInBox": 1,
        "boxesOnShelf": 4,
        "market": "greenMarket",
        "color": "green"
    },
    {
        "Product": "Onion",
        "Manufacturer": "-",
        "J": 17,
        "numInBox": 1,
        "boxesOnShelf": 4,
        "market": "greenMarket",
        "color": "yellow"
    },
    {
        "Product": "Mushroom",
        "Manufacturer": "-",
        "J": 18,
        "numInBox": 1,
        "boxesOnShelf": 4,
        "market": "greenMarket",
        "color": "red"
    },
    {
        "Product": "Grapefruit",
        "Manufacturer": "-",
        "J": 19,
        "numInBox": 1,
        "boxesOnShelf": 4,
        "market": "greenMarket",
        "color": "red"
    },
    {
        "Product": "Garlic",
        "Manufacturer": "-",
        "J": 20,
        "numInBox": 1,
        "boxesOnShelf": 4,
        "market": "greenMarket",
        "color": "green"
    },
    {
        "Product": "Carrot",
        "Manufacturer": "-",
        "J": 21,
        "numInBox": 1,
        "boxesOnShelf": 4,
        "market": "greenMarket",
        "color": "red"
    },
    {
        "Product": "Artichoke",
        "Manufacturer": "-",
        "J": 22,
        "numInBox": 1,
        "boxesOnShelf": 4,
        "market": "greenMarket",
        "color": "green"
    },
    {
        "Product": "Pumpkin",
        "Manufacturer": "-",
        "J": 23,
        "numInBox": 1,
        "boxesOnShelf": 4,
        "market": "greenMarket",
        "color": "yellow"
    }
]