const STORAGE_KEY = "recipes";

function initStorage() {
  let data = localStorage.getItem(STORAGE_KEY);
  if (!data) {
    const defaultRecipe = [
      {
        id: Date.now(),
        title: "Paneer Masala",
        description:
          "A flavorful paneer masala recipe cooked with aromatic Indian spices, suitable for 2 people.",
        ingredients: [
          [
            "200 grams paneer",
            "1 medium-sized onion",
            "1 medium-sized tomato",
            "1/2 cup fresh cream",
            "1 tsp ginger-garlic paste",
            "1 green chili",
            "8-10 fresh coriander leaves",
          ],
          [
            "1/2 tsp red chili powder",
            "1/4 tsp turmeric powder",
            "1 tsp garam masala powder",
            "1 and 1/2 tsp salt",
            "1/2 tsp cumin powder",
          ],
          ["25 ml sunflower oil", "1/2 cup water"],
          [
            "Gas stove & lighter",
            "1 large spoon",
            "1 deep cooking pan",
            "1 small bowl for chopped vegetables",
            "1 chopping board and kitchen knife",
            "1 flat plate (as lid)",
          ],
        ],
        steps: [
          ["Place the chopping board on a clean, flat surface."],
          ["Chop onion, tomato, green chili, and coriander leaves and keep in small bowls."],
          ["Cut paneer into cubes and keep aside."],
          ["Place the deep cooking pan on the stove and turn on medium flame."],
          ["Add 25 ml sunflower oil into the pan and wait 20 seconds to heat."],
          ["Add chopped onions and sauté until golden brown."],
          ["Add ginger-garlic paste and sauté for 1-2 minutes."],
          ["Add chopped tomatoes and cook until soft and mushy."],
          ["Add powdered spices: red chili, turmeric, cumin, garam masala, and salt."],
          ["Mix well and cook for 2 minutes until oil separates from the masala."],
          ["Add paneer cubes and gently mix with the masala."],
          ["Add 1/2 cup water and fresh cream."],
          ["Simmer on low flame for 5-7 minutes."],
          ["Turn off the stove and garnish with coriander leaves."],
          ["Serve hot with roti or rice."],
        ],
        prep: 30,
        difficulty: "Medium",
        image:
          "https://images.pexels.com/photos/616404/pexels-photo-616404.jpeg",
      },

      {
        id: Date.now() + 1,
        title: "Maggi Masala Noodles",
        description: "A detailed step-by-step Maggi Masala noodles recipe for 2 people.",
        ingredients: [
          ["1 packet Maggi noodles (Approx. 150 gms)"],
          ["1 small onion"],
          ["1 small tomato"],
          ["1 small carrot"],
          ["1/4 cup green peas (fresh or frozen)"],
          ["1 green chili (optional)"],
          ["1 tsp chopped coriander leaves (for garnish)"],
          ["1 tsp oil"],
          ["1/4 tsp turmeric powder"],
          ["1/4 tsp red chili powder"],
          ["1/4 tsp salt (adjust to taste)"],
          ["1/2 tsp Maggi tastemaker masala (from the packet)"],
          ["1/2 cup water (approx. 125 ml)"],
          ["1 small frying pan or wok"],
          ["1 small spatula or spoon"],
          ["1 small chopping board"],
          ["1 small knife"],
          ["1 small bowl for onions"],
          ["1 small bowl for tomato"],
          ["1 small bowl for carrot"],
          ["1 small bowl for green peas"],
          ["1 small bowl for chopped green chili"],
          ["1 small bowl for chopped coriander leaves"]
        ],
        steps: [
          ["Place the chopping board on a flat, clean surface."],
          ["Place small bowls next to the chopping board for onion, tomato, carrot, green peas, green chili, and coriander leaves."],
          ["Peel and chop the onion into small pieces and keep in its bowl."],
          ["Wash and chop the tomato into small cubes and keep in its bowl."],
          ["Peel and chop the carrot into small cubes and keep in its bowl."],
          ["Wash the green peas and keep in the green peas bowl."],
          ["Wash, chop, and keep the green chili in its bowl (optional)."],
          ["Wash, chop, and keep coriander leaves in its bowl for garnish."],
          ["Place the frying pan or wok on the stove and turn on medium flame."],
          ["Add 1 tsp oil and wait 10-15 seconds until slightly heated."],
          ["Add chopped onions from the onion bowl and sauté for 2 minutes until translucent."],
          ["Add tomato, carrot, green peas, and green chili and cook for 2 minutes until slightly soft."],
          ["Add turmeric powder, red chili powder, and salt and mix well with the vegetables."],
          ["Pour 1/2 cup water into the pan and bring to a gentle boil."],
          ["Break the Maggi noodle cake into pieces and place in the boiling water."],
          ["Stir gently for 1-2 minutes to separate the noodles."],
          ["Add 1/2 tsp Maggi tastemaker masala from the packet and mix well."],
          ["Cook for 2-3 minutes until noodles soften and water is mostly absorbed."],
          ["Turn off the stove and remove the pan carefully."],
          ["Garnish with chopped coriander leaves."],
          ["Serve immediately, portioned for 2 people."]
        ],
        prep: 15,
        difficulty: "Easy",
        image: "https://images.pexels.com/photos/2347311/pexels-photo-2347311.jpeg"
      },

      
    ];

    localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultRecipe));
  }
}

initStorage();
