let bouffe = [
    {
        Name : "Menu Medium Big Burger" ,
        category: "Burger",
        Ingredient : "800gr de boeuf , 300gr de poulet et 250gr de bacon" ,
        Accompagnement : "2 kilos de frites cheddar" ,

        Sauce : ["BBQ" ,  " Biggy" , " Mayo" , " Ketchup" , " Andalouse" , " Samourai" , " Sauce Carbonara"] ,
        Boissons : "5 litres de Powerade " ,
        Prix : 15000,
        Size : "Minimum 1,5 Kg",
        picture : "./img/burger.jpeg"

    }
    ,
    { 
        Name : "Menu Mini Big Burger X6" ,
        category: "Burger",
        Ingredient : "800gr de boeuf , 300gr de poulet et 250gr de bacon" ,
        Accompagnement : "3 kilos de frites cheddar" ,

        Sauce : ["BBQ" ,  " Biggy" , " Mayo" , " Ketchup" , " Andalouse" , " Samourai" , " Sauce Carbonara"] ,
        Boissons : "10 litres de Powerade " , 
        Prix : 16000,
        Size : "6 minis burger qui regroupé font 1,5kg" ,
        picture : "./img/miniburger.jpeg"
    }
    ,
    {
        Name : "Medium Maxi Tacos" , 
        category: "Tacos",
        Ingredient : "Choisis 8 parmis: Poulet mariné, Viande hachée, Cordon Bleu, Tenders, Nuggets, Fricadelle, Falafel, Kebab, Merguez, Bacon, Fish Stick",
        Accompagnement : "2 kilos de frites cheddar" ,

        Sauce : ["BBQ" ,  " Biggy" , " Mayo" , " Ketchup" , " Andalouse" , " Samourai" , " Sauce Carbonara"] ,
        Boissons : "5 litres de Powerade " ,
        Prix : 17000,
        picture : "./img/tacos.jpeg",
        Size : ""

    
    }
    ,
    {
        Name : "Maxi Maxi Tacos" , 
        category: "Tacos",
        Ingredient : "Choisis 10 parmis: Poulet mariné, Viande hachée, Cordon Bleu, Tenders, Nuggets, Fricadelle, Falafel, Kebab, Merguez, Bacon, Fish Stick",
        Accompagnement : "3 kilos Frites cheddar" ,

        Sauce : ["BBQ" ,  " Biggy" , " Mayo" , " Ketchup" , " Andalouse" , " Samourai" , " Sauce Carbonara"] ,
        Boissons : "10 litres de Powerade" ,
        Prix : 20000,
        picture : "./img/Gigatacos.jpeg",
        Size : ""

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
        picture : "./img/ramentacos.jpg"

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
        picture : "./img/pizza.jpeg"

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
        picture : "./img/sushi.jpeg"

    
    }
    ,
    {
        Name : "Big Boy Milkshake",
        category: "Déssert",

        Ingredient : ["Kinder bueno" , " Nutella" , " Ferrero Rocher" , " Kinder Country" , " Kinder Delice" , " Oreo" , " Kitkat" , " M&ms" ] ,
        Accompagnement : "5 litres de lait" ,
        Prix : 5000,
        picture : "./img/milkshake.jpeg",
        Size : "",
        Boissons : "" ,
        Sauce : ""
    }
    ,
    {
        Name : "Tiramisu Bang Bang" ,
        category: "Déssert",
        Ingredient : ["Mascarpone" , " Café" , " Speculoos" , " Oreo" , " Kinder Bueno" , " Nutella" ] ,
        Accompagnement : "Coulis de framboise" , 
        Prix : 7500 ,
        Size : "4 Kilos",
        picture : "./img/tiramisu.jpeg", 
        Boissons : "",
        Sauce : ""
    }
    ]



const cards = document.querySelector('.cards')

for (let i=0;i<bouffe.length;i++) {
    console.log(bouffe[i].Name)

    const article = document.createElement('article')
    article.className = 'card'
    cards.appendChild(article)

    let img = document.createElement('img')
    img.src = bouffe[i].picture;
    article.appendChild(img)
    img.className = "img1"

    const title = document.createElement('h1')
    title.innerText = bouffe[i].Name
    article.appendChild(title)

    const category = document.createElement('div')
    category.className = "category"
    article.appendChild(category)

    

    const Accompagnement = document.createElement('h2')
    Accompagnement.innerText = bouffe[i].Accompagnement
    article.appendChild(Accompagnement)

    const Ingredient = document.createElement('p')
    Ingredient.innerHTML = bouffe[i].Ingredient
    Ingredient.className = 'Ingredient'
    category.appendChild(Ingredient)

    const Sauce = document.createElement('p')
    Sauce.innerHTML = bouffe[i].Sauce 
    Sauce.className = 'Sauce'
    category.appendChild(Sauce)

    const Size = document.createElement('p')
    Size.innerHTML = bouffe[i].Size
    Size.className = 'Size'
    category.appendChild(Size)

    const Prix = document.createElement('p')
    Prix.innerHTML = bouffe[i].Prix
    Prix.className = 'Prix'
    category.appendChild(Prix)

}
