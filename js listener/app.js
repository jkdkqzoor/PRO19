const button = document.getElementById('click');

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

const list = document.getElementById('list');

list.addEventListener('click', (e) =>{
    console.log(e.target.tagName);
    if(e.target.tagName === 'LI'){
        
        for(const li of list.children){
        li.classList.remove('active');
        }
        
        // e.target.style.backgroundColor = 'green';
        // list.children.style.backgroundColor = 'lightblue'
        // console.log(e);
    }
    if(e.target.classList == 'active'){
        e.target.classList.toggle('active');
        console.log(e.target.classList = 'active');}
    else{
        e.target.classList.add('active');}
    


})

