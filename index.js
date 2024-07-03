
const inputMsg = document.querySelector('.myMessage')
const messageButton = document.querySelector('.theMessageButton')
const removeButton = document.querySelector('.theMessageRemoveBtn')
const userInput = document.querySelector('.userInput') 
const inputButton = document.querySelector('.inputBtn')
const userPhrase = document.querySelector('.userPhrase')
const fruitList = document.querySelector('.fruits')
const fruitAdder = document.querySelector('.fruitAdder')
const fruitInput = document.querySelector('.fruitInput')


messageButton.addEventListener('click', function(){
    inputMsg.innerText =  "It's kinda fun working with DOM";
    setTimeout(function(){
        inputMsg.innerHTML = 'And AlpineJS, coming up';
    }, 2000)
});

removeButton.addEventListener('click', function(){
    inputMsg.innerHTML = '';
});


inputButton.addEventListener('click', function(){
    if(userInput.value.trim().length > 0){
        userPhrase.innerHTML = userInput.value
    }
})

userPhrase.addEventListener('click', function(){
    userPhrase.classList.toggle('colorMode')
})

const fruits = ['Apples', 'Pears', 'Oranges', 'Grapes', 'Bananas'];

for(let i=0; i<fruits.length; i++){
    const currentFruit = fruits[i]

    const li = document.createElement('li')
    li.innerHTML = currentFruit;
    fruitList.appendChild(li)
}

fruitAdder.addEventListener('click', function(){
    const li = document.createElement('li')
    li.innerHTML = fruitInput.value;
    fruitList.appendChild(li)
})