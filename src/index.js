/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

const url = 'https://platzi-avo.vercel.app';
const appNode = document.querySelector('#app')

const formatPrice = (price) =>{
    const newPrice = new window.Intl.NumberFormat("en-EN", {
        style: 'currency',
        currency: 'USD'
    }).format(price);
    return newPrice;
}

//web api
//Conectarnos al server
window.fetch(`${url}/api/avo`)
//Procesar la respuesta, y convertirla en JSON
    .then((respuesta) => respuesta.json())
//JSON -> Data -> Renderizar info browser
    .then((responseJson) => {
        const allItems = []
        responseJson.data.forEach(item => {
            //tomar la imagen
            const img = document.createElement('img');
            img.src = `${url}${item.image}`;
            img.style = 'margin: auto'

            //tomar el nombre
            const title = document.createElement('h2');
            title.textContent = item.name;
            title.style = 'color: green';
          
            //tomar el precio
            const price = document.createElement('p');
            price.textContent = formatPrice(item.price);
            price.className = "text-lg text-gray-500 mx-auto";
            
            //crear un contenedor para los items
            const container = document.createElement('div');
            container.append(img, title, price);
            
            //agregar el container al array general
            allItems.push(container);
        });
       
        appNode.append(...allItems)
    }) 
   

    
  



