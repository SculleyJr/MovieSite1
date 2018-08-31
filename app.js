

function getMovie() {
    const xhr = new XMLHttpRequest();
  
    xhr.open("GET", "http://localhost:58815/api/Movies", true);
  
    xhr.onload = function() {
      if (this.status === 200) {
        // console.log(this.responseText);
  
        let output = "";
  
        const movie = JSON.parse(this.responseText);
        movie.forEach(element => {

           
          output =
            output +
            `
          
            <ul><li>${element.Name}</li></ul>
                
               
           
    
                `;
        });
  
        document.getElementById("movie").innerHTML = output;
      }
    };
  
    xhr.send();
  }


function getCategory() {
    const xhr = new XMLHttpRequest();
  
    xhr.open("GET", "http://localhost:58815/api/Movies", true);
  
    xhr.onload = function() {
      if (this.status === 200) {
        // console.log(this.responseText);
  
        let output = "";
        let cat = document.querySelector('.search-bar').value;
  
        const movie = JSON.parse(this.responseText);
        movie.forEach(element => {

            if(element.Category === cat )
          output =
            output +
            `
          
            <ul><li>${element.Name}</li></ul>
                
               
           
    
                `;
        });
  
        document.getElementById("movie").innerHTML = output;
      }
    };
  
    xhr.send();
  }





// function getCategories() {
 
//     let test = "";

//     fetch('http://localhost:58815/api/Movies')
//     .then(req => req.json()) 
//     .then(res => {
//       res.forEach(movie => {
//           if(movie.Category === "Comedy"){
//               test = test + 
//               `
//               <li>${movie.Name}

//               `
//           }


//       })
//       document.getElementById("categories").innerHTML = test;
//   });
// }
  
  // function getMovie() {
  //   fetch(`http://localhost:58815/api/Movies`)
  //     .then(req => req.json())
  //     .then(res => {
  //       console.log(res);
  //     });
  // }







