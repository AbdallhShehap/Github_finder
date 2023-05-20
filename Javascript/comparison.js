let input1 = document.querySelector(".input11")
let input2 = document.querySelector(".input22")
let btn = document.querySelector(".btnn");
let cont = document.querySelector(".input1")
let cont2 = document.querySelector(".input2")
let btnComp = document.querySelector(".btnComp");






btn.onclick = function(){
    getRepos();
    
}




function getRepos(){


    if(input1.value == "" || input2.value == ""){
        alert("Enter the UserName");

        }else if (input1.value == input2.value ){
            alert("Enter Corecct UserName");

    }else{

        // token ="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"

        // to prefent the form value
        event.preventDefault()

        fetch(`https://api.github.com/users/${input1.value}`,{
            headers: {
            //   Authorization:`Bearer ${token}`
            }
          })
        .then((response) => response.json())
        .then((response) => {



            const avatar_url = response.avatar_url ;
            value1 = response.public_repos;
            
            let repo = document.createElement('div')
            repo.className = "repo";

            repo.innerHTML=""

            repo.innerHTML  = ` <img class= "img"  src="${avatar_url}" alt = "" class = "profile-pic">
            <p>${input1.value}</p> 
            <div class="number__repos"><h5>Number of Repos: ${response.public_repos}</h5></div>
            <button id="profile-btn">Edit profile</button> `;


            // tabs.innerHTML = `
            // <a href="#">Overview</a>
            // <a href="#">Repositories</a>
            // <a href="#">Projects</a>
            // <a href="#">Packages</a>
            // <a href="#">Stars</a>`;

            cont.appendChild(repo);

        })
  
        // token ="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"


        fetch(`https://api.github.com/users/${input2.value}`,{
            headers: {
            //   Authorization:`Bearer ${token}`
            }
          })
        .then((response1) => response1.json())
        .then((response1) => {


            
            const avatar_url = response1.avatar_url ;
             value2 = response1.public_repos ;
            
            let repo = document.createElement('div')
            repo.className = "repo";
            
            repo.innerHTML=""
             repo.innerHTML  = ` <img class= "img" src="${avatar_url}" alt = "" class = "profile-pic">
            <p>${input2.value}</p> 
             <div class="number__repos"><h5>Number of Repos: ${response1.public_repos}</h5></div>
            <button id="profile-btn">Edit profile</button> `;

            // tabs.innerHTML = `
            // <a href="#">Overview</a>
            // <a href="#">Repositories</a>
            // <a href="#">Projects</a>
            // <a href="#">Packages</a>
            // <a href="#">Stars</a>`;
            cont2.appendChild(repo);

            btn.parentNode.removeChild(btn);

        

            
        })
        
        
       


        
    }}
    
    
    
    function compair(){
           
           if (value1 > value2) {

               alert("UserOne Winner")
    
           }else{
               alert("UserTow Winner")

           }
       }











// let input1 = document.querySelector(".input11");
// let input2 = document.querySelector(".input22");
// let btn = document.querySelector(".btnn");
// let cont = document.querySelector(".input1");
// let cont2 = document.querySelector(".input2");
// let btnComp = document.querySelector(".btnComp");

// let value1; // Declare value1 outside the function scope
// let value2; // Declare value2 outside the function scope

// btn.onclick = function () {
//   getRepos();
// };

// function getRepos() {
//   if (input1.value == "" || input2.value == "") {
//     alert("Enter the UserName");
//   } else if (input1.value == input2.value) {
//     alert("Enter Correct UserName");
//   } else {
//     const token = "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";

//     // to prevent the form submission
//     event.preventDefault();

//     fetch(`https://api.github.com/users/${input1.value}`, {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     })
//       .then((response) => response.json())
//       .then((response) => {
//         const avatar_url = response.avatar_url;
//         let repo = document.createElement("div");
//         repo.className = "repo";

//         repo.innerHTML = `
//           <img src="${avatar_url}" alt="" class="profile-pic">
//           <p>${input1.value}</p> 
//           <div class="number__repos"><h5>Number of Repos: ${response.public_repos}</h5></div>
//           <button id="profile-btn">Edit profile</button>`;

//         value1 = response.public_repos; // Assign the value to value1

//         cont.appendChild(repo);
//       });

//     fetch(`https://api.github.com/users/${input2.value}`, {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     })
//       .then((response1) => response1.json())
//       .then((response1) => {
//         const avatar_url = response1.avatar_url;
//         value2 = response1.public_repos; // Assign the value to value2

//         let repo = document.createElement("div");
//         repo.className = "repo";
//         repo.innerHTML = `
//           <img src="${avatar_url}" alt="" class="profile-pic">
//           <p>${input2.value}</p> 
//           <div class="number__repos"><h5>Number of Repos: ${response1.public_repos}</h5></div>
//           <button id="profile-btn">Edit profile</button>`;

//         cont2.appendChild(repo);

//         btn.parentNode.removeChild(btn);
//       });
//   }
// }

// function compair() {
//   if (value1 > value2) {
//     alert("UserOne Winner");
//   } else {
//     alert("UserTwo Winner");
//   }
// }
