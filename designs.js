// Select color input and assign to a variable
const color = document.querySelector('#colorPicker');
const table = document.querySelector('#pixelCanvas');
// Select size input
const formSize = document.querySelector('#sizePicker')
//I want to see if this shows up in my git


// When size is submitted by the user, call makeGrid()
formSize.addEventListener('click', function(event) {
    event.preventDefault();

    const height = document.querySelector('#inputHeight').value;
    const width = document.querySelector('#inputWidth').value;
//got this snipet of code from udacity knowledge base
    table.innerHTML = null;    
    makeGrid(height, width);
});

// Your code goes here!
//I was all over internet trying to write this code
//I'm extremely proud that the one thing I got was the
//function but even with that I had to do a lot of research to
//understand how to create the grid. Deleting the border in the
//cell when clicked was my one original idea. :|
function makeGrid(height, width) {    
for (let i = 0; i < height; i++) {
    let row = table.insertRow(i);    
    for (let x = 0; x < width; x++) {
        let cell = row.insertCell(x);         
        cell.addEventListener('click', function(evt){ 
            evt.preventDefault();
            cell.style.backgroundColor = color.value;
            cell.style.border = 0;
            row.style.border = 0;
        });
       
    }
}      
}



