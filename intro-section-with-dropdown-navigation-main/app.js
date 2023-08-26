'use-strict'
//lets
let arrow1= document.getElementById('arrow1');
let arrow2= document.getElementById('arrow2');
let box1 = document.getElementById('box1');
let box2= document.getElementById('box2');
let ul = document.getElementById('ul');



let feature = document.getElementById('feature').addEventListener('click',()=>{
     box1.classList.toggle('visible') 
    
    arrow1.classList.toggle('rotate');
    


});
let company = document.getElementById('company').addEventListener('click',()=>{
    box2.classList.toggle('visible');
      
    arrow2.classList.toggle('rotate');
   
    

    
});

let menu = document.getElementById('menu').addEventListener('click',()=>{
    ul.classList.toggle('showUl');
    
 
})