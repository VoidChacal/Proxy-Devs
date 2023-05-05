var click = false;

function trocadecor()
{
var change = document.querySelector('body');

if(!click) {
change.style.backgroundColor = '#23232e';
change.style.color = '#fff';
click = true;


}else{
    change.style.backgroundColor = '#fff';
    change.style.color = '#000';
    click = false;
}
}