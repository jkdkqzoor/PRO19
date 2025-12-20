// console.log("synch 1");


// setTimeout(() => {
//     console.log("timedout");
// }, 1000);

// console.log("synch 2");

// const promise = new Promise((resolve, reject) => {
//     const isSuccess = false;
//     //assync operations
//     if(isSuccess){
//         resolve('everything is good');
//     } else{
//         reject('error');
//     }

// });

// promise
//     .then(resolve => console.log(resolve))
//     .catch(error => console.error(error));

// console.log("start");

// setTimeout(() => {
//     console.log("timedout");
// }, 2000);
// Promise.resolve().then(()=>console.log("promise"));

// console.log("end");

// const user={
//     id:1,
//     name:"alex",
//     age:35
// };

// function getUser(){
//     showSpiner();

//     const isSuccess = true;
//     return new Promise((res,rej) => {
//         setTimeout(() => {
//             isSuccess ? res(user) : rej('load failure');
//         }, 2000)
//     })
// }

// getUser()
//     .then(data => console.log(data))
//     .catch(error => console.error(error))
//     .finally(hidenSpiner)

function showSpiner() {    
  console.log("spiner is running");
}

function hidenSpiner() {
  console.log("spiner hidden");
}

// const URL = "https://jsonplaceholder.typicode.com/users/1";

// const btn = document.getElementById("btn");


// function getUser() {
//     showSpiner();
//     return fetch(URL).then((res) => {
//       if (res.ok) {
//         return res.json();
//       } else {
//       }
//       throw new Error("response error");
//     });
//   }


// function handleClick(){
//     getUser()
//     .then((user) => console.log(user))
//     .catch((er) => console.log(er))
//     .finally(hidenSpiner);
// }



const URL = "https://thesimpsonsapi.com/api/characters";
const wrapper = document.getElementById('wrapper');

async function loadUsers() {
    showSpiner();
    try {
        const response = await fetch(URL);
        if(!response.ok){
            throw new Error('server error', response.status);
        };

        const data = await response.json();
        console.log(data.results);
        renderCh(data.results);
        
    } catch (error) {
        console.error('error', error.message);
    } finally {
        hidenSpiner();
    }
}

btn.addEventListener("click", loadUsers);

function renderCh(characters){
    wrapper.innerHTML = "";

    characters.forEach(el => {
            const div = document.createElement('div');
            const p = document.createElement('p');
            const img = document.createElement('img');
            div.classList.add('card');
            // img.setAttribute('src',URL + el.portrait_path);
            img.setAttribute('alt',el.id);
            p.textContent = el.name +" "+ el.gender;
            div.append(img, p);
            wrapper.appendChild(div);

        });

}