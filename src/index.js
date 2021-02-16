let outerNode = document.getElementById("outer-node")

let header = outerNode.getElementsByTagName("h1")[0]

let container = document.getElementById("container")



memes.forEach( m => {
    let img = document.createElement("img")
    img.src = m
    container.append(img)
})


// memes.forEach( m => {
//     container.innerHTML += `<img src="${m}"></img>`
//  })