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