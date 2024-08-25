const converter = document.querySelector('form')

converter.addEventListener('submit', convert)
function convert(event){
    event.preventDefault()
    
    // grab the figure the person wants to convert from census to Fahrenheit
    let the_figure = Number(document.querySelector('input').value)
    let ans = Number(the_figure * 9/5) + 32
    if(the_figure === ''){
        alert("oops! you have to enter a value")
    }else{
       ans
    }

    //target the divs element that will display the Result
    document.querySelector(".input-info").innerHTML = the_figure
    document.querySelector("output-info").innerHTML = ans

}
