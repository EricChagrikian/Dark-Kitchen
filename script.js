<<<<<<< HEAD
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
=======
let bouffe = [
{
    Name : "Menu Medium Big Burger" ,
    Ingredient : "800gr de boeuf , 300gr de poulet et 250gr de bacon" ,
    Accompagnement : "2 kilos de frites cheddar, Menu Large = 3 kilos" ,
    Sauce : ["BBQ, " ,  "Biggy, " , "Mayo, " , "Ketchup, " , "Andalouse, " , "Samourai, " , "Sauce Carbonara"] ,
    Boissons : "5 litres de Powerade " , "10 litres pour le large" ,
    Prix : 15000,
    Size : 2000 
}
{
    Name : "Menu Mini Medium Big Burger X6" ,
    Ingredient : "800gr de boeuf , 300gr de poulet et 250gr de bacon" ,
    Accompagnement : "2 kilos de frites cheddar, Menu Large = 3 kilos" ,
    Sauce : ["BBQ, " ,  "Biggy, " , "Mayo, " , "Ketchup, " , "Andalouse, " , "Samourai, " , "Sauce Carbonara"] ,
    Boissons : "5 litres de Powerade " , "10 litres pour le large" ,
    Prix : 16000,
    Size : 2500 
}
{
    Name : "Medium Maxi Tacos" , 
    Ingredient : "Choisis 8 parmis: Poulet mariné, Viande hachée, Cordon Bleu, Tenders, Nuggets, Fricadelle, Falafel, Kebab, Merguez, Bacon, Fish Stick",
    Accompagnement : "2 kilos de frites cheddar, Menu Large = 3 kilos" ,
    Sauce : ["BBQ, " ,  "Biggy, " , "Mayo, " , "Ketchup, " , "Andalouse, " , "Samourai, " , "Sauce Carbonara"] ,
    Boissons : "5 litres de Powerade " ,
    Prix : 17000,

}
{
    Name : "Maxi Maxi Tacos" , 
    Ingredient : "Choisis 10 parmis: Poulet mariné, Viande hachée, Cordon Bleu, Tenders, Nuggets, Fricadelle, Falafel, Kebab, Merguez, Bacon, Fish Stick",
    Accompagnement : "2 kilos de frites cheddar, Menu Large = 3 kilos" ,
    Sauce : ["BBQ, " ,  "Biggy, " , "Mayo, " , "Ketchup, " , "Andalouse, " , "Samourai, " , "Sauce Carbonara"] ,
    Boissons : "10 litres de Powerade" ,
    Prix : 20000,
}
{
    Name : "Ramen Tacos " , 
    Ingredient : "Ramen , Tortilla", 
    Accompagnement: "Ramen", 
    Sauce : "Soja" ,
    Boissons : "10 litres de Powerade" , 
    Prix : 23000,
    Size : "3 metrès de Tacos"
}
{
    Name : "Big Boy Pizza",
    Ingredient : "Viande hachée , Fromage", 
    Accompagnement : " 2 kilos Bread Sticks",
    Sauce : "Tomate" , 
    Boissons : "10 litres de Powerade" , 
    Prix : 17000,
    Size : "8 mètres de Diamètre"
}
{
    
}

]
>>>>>>> d2906d592b29fdcd538034620f5018bc12268c14
