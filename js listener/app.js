// const button = document.getElementById("click");

// button.addEventListener('click', ()=>{
//     console.log('works');
//     console.log('well done');
//     console.log('nice');
// })

// const handleClick = () => console.log('nice day');
// const handleClick1 = () => console.log('good job');

// const handleClick1 = () => console.log('The button was pressed first time!');
// const handleClick2 = () => console.log('The button was pressed second time!');
// const handleClick3 = () => console.log('The button was pressed third time!');

// const removeClick = () => {
//     console.log('deleted second');
//     button.removeEventListener('click', handleClick2);
//     button.removeEventListener('click', removeClick);
// }

// button.addEventListener('click', handleClick1);
// button.addEventListener('click', handleClick2);
// button.addEventListener('click', handleClick3);

// button.addEventListener('click', removeClick);

// const btn = document.getElementById('btn');
// const result = document.getElementById('result');

// let total = 0;
// const addClick = () => {
//     total++;
//     result.textContent = `count clicks: ${total}`;
// }
// btn.addEventListener('click',addClick)
// document.addEventListener('click', addClick);

// const box = document.getElementById('box');

// const start = document.getElementById('start');
// const stop1 = document.getElementById('stop');

// let setIntervalId = null;

// function changeColors(){
//     if(setIntervalId !== null) return
//     setIntervalId = setInterval(() => {
//         box.style.backgroundColor = `#${Math.floor(Math.random()*1000)+1}`},1000)
//     }

// start.addEventListener('click', changeColors);
// stop1.addEventListener('click', () => {clearInterval(setIntervalId);setIntervalId = null;})

// document.addEventListener('keydown', (e) =>{
//     console.log('key',e.key);
//     console.log('code',e.code);
// })

// const list = document.getElementById("list");

// list.addEventListener("click", (e) => {
//   // console.log(e.target.tagName); 
  
//   if (e.target.tagName === "LI") {
//     if (e.target.classList.contains("active")) {
//       e.target.classList.remove("active");
//     } else {
//         for (const li of list.children) {
//             li.classList.remove("active");
//     }
//       e.target.classList.add("active");
//     }
//   }
// });

// const form  = document.createElement('form');
// const input = document.createElement('input');
// const button = document.createElement('button');
// button.textContent = 'Send'

// form.setAttribute('id','form');
// // form.setAttribute('action','submit');

// input.setAttribute('type','text');
// input.setAttribute('id','input');

// button.setAttribute('type','submit');
// button.setAttribute('id','btn');

// form.addEventListener('submit', (e) => {
//     e.preventDefault();
//     console.log('Sent', input.value);
//     input.value='';});

// form.append(input,button);
// document.body.prepend(form);

// const input = document.createElement('input');

// input.setAttribute('type', 'checkbox');
// input.setAttribute('id','inp');

// input.addEventListener('change', () => console.log(input.checked));

// document.body.prepend(input);

// const form = document.getElementById('signupForm');
// const div = document.getElementById('error');
// const checkbox = document.querySelector('[name="agree"]');

// form.addEventListener('submit',(e) => {
//     e.preventDefault();
//     if(checkbox.checked){
//         div.textContent = '';
//         console.log("sent");
//         form.reset();
//         return

//     }
//     div.textContent = 'error';
// })
