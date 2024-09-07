const products = [
    {
        "Product": "Cereal",
        "Manufacturer": "Chokipik",
        "J": 102,
        "numInBox": 12,
        "boxesOnShelf": 2
    },
    {
        "Product": "Sliced Bread",
        "Manufacturer": "Ron's",
        "J": 46,
        "numInBox": 12,
        "boxesOnShelf": 2
    },
    {
        "Product": "Flour",
        "Manufacturer": "Kraftung",
        "J": 8,
        "numInBox": 8,
        "boxesOnShelf": 2
    },
    {
        "Product": "Oil",
        "Manufacturer": "Lespieds",
        "J": 13,
        "numInBox": 12,
        "boxesOnShelf": 6
    },
    {
        "Product": "Pasta",
        "Manufacturer": "Panzati",
        "J": 119,
        "numInBox": 8,
        "boxesOnShelf": 2
    },
    {
        "Product": "Sugar Powdered",
        "Manufacturer": "Susu",
        "J": 27,
        "numInBox": 12,
        "boxesOnShelf": 2
    },
    {
        "Product": "Bottled Water",
        "Manufacturer": "Aotte",
        "J": 126,
        "numInBox": 16,
        "boxesOnShelf": 2
    },
    {
        "Product": "Cheese",
        "Manufacturer": "Comte",
        "J": 33,
        "numInBox": 9,
        "boxesOnShelf": 6
    },
    {
        "Product": "Coffee Dark Roast",
        "Manufacturer": "Narvalo",
        "J": 111,
        "numInBox": 8,
        "boxesOnShelf": 6
    },
    {
        "Product": "Eggs - 8 Pack",
        "Manufacturer": "Bio",
        "J": 124,
        "numInBox": 12,
        "boxesOnShelf": 6
    },
    {
        "Product": "Milk",
        "Manufacturer": "Bourlait",
        "J": 54,
        "numInBox": 16,
        "boxesOnShelf": 2
    },
    {
        "Product": "Tea Black",
        "Manufacturer": "TeaPalace",
        "J": 114,
        "numInBox": 20,
        "boxesOnShelf": 6
    },
    {
        "Product": "Peanut Butter",
        "Manufacturer": "PB's",
        "J": 1,
        "numInBox": 12,
        "boxesOnShelf": 6
    },
    {
        "Product": "Flour",
        "Manufacturer": "Farine",
        "J": 9,
        "numInBox": 8,
        "boxesOnShelf": 2
    },
    {
        "Product": "Olive Oil",
        "Manufacturer": "Tupiges",
        "J": 14,
        "numInBox": 12,
        "boxesOnShelf": 6
    },
    {
        "Product": "Pasta Spaghetti",
        "Manufacturer": "Elo",
        "J": 120,
        "numInBox": 8,
        "boxesOnShelf": 2
    },
    {
        "Product": "Rice Basmati",
        "Manufacturer": "Lustupacru",
        "J": 48,
        "numInBox": 10,
        "boxesOnShelf": 6
    },
    {
        "Product": "Salt",
        "Manufacturer": "Laba",
        "J": 117,
        "numInBox": 16,
        "boxesOnShelf": 9
    },
    {
        "Product": "Orange Juice",
        "Manufacturer": "Bio Juice",
        "J": 53,
        "numInBox": 16,
        "boxesOnShelf": 2
    },
    {
        "Product": "Soda",
        "Manufacturer": "Cola",
        "J": 92,
        "numInBox": 24,
        "boxesOnShelf": 2
    },
    {
        "Product": "Soda",
        "Manufacturer": "Zap",
        "J": 93,
        "numInBox": 24,
        "boxesOnShelf": 2
    },
    {
        "Product": "Apple Juice",
        "Manufacturer": "Bio Juice",
        "J": 52,
        "numInBox": 16,
        "boxesOnShelf": 2
    },
    {
        "Product": "Milk - 6 Pack",
        "Manufacturer": "Labol",
        "J": 105,
        "numInBox": 6,
        "boxesOnShelf": 2
    },
    {
        "Product": "Soda",
        "Manufacturer": "Turko",
        "J": 94,
        "numInBox": 24,
        "boxesOnShelf": 2
    },
    {
        "Product": "Cake",
        "Manufacturer": "Bon Papa",
        "J": 137,
        "numInBox": 15,
        "boxesOnShelf": 6
    },
    {
        "Product": "Cake",
        "Manufacturer": "Pepites",
        "J": 138,
        "numInBox": 18,
        "boxesOnShelf": 6
    },
    {
        "Product": "Candy",
        "Manufacturer": "Bonbek",
        "J": 109,
        "numInBox": 12,
        "boxesOnShelf": 6
    },
    {
        "Product": "Cereal",
        "Manufacturer": "Crispy Chibi",
        "J": 103,
        "numInBox": 12,
        "boxesOnShelf": 2
    },
    {
        "Product": "Chocolate Bar",
        "Manufacturer": "Chocotte",
        "J": 110,
        "numInBox": 12,
        "boxesOnShelf": 6
    },
    {
        "Product": "Yoghurt",
        "Manufacturer": "Frugen",
        "J": 55,
        "numInBox": 30,
        "boxesOnShelf": 6
    },
    {
        "Product": "Bleach",
        "Manufacturer": "Jaja Vevel",
        "J": 77,
        "numInBox": 8,
        "boxesOnShelf": 1
    },
    {
        "Product": "Cleaner",
        "Manufacturer": "Touprop",
        "J": 63,
        "numInBox": 12,
        "boxesOnShelf": 2
    },
    {
        "Product": "Dishwasher Tablet",
        "Manufacturer": "Cleandish",
        "J": 75,
        "numInBox": 12,
        "boxesOnShelf": 2
    },
    {
        "Product": "Hand Soap",
        "Manufacturer": "Savion",
        "J": 71,
        "numInBox": 12,
        "boxesOnShelf": 6
    },
    {
        "Product": "Shampoo",
        "Manufacturer": "Kaya",
        "J": 74,
        "numInBox": 12,
        "boxesOnShelf": 6
    },
    {
        "Product": "Toiletpaper",
        "Manufacturer": "Poudou",
        "J": 69,
        "numInBox": 4,
        "boxesOnShelf": 1
    },
    {
        "Product": "Cheese Mozarella",
        "Manufacturer": "Don Bernardo",
        "J": 34,
        "numInBox": 9,
        "boxesOnShelf": 6
    },
    {
        "Product": "Cheese Parmesan",
        "Manufacturer": "Don Bernardo",
        "J": 35,
        "numInBox": 9,
        "boxesOnShelf": 6
    },
    {
        "Product": "Honey",
        "Manufacturer": "Hone",
        "J": 116,
        "numInBox": 12,
        "boxesOnShelf": 6
    },
    {
        "Product": "Tuna",
        "Manufacturer": "Stark",
        "J": 106,
        "numInBox": 16,
        "boxesOnShelf": 2
    },
    {
        "Product": "Eggs - 4 Pack",
        "Manufacturer": "Bio",
        "J": 123,
        "numInBox": 12,
        "boxesOnShelf": 9
    },
    {
        "Product": "Sugar Powdered",
        "Manufacturer": "Pablo",
        "J": 29,
        "numInBox": 12,
        "boxesOnShelf": 6
    },
    {
        "Product": "Butter",
        "Manufacturer": "Paysans",
        "J": 12,
        "numInBox": 24,
        "boxesOnShelf": 9
    },
    {
        "Product": "Cereal",
        "Manufacturer": "Honey Bees",
        "J": 104,
        "numInBox": 12,
        "boxesOnShelf": 2
    },
    {
        "Product": "Chicken",
        "Manufacturer": "Mwef",
        "J": 11,
        "numInBox": 4,
        "boxesOnShelf": 1
    },
    {
        "Product": "French Fries",
        "Manufacturer": "Vandame's",
        "J": 62,
        "numInBox": 12,
        "boxesOnShelf": 2
    },
    {
        "Product": "Pizza Mixed",
        "Manufacturer": "DeNiro",
        "J": 59,
        "numInBox": 32,
        "boxesOnShelf": 2
    },
    {
        "Product": "Potato Bag",
        "Manufacturer": "Miam",
        "J": 15,
        "numInBox": 4,
        "boxesOnShelf": 1
    },
    {
        "Product": "Cheese",
        "Manufacturer": "Mimolette",
        "J": 36,
        "numInBox": 9,
        "boxesOnShelf": 6
    },
    {
        "Product": "Coffee Light Roast",
        "Manufacturer": "Narvalo",
        "J": 112,
        "numInBox": 8,
        "boxesOnShelf": 6
    },
    {
        "Product": "Bottled Water",
        "Manufacturer": "Montcuq",
        "J": 127,
        "numInBox": 16,
        "boxesOnShelf": 2
    },
    {
        "Product": "Eggs - 12 Pack",
        "Manufacturer": "Bio",
        "J": 125,
        "numInBox": 12,
        "boxesOnShelf": 2
    },
    {
        "Product": "Pasta Elbows",
        "Manufacturer": "Lustupacru",
        "J": 121,
        "numInBox": 8,
        "boxesOnShelf": 2
    },
    {
        "Product": "Sugar Brown",
        "Manufacturer": "Susu",
        "J": 28,
        "numInBox": 12,
        "boxesOnShelf": 2
    },
    {
        "Product": "Tea Green",
        "Manufacturer": "TeaPalace",
        "J": 115,
        "numInBox": 20,
        "boxesOnShelf": 6
    },
    {
        "Product": "Moussaka",
        "Manufacturer": "Ronpoint",
        "J": 21,
        "numInBox": 24,
        "boxesOnShelf": 2
    },
    {
        "Product": "Salmon",
        "Manufacturer": "NordicHarbor",
        "J": 25,
        "numInBox": 20,
        "boxesOnShelf": 6
    },
    {
        "Product": "Scallop Gratin",
        "Manufacturer": "Prypiat",
        "J": 19,
        "numInBox": 24,
        "boxesOnShelf": 2
    },
    {
        "Product": "Steak",
        "Manufacturer": "Bovora",
        "J": 40,
        "numInBox": 32,
        "boxesOnShelf": 6
    },
    {
        "Product": "Sushi Large",
        "Manufacturer": "Ulego",
        "J": 45,
        "numInBox": 8,
        "boxesOnShelf": 2
    },
    {
        "Product": "Sushi Small",
        "Manufacturer": "Ulego",
        "J": 44,
        "numInBox": 16,
        "boxesOnShelf": 2
    },
    {
        "Product": "Veal Chop",
        "Manufacturer": "Bovora",
        "J": 39,
        "numInBox": 32,
        "boxesOnShelf": 6
    },
    {
        "Product": "Crab Stick",
        "Manufacturer": "Sans",
        "J": 20,
        "numInBox": 24,
        "boxesOnShelf": 2
    },
    {
        "Product": "Hot Sauce",
        "Manufacturer": "Hothot",
        "J": 2,
        "numInBox": 12,
        "boxesOnShelf": 6
    },
    {
        "Product": "Icecream Chocolate",
        "Manufacturer": "MaxiCone",
        "J": 6,
        "numInBox": 24,
        "boxesOnShelf": 2
    },
    {
        "Product": "Ketchup",
        "Manufacturer": "Kekette",
        "J": 3,
        "numInBox": 12,
        "boxesOnShelf": 6
    },
    {
        "Product": "Mayonnaise",
        "Manufacturer": "Yoyo",
        "J": 4,
        "numInBox": 12,
        "boxesOnShelf": 6
    },
    {
        "Product": "Pizza Cheddar",
        "Manufacturer": "ChezzyPizz",
        "J": 60,
        "numInBox": 32,
        "boxesOnShelf": 2
    },
    {
        "Product": "Beer Blonde Ale - 6 Pack",
        "Manufacturer": "Fess",
        "J": 84,
        "numInBox": 18,
        "boxesOnShelf": 2
    },
    {
        "Product": "Beer Blonde Ale - Keg",
        "Manufacturer": "Fess",
        "J": 90,
        "numInBox": 6,
        "boxesOnShelf": 1
    },
    {
        "Product": "Beer Blond Ale",
        "Manufacturer": "Fess",
        "J": 87,
        "numInBox": 15,
        "boxesOnShelf": 9
    },
    {
        "Product": "Beer Lager",
        "Manufacturer": "Teochew",
        "J": 88,
        "numInBox": 15,
        "boxesOnShelf": 9
    },
    {
        "Product": "Chips",
        "Manufacturer": "Covidos",
        "J": 16,
        "numInBox": 16,
        "boxesOnShelf": 2
    },
    {
        "Product": "Houmus",
        "Manufacturer": "Bibi",
        "J": 107,
        "numInBox": 16,
        "boxesOnShelf": 2
    },
    {
        "Product": "Vodka",
        "Manufacturer": "Eay",
        "J": 81,
        "numInBox": 12,
        "boxesOnShelf": 2
    },
    {
        "Product": "Chips",
        "Manufacturer": "Chipos",
        "J": 17,
        "numInBox": 16,
        "boxesOnShelf": 2
    },
    {
        "Product": "Flour",
        "Manufacturer": "Sublett's",
        "J": 10,
        "numInBox": 8,
        "boxesOnShelf": 2
    },
    {
        "Product": "Mashed Potatoes",
        "Manufacturer": "Puray",
        "J": 51,
        "numInBox": 12,
        "boxesOnShelf": 6
    },
    {
        "Product": "Pepper",
        "Manufacturer": "Afyon",
        "J": 118,
        "numInBox": 16,
        "boxesOnShelf": 9
    },
    {
        "Product": "Rice",
        "Manufacturer": "Elo",
        "J": 49,
        "numInBox": 10,
        "boxesOnShelf": 6
    },
    {
        "Product": "Sandwich Bread",
        "Manufacturer": "Ron's",
        "J": 47,
        "numInBox": 8,
        "boxesOnShelf": 2
    },
    {
        "Product": "Sugar Powdered",
        "Manufacturer": "Boully",
        "J": 30,
        "numInBox": 12,
        "boxesOnShelf": 6
    },
    {
        "Product": "Bleach",
        "Manufacturer": "WC Boeff",
        "J": 78,
        "numInBox": 6,
        "boxesOnShelf": 1
    },
    {
        "Product": "Cleaner",
        "Manufacturer": "Kilemol",
        "J": 64,
        "numInBox": 12,
        "boxesOnShelf": 2
    },
    {
        "Product": "Dishwasher Tablet",
        "Manufacturer": "Boum",
        "J": 76,
        "numInBox": 12,
        "boxesOnShelf": 2
    },
    {
        "Product": "Cleaner",
        "Manufacturer": "Yamo",
        "J": 67,
        "numInBox": 12,
        "boxesOnShelf": 1
    },
    {
        "Product": "Dish Soap Durian",
        "Manufacturer": "Sapu",
        "J": 72,
        "numInBox": 12,
        "boxesOnShelf": 6
    },
    {
        "Product": "Toiletpaper",
        "Manufacturer": "Bidet",
        "J": 68,
        "numInBox": 4,
        "boxesOnShelf": 1
    },
    {
        "Product": "Coffee Medium Roast",
        "Manufacturer": "Narvalo",
        "J": 113,
        "numInBox": 8,
        "boxesOnShelf": 6
    },
    {
        "Product": "Soda",
        "Manufacturer": "JusTsistu",
        "J": 95,
        "numInBox": 24,
        "boxesOnShelf": 2
    },
    {
        "Product": "Soda",
        "Manufacturer": "Kouje",
        "J": 96,
        "numInBox": 24,
        "boxesOnShelf": 2
    },
    {
        "Product": "Soda",
        "Manufacturer": "Pulp",
        "J": 97,
        "numInBox": 24,
        "boxesOnShelf": 2
    },
    {
        "Product": "Soda",
        "Manufacturer": "Ropico",
        "J": 98,
        "numInBox": 24,
        "boxesOnShelf": 2
    },
    {
        "Product": "Sugar Light Brown",
        "Manufacturer": "Daron",
        "J": 32,
        "numInBox": 12,
        "boxesOnShelf": 6
    },
    {
        "Product": "Galette Ham & Cheese",
        "Manufacturer": "Prypiat",
        "J": 24,
        "numInBox": 24,
        "boxesOnShelf": 2
    },
    {
        "Product": "Ground Beef",
        "Manufacturer": "Bovora",
        "J": 41,
        "numInBox": 20,
        "boxesOnShelf": 6
    },
    {
        "Product": "Ham Pastry",
        "Manufacturer": "Ronpoint",
        "J": 22,
        "numInBox": 24,
        "boxesOnShelf": 2
    },
    {
        "Product": "Ham",
        "Manufacturer": "B&K",
        "J": 42,
        "numInBox": 20,
        "boxesOnShelf": 6
    },
    {
        "Product": "Lasagne",
        "Manufacturer": "Ronpoint",
        "J": 23,
        "numInBox": 24,
        "boxesOnShelf": 2
    },
    {
        "Product": "Proscuito",
        "Manufacturer": "Sapore",
        "J": 26,
        "numInBox": 20,
        "boxesOnShelf": 6
    },
    {
        "Product": "Chicken Leg",
        "Manufacturer": "Bovora",
        "J": 43,
        "numInBox": 16,
        "boxesOnShelf": 6
    },
    {
        "Product": "Green Beans",
        "Manufacturer": "MrBean",
        "J": 79,
        "numInBox": 12,
        "boxesOnShelf": 2
    },
    {
        "Product": "Icecream Vanilla",
        "Manufacturer": "MaxiCone",
        "J": 7,
        "numInBox": 24,
        "boxesOnShelf": 2
    },
    {
        "Product": "Icecream",
        "Manufacturer": "Bonbek",
        "J": 5,
        "numInBox": 24,
        "boxesOnShelf": 2
    },
    {
        "Product": "Pizza",
        "Manufacturer": "Bigtony",
        "J": 61,
        "numInBox": 32,
        "boxesOnShelf": 2
    },
    {
        "Product": "Potato Pops",
        "Manufacturer": "Spok",
        "J": 57,
        "numInBox": 12,
        "boxesOnShelf": 2
    },
    {
        "Product": "Veggie Mix",
        "Manufacturer": "Ege",
        "J": 80,
        "numInBox": 12,
        "boxesOnShelf": 2
    },
    {
        "Product": "Beer Blonde Ale",
        "Manufacturer": "BK",
        "J": 89,
        "numInBox": 15,
        "boxesOnShelf": 9
    },
    {
        "Product": "Beer Lager - 6 Pack",
        "Manufacturer": "Teochew",
        "J": 85,
        "numInBox": 18,
        "boxesOnShelf": 2
    },
    {
        "Product": "Beer Lager - Keg",
        "Manufacturer": "Teochew",
        "J": 86,
        "numInBox": 6,
        "boxesOnShelf": 1
    },
    {
        "Product": "Vodka",
        "Manufacturer": "Magnat",
        "J": 82,
        "numInBox": 12,
        "boxesOnShelf": 2
    },
    {
        "Product": "Whiskey",
        "Manufacturer": "Grand Marnier",
        "J": 83,
        "numInBox": 12,
        "boxesOnShelf": 2
    },
    {
        "Product": "Wine",
        "Manufacturer": "Chebon",
        "J": 91,
        "numInBox": 12,
        "boxesOnShelf": 2
    },
    {
        "Product": "Cheese Parmesan",
        "Manufacturer": "Eros",
        "J": 37,
        "numInBox": 9,
        "boxesOnShelf": 6
    },
    {
        "Product": "Cheese",
        "Manufacturer": "Gruyere",
        "J": 38,
        "numInBox": 9,
        "boxesOnShelf": 6
    },
    {
        "Product": "Clotted Cream",
        "Manufacturer": "Etron",
        "J": 108,
        "numInBox": 16,
        "boxesOnShelf": 2
    },
    {
        "Product": "Pasta Penne",
        "Manufacturer": "Parillo",
        "J": 122,
        "numInBox": 8,
        "boxesOnShelf": 2
    },
    {
        "Product": "Rice",
        "Manufacturer": "UncleTony's",
        "J": 50,
        "numInBox": 10,
        "boxesOnShelf": 6
    },
    {
        "Product": "Sugar Cane",
        "Manufacturer": "Daron",
        "J": 31,
        "numInBox": 12,
        "boxesOnShelf": 2
    },
    {
        "Product": "Yoghurt",
        "Manufacturer": "Madone",
        "J": 56,
        "numInBox": 30,
        "boxesOnShelf": 6
    },
    {
        "Product": "Cleaner",
        "Manufacturer": "Wesh",
        "J": 65,
        "numInBox": 12,
        "boxesOnShelf": 2
    },
    {
        "Product": "Dishwasher Tablet",
        "Manufacturer": "Cemagik",
        "J": 58,
        "numInBox": 8,
        "boxesOnShelf": 1
    },
    {
        "Product": "Dish Soap Lemon",
        "Manufacturer": "Mouss",
        "J": 73,
        "numInBox": 12,
        "boxesOnShelf": 6
    },
    {
        "Product": "Fabric Softener",
        "Manufacturer": "Souplesse",
        "J": 70,
        "numInBox": 12,
        "boxesOnShelf": 1
    },
    {
        "Product": "Book",
        "Manufacturer": "ABC",
        "J": 129,
        "numInBox": 8,
        "boxesOnShelf": 6
    },
    {
        "Product": "Book",
        "Manufacturer": "Colors",
        "J": 130,
        "numInBox": 8,
        "boxesOnShelf": 6
    },
    {
        "Product": "Book",
        "Manufacturer": "Donnine",
        "J": 131,
        "numInBox": 8,
        "boxesOnShelf": 6
    },
    {
        "Product": "Book",
        "Manufacturer": "Electromagnetic Field",
        "J": 132,
        "numInBox": 8,
        "boxesOnShelf": 6
    },
    {
        "Product": "Book",
        "Manufacturer": "I Won't Share",
        "J": 133,
        "numInBox": 8,
        "boxesOnShelf": 6
    },
    {
        "Product": "Book",
        "Manufacturer": "Mother And Child",
        "J": 134,
        "numInBox": 8,
        "boxesOnShelf": 6
    },
    {
        "Product": "Cleaner",
        "Manufacturer": "Le Triangle",
        "J": 66,
        "numInBox": 12,
        "boxesOnShelf": 6
    },
    {
        "Product": "Cat Food",
        "Manufacturer": "Miaoumiam",
        "J": 99,
        "numInBox": 12,
        "boxesOnShelf": 2
    },
    {
        "Product": "Cat Food",
        "Manufacturer": "Patpat",
        "J": 100,
        "numInBox": 12,
        "boxesOnShelf": 2
    },
    {
        "Product": "Dog Food",
        "Manufacturer": "Patpat",
        "J": 101,
        "numInBox": 16,
        "boxesOnShelf": 1
    },
    {
        "Product": "Cake",
        "Manufacturer": "Gerbe",
        "J": 139,
        "numInBox": 15,
        "boxesOnShelf": 6
    },
    {
        "Product": "Cake",
        "Manufacturer": "Marbre",
        "J": 140,
        "numInBox": 18,
        "boxesOnShelf": 6
    },
    {
        "Product": "Chips",
        "Manufacturer": "Vin's",
        "J": 18,
        "numInBox": 16,
        "boxesOnShelf": 2
    },
    {
        "Product": "Chocolate Spread",
        "Manufacturer": "Patatartine",
        "J": 0,
        "numInBox": 12,
        "boxesOnShelf": 6
    },
    {
        "Product": "Soda Can - 6 Pack",
        "Manufacturer": "Cola",
        "J": 135,
        "numInBox": 24,
        "boxesOnShelf": 1
    },
    {
        "Product": "Soda Can - 6 Pack",
        "Manufacturer": "Zap",
        "J": 136,
        "numInBox": 24,
        "boxesOnShelf": 1
    },
    {
        "Product": "Bottled Water",
        "Manufacturer": "Fort-lacs",
        "J": 128,
        "numInBox": 16,
        "boxesOnShelf": 2
    },
    {
        "Product": "Fabric Softener",
        "Manufacturer": "Toudou",
        "J": null,
        "numInBox": 12,
        "boxesOnShelf": 1
    },
    {
        "Product": "Paper Towel",
        "Manufacturer": "Compact",
        "J": null,
        "numInBox": 4,
        "boxesOnShelf": 1
    },
    {
        "Product": "Toiletpaper",
        "Manufacturer": "Petus",
        "J": null,
        "numInBox": 4,
        "boxesOnShelf": 1
    },
    {
        "Product": "Toothpaste",
        "Manufacturer": "Signoulos",
        "J": null,
        "numInBox": 24,
        "boxesOnShelf": 9
    },
    {
        "Product": "Book",
        "Manufacturer": "Krok",
        "J": null,
        "numInBox": 8,
        "boxesOnShelf": 6
    },
    {
        "Product": "Book",
        "Manufacturer": "Once Upon A Time",
        "J": null,
        "numInBox": 8,
        "boxesOnShelf": 6
    },
    {
        "Product": "Book",
        "Manufacturer": "Piticha",
        "J": null,
        "numInBox": 8,
        "boxesOnShelf": 6
    },
    {
        "Product": "Book",
        "Manufacturer": "The Surprise",
        "J": null,
        "numInBox": 8,
        "boxesOnShelf": 6
    },
    {
        "Product": "Book",
        "Manufacturer": "Vintage Storybook",
        "J": null,
        "numInBox": 8,
        "boxesOnShelf": 6
    },
    {
        "Product": "Book",
        "Manufacturer": "Wombat",
        "J": null,
        "numInBox": 8,
        "boxesOnShelf": 6
    },
    {
        "Product": "Cake",
        "Manufacturer": "Prairie",
        "J": null,
        "numInBox": 18,
        "boxesOnShelf": 6
    },
    {
        "Product": "Cake",
        "Manufacturer": "St Michmich",
        "J": null,
        "numInBox": 15,
        "boxesOnShelf": 6
    },
    {
        "Product": "Chocolate Bar",
        "Manufacturer": "Denorme",
        "J": null,
        "numInBox": 12,
        "boxesOnShelf": 6
    },
    {
        "Product": "Chocolate Powder",
        "Manufacturer": "Boudain",
        "J": null,
        "numInBox": 16,
        "boxesOnShelf": 6
    },
    {
        "Product": "Sugar",
        "Manufacturer": "Daron",
        "J": null,
        "numInBox": 12,
        "boxesOnShelf": 6
    },
    {
        "Product": "Yoghurt",
        "Manufacturer": "Yowp",
        "J": null,
        "numInBox": 30,
        "boxesOnShelf": 9
    },
    {
        "Product": "Beer Blonde Ale - 6 Pack",
        "Manufacturer": "BK",
        "J": null,
        "numInBox": 18,
        "boxesOnShelf": 2
    },
    {
        "Product": "Beer Blonde Ale - Keg",
        "Manufacturer": "Dehl",
        "J": null,
        "numInBox": 6,
        "boxesOnShelf": 1
    },
    {
        "Product": "Whiskey",
        "Manufacturer": "Jack Sublett",
        "J": null,
        "numInBox": 12,
        "boxesOnShelf": 2
    },
    {
        "Product": "Whiskey",
        "Manufacturer": "Japanese",
        "J": null,
        "numInBox": 12,
        "boxesOnShelf": 2
    },
    {
        "Product": "Wine",
        "Manufacturer": "Heng",
        "J": null,
        "numInBox": 12,
        "boxesOnShelf": 2
    },
    {
        "Product": "Wine",
        "Manufacturer": "Pouilleux",
        "J": null,
        "numInBox": 12,
        "boxesOnShelf": 2
    }
]