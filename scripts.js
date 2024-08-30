 let btnNext = document.querySelector('.next')
 let bntBack = document.querySelector('.back')

 let container = document.querySelector('.container')    /* queryseletor pode adicionar 1 item por vez */
 let list = document.querySelector('.container .list ')
 let thumb = document.querySelector('.container .thumb')

 btnNext.onclick = () => moveItemsOnClick('next')
 bntBack.onclick = () => moveItemsOnClick('back')


function  moveItemsOnClick(type){  
    let listItems  = document.querySelectorAll('.list .list-item')  /* queryseletorall nesse aqui pega todos,direto da fonte. */
    let thumbItems = document.querySelectorAll('.thumb .thumb-item')


    if(type === 'next'){
        list.appendChild(listItems[0]) /* appendChild lida com lista, sempre colocando em primeira posição ou para frente. */
        thumb.appendChild(thumbItems[0])
        container.classList.add('next')
    } else {
        list.prepend(listItems[listItems.length - 1])    /*  prepend lida com lista, sempre colocando em ultima posição ou para volta para traz. */
        thumb.prepend(thumbItems[listItems.length - 1])
        container.classList.add('back')
    }

    setTimeout(() => {  /*temporizador     animation*/
        container.classList.remove('next')
        container.classList.remove('back')
    }, 3000);


}