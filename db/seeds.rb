mel = User.create(username: "melissafunk", password: "hello")

r1 = Recipe.create(user_id: 1, title: "Spam Musubi", image: "https://drivemehungry.com/wp-content/uploads/2022/07/spam-musubi-7.jpg", link: "https://drivemehungry.com/spam-musubi/#recipe", category: "Asian", ingredients: "Spam, Nori, Rice, Furikake, Soy Sauce, Sugar, Mirin")