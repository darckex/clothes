export const tempData = {
	categories: {
		3: { id: 3, name: "Suits", parentId: 1, season: 1 },
		4: { id: 4, name: "Hats", parentId: 2, season: 2 }
	},
	seasons: {
		1: { id: 1, name: "Spring" },
		2: { id: 2, name: "Summer" },
		3: { id: 3, name: "Winter" },
		4: { id: 4, name: "Autumn" }
	},
	products: {
		1: {
			id: 1,
			image: "1.jpg",
			name: "White floral dress",
			description: `Lorem ipsum dolor, sit amet consectetur adipisicing
			elit. Odio assumenda alias aliquid voluptatibus pariatur
			iste, consequatur, atque explicabo tenetur ut nulla
			omnis error incidunt sed dolores? Sed quas quod error!
			
			Lorem ipsum dolor, sit amet consectetur adipisicing
			elit. Odio assumenda alias aliquid voluptatibus pariatur
			iste, consequatur, atque explicabo tenetur ut nulla
			omnis error incidunt sed dolores? Sed quas quod error!
			`,
			price: 80.0,
			colors: ["white"],
			size: ["medium"],
			minOrder: 5,
			category: 2,
			topCategory: 1
		},
		2: {
			id: 2,
			image: "2.jpg",
			name: "White floral dress",
			price: 80.0,
			colors: ["white", "blue", "red"],
			size: ["medium"],
			minOrder: 5,
			category: 2,
			topCategory: 1
		},
		3: {
			id: 3,
			image: "3.jpg",
			name: "White floral dress",
			price: 80.0,
			colors: ["white"],
			size: ["medium"],
			minOrder: 5,
			category: 2,
			topCategory: 1
		},
		4: {
			id: 4,
			image: "4.jpg",
			name: "White floral dress",
			price: 80.0,
			colors: ["white"],
			size: ["medium"],
			minOrder: 5,
			category: 2,
			topCategory: 2
		},
		5: {
			id: 5,
			image: "5.jpg",
			name: "White floral dress",
			price: 80.0,
			colors: ["white"],
			size: ["medium"],
			minOrder: 5,
			category: 2,
			topCategory: 2
		}
	},
	cart: [
		{
			id: 2,
			quantity: 2,
			size: "medium",
			color: "red"
		}
	]
}
