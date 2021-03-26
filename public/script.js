const url = 'http://localhost:3000/rss/';

var noticias = [];

function newsletters(){
    fetch(url,
        {
        method: 'GET',
        })
        .then(response => response.json())
        .then(json => { 
            noticias = JSON.parse(JSON.stringify(json));
            var caja = document.getElementById("div");
            caja.innerHTML = "";
            
            for (let item of noticias.items){
                
                caja.innerHTML += `<div>
                                            <h3><a href="${item.link}">${item.title}</h3></a>
                                            <p id="content">${item.content}</p><br/>
                                            <p id= "datos">${item.pubDate}&nbsp&nbsp&nbsp&nbsp|&nbsp&nbsp&nbsp&nbspBY ${item.creator}</p>
                                    </div>`;
            }

        console.log(json)
        }) 
}