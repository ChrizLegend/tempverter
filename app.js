// const converter = document.querySelector('form')

// converter.addEventListener('submit', convert)
// function convert(event){
//     event.preventDefault()
    
//     // grab the figure the person wants to convert from census to Fahrenheit
//     let the_figure = Number(document.querySelector('input').value)
//     let ans = Number(the_figure * 9/5) + 32
//     if(the_figure === ''){
//         alert("oops! you have to enter a value")
//     }else{
//        ans
//     }

//     //target the divs element that will display the Result
//     document.querySelector(".input-info").innerHTML = the_figure
//     document.querySelector("output-info").innerHTML = ans

// }


const converter = document.querySelector("form");

converter.addEventListener("submit", convert);

function convert(event) {
  event.preventDefault();

  let the_figure = document.querySelector("input").value;
  the_figure = Number(the_figure);
  let ans = (the_figure * 9/5) + 32;

  if (the_figure === "") {
    alert("Oops! You have to enter a value");
    return;
} 

  document.querySelector(".input-info h1").innerHTML = `${the_figure} <sup>o</sup>C`;
  document.querySelector(".output-info h1").innerHTML = `${ans} <sup>o</sup>F`;
}

//target the reset btn.
const del = document.querySelector(".reset-btn")
del.addEventListener("click", resetBtn)
function resetBtn(){
  document.querySelector(".input-info h1").innerHTML = `0<sup>o</sup>C`;
  document.querySelector(".output-info h1").innerHTML = `32<sup>o</sup>F`
}