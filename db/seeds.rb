mel = User.create(username: "melissafunk", password: "hello", image: "https://avatars.githubusercontent.com/u/87447218?v=4")

r1 = Recipe.create(user_id: 1, name: "Test", image: "www.image.com", link: "www.link.com", cuisine: "Vegan", ingredients: "carrot, apple, lemon", date: "Mon2", cook_time: "20 min.", is_favorite: true, has_made: false)