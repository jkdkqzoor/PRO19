//exrsize 1==============================================================================
// const increment = document.querySelector('[data-action="increment"]');
// const decrement = document.querySelector('[data-action="decrement"]');

// const value = document.getElementById('value');
// let counterValue = 0;

// increment.addEventListener('click',() => {
//     counterValue += 1;
//     value.textContent = counterValue
// });

// decrement.addEventListener('click',() => {
//     counterValue += -1;
//     value.textContent = counterValue
// });

//exrsize 2===============  ===============================================================
// const container = document.createElement('div');
// const button = document.createElement('button');
// const span = document.createElement('span');
// button.textContent = 'Click me!';
// span.style.backgroundColor = 'white';
// container.style.display = 'flex';
// container.style.flexDirection = 'column';
// container.style.width = '200px';

// button.addEventListener('click', () => {
//     document.body.style.backgroundColor = `#${Math.floor(Math.random()*1000)+1}`;
//     span.textContent = `${document.body.style.backgroundColor}`;
// });
// container.append(button,span);
// document.body.prepend(container);


//exrsize 3==============================================================================

// const input = document.createElement('input');
// const h1 = document.createElement('h1');
// const span = document.createElement('span');

// input.setAttribute('id','name-input');
// input.setAttribute('type','text');
// input.setAttribute('placeholder','Enter your name!');

// span.setAttribute('id','name-output');
// span.textContent = 'Anonymous';
// const div = document.createElement('div');

// div.append(input,h1);
// document.body.prepend(div);

// h1.textContent = `Good afternoon, ${span.textContent}!`;
// input.addEventListener('input', () => {
//     span.textContent = input.value || 'Anonymous';
//     console.log(span.textContent);
//     h1.textContent = `Good afternoon, ${span.textContent}!`;
//     });

