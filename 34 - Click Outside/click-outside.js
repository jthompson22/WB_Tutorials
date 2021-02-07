const cardButtons = document.querySelectorAll('.card button');
const modalInner = document.querySelector('.modal-inner');
const modalOuter = document.querySelector('.modal-outer');





function handleCardButtonClick(event){
    const button = event.currentTarget; 
    const card = button.closest('.card');
    console.log(card);
    const imgSrc = card.querySelector('img').src;
    const desc = card.dataset.description;
    modalInner.innerHTML = `
        <img src= "${imgSrc.replace('200', '600')}" alt="${name}"/>
        <p> ${desc}</p>
    
    `;
    modalOuter.classList.add('open');
}

function closeModal(){
    modalOuter.classList.remove('open');


}


modalOuter.addEventListener('click', function(event){
    console.log(event);
    const isOutside = !event.target.closest('.modal-inner');
    console.log(isOutside);
    
    if (isOutside) {
        closeModal(); 
    }

});

cardButtons.forEach(button => button.addEventListener('click', handleCardButtonClick));
window.addEventListener('keydown', event => {
    if(event.key === 'Escape'){
        closeModal();
    }

});