let modal = document.getElementById('miModal');
let flex = document.getElementById('flex');
let abrir = document.getElementById('abrir');
let cerrar = document.getElementById('close');

abrir.addEventListener('click', function(){
    modal.style.display = 'block';
});

cerrar.addEventListener('click', function(){
    modal.style.display = 'none';
});

window.addEventListener('click', function(e){
    console.log(e.target);
    if(e.target == flex){
        modal.style.display = 'none';
    }
});





/*let cerrar = document.querySelectorAll('.close')[0];
let abrir = document.querySelectorAll('.cta')[0];
let modal = document.querySelectorAll('.modal')[0];
let modalC= document.querySelectorAll('.modal-container')[0];*/











/*
document.querySelectorAll('.item__foto img').forEach(item__foto =>{
    item__foto.onclick = () =>{
    document.querySelector('.pop_img').style.display = block;
    document.querySelector('.pop_img img').src = image.getAttribute('src');
    }

});

document.querySelector('.pop_img span').onclick = () => {
    document.querySelector('.pop_img').style.display = 'none';
}
*/




/*
img = document.getElementById('myModal')
if img.onclick = function ampliar(){
    img.style.transform = 'scale(1.9)'
}*/