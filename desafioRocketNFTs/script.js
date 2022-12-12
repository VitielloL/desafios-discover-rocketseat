const burguer = document.getElementById("burguer")
const itens = document.getElementById("itens")

burguer.onclick = function(){
    if(itens.style.display == 'flex'){
        itens.style.display = 'none'; 
        itens.style.transition = '1s';
    }else{
        itens.style.display = 'flex';
    }
}