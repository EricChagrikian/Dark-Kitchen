let bouffe = [
    {
        Name : "Menu Medium Big Burger" ,
        category: "Burger",
        Ingredient : "800gr de boeuf , 300gr de poulet et 250gr de bacon" ,
        Accompagnement : "2 kilos de frites cheddar" ,

        Sauce : ["BBQ" ,  " Biggy" , " Mayo" , " Ketchup" , " Andalouse" , " Samourai" , " Sauce Carbonara"] ,
        Boissons : "5 litres de Powerade " ,
        itemPrice: "$15000",
        Size : "Minimum 1,5 Kg",
        picture : "./img/burger.jpeg",
        bouton : "Add To Tata's" ,

    }
    ,
    { 
        Name : "Menu Mini Big Burger X6" ,
        category: "Burger",
        Ingredient : "800gr de boeuf , 300gr de poulet et 250gr de bacon" ,
        Accompagnement : "3 kilos de frites cheddar" ,

        Sauce : ["BBQ" ,  " Biggy" , " Mayo" , " Ketchup" , " Andalouse" , " Samourai" , " Sauce Carbonara"] ,
        Boissons : "10 litres de Powerade " , 
        itemPrice: "$16000",
        Size : "6 minis burger qui regroupé font 1,5kg" ,
        picture : "./img/miniburger.jpeg",
        bouton : "Add To Tata's" ,
    }
    ,
    {
        Name : "Medium Maxi Tacos" , 
        category: "Tacos",
        Ingredient : "Choisis 8 parmis: Poulet mariné, Viande hachée, Cordon Bleu, Tenders, Nuggets, Fricadelle, Falafel, Kebab, Merguez, Bacon, Fish Stick",
        Accompagnement : "2 kilos de frites cheddar" ,

        Sauce : ["BBQ" ,  " Biggy" , " Mayo" , " Ketchup" , " Andalouse" , " Samourai" , " Sauce Carbonara"] ,
        Boissons : "5 litres de Powerade " ,
        itemPrice: "$17000",
        picture : "./img/tacos.jpeg",
        Size : "",
        bouton : "Add To Tata's" ,

    
    }
    ,
    {
        Name : "Maxi Maxi Tacos" , 
        category: "Tacos",
        Ingredient : "Choisis 10 parmis: Poulet mariné, Viande hachée, Cordon Bleu, Tenders, Nuggets, Fricadelle, Falafel, Kebab, Merguez, Bacon, Fish Stick",
        Accompagnement : "3 kilos Frites cheddar" ,

        Sauce : ["BBQ" ,  " Biggy" , " Mayo" , " Ketchup" , " Andalouse" , " Samourai" , " Sauce Carbonara"] ,
        Boissons : "10 litres de Powerade" ,
        picture : "./img/Gigatacos.jpeg",
        itemPrice: "$20000",
        Size : "",
        bouton : "Add To Tata's" ,

    }
    ,
    {
        Name : "Ramen Tacos " , 
        category: ["Tacos" , "Asiatique"],
        Ingredient : "Ramen , Tortilla", 
        Accompagnement: "Ramen", 
        Sauce : "Soja" ,
        Boissons : "10 litres de Powerade" , 
        itemPrice: "$23000",
        Size : "3 metrès de Tacos",
        picture : "./img/ramentacos.jpg",
        bouton : "Add to Tata's" ,

    }
    ,
    {
        Name : "Big Boy Pizza",
        category: "Pizza",
        Ingredient : "Viande hachée , Fromage", 
        Accompagnement : " 2 kilos Bread Sticks",
        Sauce : "Tomate" , 
        Boissons : "10 litres de Powerade" , 
        itemPrice: "$17000",
        Size : "8 mètres de Diamètre",
        picture : "./img/pizza.jpeg",
        bouton : "Add To Tata's" ,

    }
    ,
    {
        Name : "Menu Sushi Sauvage",
        category: "Asiatique",
        Ingredient : "Riz et Saumon" ,
        Sauce : "Soja" ,
        itemPrice: "$15000",
        Size : "Menu 12 Sushi",
        picture : "./img/sushi.jpeg",
        bouton : "Add To Tata's" ,

    
    }
    ,
    {
        Name : "Big Boy Milkshake",
        category: "Déssert",
        Ingredient : ["Kinder bueno" , " Nutella" , " Ferrero Rocher" , " Kinder Country" , " Kinder Delice" , " Oreo" , " Kitkat" , " M&ms" ] ,
        itemPrice: "$5000",
        picture : "./img/milkshake.jpeg",
        Size : "",
        Boissons : "" ,
        Sauce : "",
        bouton : "Add To Tata's" ,
    }
    ,
    {
        Name : "Tiramisu Bang Bang" ,
        category: "Déssert",
        Ingredient : ["Mascarpone" , " Café" , " Speculoos" , " Oreo" , " Kinder Bueno" , " Nutella" ] ,
        itemPrice: "$6000",
        Size : "4 Kilos",
        picture : "./img/tiramisu.jpeg", 
        Boissons : "",
        Sauce : "",
        bouton : "Add To Tata's" ,
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

    const Ingredient = document.createElement('p')
    Ingredient.innerHTML = bouffe[i].Ingredient
    Ingredient.className = 'Ingredient'
    category.appendChild(Ingredient)

    const itemPrice = document.createElement('p')
    itemPrice.innerHTML = bouffe[i].itemPrice
    itemPrice.className = 'itemPrice'
    category.appendChild(itemPrice)

    const Sauce = document.createElement('p')
    Sauce.innerHTML = bouffe[i].Sauce 
    Sauce.className = 'Sauce'
    category.appendChild(Sauce)

    const Size = document.createElement('p')
    Size.innerHTML = bouffe[i].Size
    Size.className = 'Size'
    category.appendChild(Size)

    const bouton= document.createElement('a')
    bouton.innerHTML = bouffe[i].bouton
    bouton.className = 'bouton'
    category.appendChild(bouton)

}
let addToCartButtons = document.getElementsByClassName('bouton')
let cartContainer = document.getElementsByTagName('tbody')[0]
let quantityFields = document.getElementsByClassName('num')
let delete_buttons = document.getElementsByClassName('uk-button-danger')


for(let i = 0; i < addToCartButtons.length; i++){
    addToCartButtons[i].addEventListener('click', addToCart)
    
}


function addToCart(event){

    
    let itemContainer = document.createElement('tr')
    let btn = event.target
    let btnGrandParent = btn.parentElement.parentElement
    let btnParent = btn.parentElement
    let itemImage = btnGrandParent.children[0].src
    let itemName = btnParent.children[0].innerText
    let itemPrice = btnParent.children[1].innerText
    
    
    itemContainer.innerHTML = `
    <td><input class="uk-checkbox" type="checkbox"></td>
    <td><img class="uk-preserve-width uk-border-circle" src=${itemImage} width="40" alt=""></td>
    <td class="uk-table-link">
        <h3 class = "item-name">${itemName}</h3>
    </td>
    <td class="uk-text-truncate item-price"><h3>${itemPrice}</h3></td>
    <td><input type = 'number' class = 'num' value = '1'></td>
    <td class="uk-text-truncate total-price"><h3>${itemPrice}</h3></td>
    <td><button class="uk-button uk-button-danger" type="button">Remove</button></td>
`

    cartContainer.append(itemContainer)




    // Accessing individual quantity fields
    for(let i = 0; i < quantityFields.length; i++){
        quantityFields[i].value = 1
        quantityFields[i].addEventListener('change', totalCost)
                
    }

    // Accessing individual quantity fields
    for(let i = 0; i < delete_buttons.length; i++){
        delete_buttons[i].addEventListener('click', removeItem)
    }

    grandTotal()

   
}



// This function helps to multiply the quantity and the price
function totalCost(event){
    let quantity = event.target
    quantity_parent = quantity.parentElement.parentElement
    price_field = quantity_parent.getElementsByClassName('itemPrice')[0]
    total_field = quantity_parent.getElementsByClassName('total-price')[0]
    price_field_content = price_field.innerText.replace('$', '')
    total_field.children[0].innerText = '$' +  quantity.value * price_field_content
    grandTotal()
    if(isNaN(quantity.value)|| quantity.value <= 0){
        quantity.value = 1
    }

    
    
}

// This function helps to add up the total of the items
function grandTotal(){
    let total = 0
    let grand_total = document.getElementsByClassName('grand-total')[0]
    all_total_fields = document.getElementsByClassName('total-price')
    for(let i = 0; i < all_total_fields.length; i++){
        all_prices = Number(all_total_fields[i].innerText.replace('$', ''))
        total+=all_prices
    }
    grand_total.children[0].innerText = "$"+total
    grand_total.children[0].style.fontWeight = 'bold'
    console.log(total)
}


function removeItem(event){
    del_btn = event.target
    del_btn_parent = del_btn.parentElement.parentElement
    del_btn_parent.remove()
    console.log(del_btn)
    grandTotal()
    
}
function darkMode() {
var element = document.body;
element.classList.toggle("darkMode");

}