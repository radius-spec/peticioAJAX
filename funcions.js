
document.getElementById("actualitzar").addEventListener("click",function(){


    fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
  .then(response => response.json())
  .then(data => {console.log(data)
    document.getElementById("bitcoin").innerHTML=data.bpi.EUR.rate+" €"
  });

  
})


document.getElementById("novaBroma").addEventListener("click",function(){


    fetch('https://api.chucknorris.io/jokes/random')
  .then(response => response.json())
  .then(data => {console.log(data)
    document.getElementById("broma").innerHTML=data.value
  });

  
})

document.getElementById("nouUsuari").addEventListener("click", function(){
    
    fetch('https://randomuser.me/api')
    .then(response => response.json())
    .then(data => {console.log(data)
      document.getElementById("usuari").innerHTML=data.results[0].name.first
      document.getElementById("cognom").innerHTML=data.results[0].name.last
      document.getElementById("city").innerHTML=data.results[0].location.city
      document.getElementById("pais").innerHTML=data.results[0].location.country
      document.getElementById("foto").src=data.results[0].picture.thumbnail
      document.getElementById("edat").innerHTML=data.results[0].dob.age
      document.getElementById("mail").innerHTML=data.results[0].email
    });
})

