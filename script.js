let bouffe = [
    {
        Name : "Menu Medium Big Burger" ,
        category: "Burger",
        Ingredient : "800gr de boeuf , 300gr de poulet et 250gr de bacon" ,
        Accompagnement : "2 kilos de frites cheddar" ,
        Sauce : ["BBQ, " ,  "Biggy, " , "Mayo, " , "Ketchup, " , "Andalouse, " , "Samourai, " , "Sauce Carbonara"] ,
        Boissons : "5 litres de Powerade " ,
        Prix : 15000,
        Size : "Minimum 1,5 Kg",
    }
    ,
    { 
        Name : "Menu Mini Big Burger X6" ,
        category: "Burger",
        Ingredient : "800gr de boeuf , 300gr de poulet et 250gr de bacon" ,
        Accompagnement : "3 kilos de frites cheddar" ,
        Sauce : ["BBQ, " ,  "Biggy, " , "Mayo, " , "Ketchup, " , "Andalouse, " , "Samourai, " , "Sauce Carbonara"] ,
        Boissons : "10 litres de Powerade " , 
        Prix : 16000,
        Size : "6 minis burger qui regroupé font 1,5kg" ,
    }
    ,
    {
        Name : "Medium Maxi Tacos" , 
        category: "Tacos",
        Ingredient : "Choisis 8 parmis: Poulet mariné, Viande hachée, Cordon Bleu, Tenders, Nuggets, Fricadelle, Falafel, Kebab, Merguez, Bacon, Fish Stick",
        Accompagnement : "2 kilos de frites cheddar" ,
        Sauce : ["BBQ, " ,  "Biggy, " , "Mayo, " , "Ketchup, " , "Andalouse, " , "Samourai, " , "Sauce Carbonara"] ,
        Boissons : "5 litres de Powerade " ,
        Prix : 17000,
    
    }
    ,
    {
        Name : "Maxi Maxi Tacos" , 
        category: "Tacos",
        Ingredient : "Choisis 10 parmis: Poulet mariné, Viande hachée, Cordon Bleu, Tenders, Nuggets, Fricadelle, Falafel, Kebab, Merguez, Bacon, Fish Stick",
        Accompagnement : "3 kilos Frites cheddar" ,
        Sauce : ["BBQ, " ,  "Biggy, " , "Mayo, " , "Ketchup, " , "Andalouse, " , "Samourai, " , "Sauce Carbonara"] ,
        Boissons : "10 litres de Powerade" ,
        Prix : 20000,
    }
    ,
    {
        Name : "Ramen Tacos " , 
        category: ["Tacos" , "Asiatique"],
        Ingredient : "Ramen , Tortilla", 
        Accompagnement: "Ramen", 
        Sauce : "Soja" ,
        Boissons : "10 litres de Powerade" , 
        Prix : 23000,
        Size : "3 metrès de Tacos",
    }
    ,
    {
        Name : "Big Boy Pizza",
        category: "Pizza",
        Ingredient : "Viande hachée , Fromage", 
        Accompagnement : " 2 kilos Bread Sticks",
        Sauce : "Tomate" , 
        Boissons : "10 litres de Powerade" , 
        Prix : 17000,
        Size : "8 mètres de Diamètre",
    }
    ,
    {
        Name : "Menu Sushi Sauvage",
        category: "Asiatique",
        Ingredient : "Riz et Saumon" ,
        Accompagnement : "Wasabi et Gingembre" ,
        Sauce : "Soja" ,
        Prix : 15000 ,
        Size : "Menu 12 Sushi",
    
    }
    ,
    {
        Name : "Big Boy Milkshake",
        category: "Déssert",
        Ingredient : ["Kinder bueno, " , "Nutella, " , "Ferrero Rocher, " , "Kinder Country," , "Kinder Delice," , "Oreo," , "Kitkat," , "M&ms" ] ,
        Accompagnement : "5 litres de lait" ,
        Prix : 5000,
    }
    ,
    {
        Name : "Tiramisu Bang Bang" ,
        category: "Déssert",
        Ingredient : ["Mascarpone," , "Café," , "Speculoos," , "Oreo," , "Kinder Bueno," , "Nutella," ] ,
        Accompagnement : "Coulis de framboise" , 
        Prix : 7500 ,
        Size : "4 Kilos",
    }
    ]



const main = document.querySelector('main')

for (let i=0;i<bouffe.length;i++) {
    console.log(bouffe[i].name)

    const article = document.createElement('article')
    article.className = 'card'
    main.appendChild(article)
    const vidp = document.createElement('img')
    vidp.innerHTML = collection[i].image
    vidp.className = 'videopreview'
    article.appendChild(vidp)

    const category = document.createElement('div')
    category.className = "categories"
    article.appendChild(category)

    const title = document.createElement('h1')
    title.innerText = collection[i].name
    article.appendChild(title)

    const performers = document.createElement('h2')
    performers.innerText = collection[i].performer
    article.appendChild(performers)

    const genres = document.createElement('p')
    genres.innerHTML = collection[i].genre
    genres.className = 'genres'
    category.appendChild(genres)

    const periods = document.createElement('p')
    periods.innerHTML = collection[i].period
    periods.className = 'periods'
    category.appendChild(periods)

    const ul = document.createElement('ul')
    article.appendChild(ul)

    const li = document.createElement('li')
    ul.appendChild(li)
    li.innerHTML = collection[i].composer

    const li2 = document.createElement('li')
    ul.appendChild(li2)
    li2.innerHTML = collection[i].instrument
  
    const a = document.createElement('a')
    article.appendChild(a)
    a.href = collection[i].link

    const img = document.createElement('img')
    a.appendChild(img)
    
}
