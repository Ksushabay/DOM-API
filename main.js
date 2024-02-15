const row =document.querySelector('.row');

fetch('https://restcountries.com/v3.1/all/')
    .then(date =>date.json())
    .then(result => {
        // console.log(result.slice(0,5))
        result.sort((a,b) =>{
            if (a.name.common.toUpperCase() > b.name.common.toUpperCase()) {
                return 1
            }else {
                return -1
            }
        }).map((el, idx) => {
            row.innerHTML += `
        <div class="block col-4">
        <h2>Аты: ${idx + 1}</h2>
        <img class="img" src="${el.flags.png}" alt="${el.flags.alt}">
        <h3>${el.name.common}</h3>
         <p>Калкынын саны:${el.population}m</p>
        <h4>Аянты:${el.area} km2</h4>
        <h5>Регион:${el.region}</h5>
       <h6>Континент:${el.continent}</h6>
        <a href=${el.maps.googleMaps}target="_blank">
        <button class="btn btn-info">Карта</button>
        
</a>           
        
</div>

`
        })

    })
