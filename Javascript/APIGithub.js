let theInput = document.querySelector(".get-repos input");
let btn = document.querySelector(".btn");
let container =document.querySelector(".container");
let profile=document.querySelector(".profile");
let tabs=document.querySelector(".tabs");
let repos = document.querySelector(".repos")
let black = document.querySelector(".black")
// black.onclick = function(){
//   if(document.body.style.background == 'black'){
//     document.body.style.background = 'white'
//     document.body.style.color = 'black'
// }

//   else{ 
//     document.body.style.background = 'black'
//     document.body.style.color = 'black'
// }
// }


function functiooo(){
if(document.body.style.background=="black"){
  document.body.style.background="white"
}else{
  document.body.style.background="black"
}


}


btn.onclick = function(){
    getRepos();
}

function getRepos(){

    if(theInput.value == ""){
        alert("Enter Your UserName");

    }else{

        // token ="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"

        // to prefent the form value
        event.preventDefault()
        fetch(`https://api.github.com/users/${theInput.value}`,{
            headers: {
              // Authorization:`Bearer ${token}`
            }
          })
        .then((response) => response.json())
        .then((response) => {



            const avatar_url = response.avatar_url ;
            
            profile.innerHTML = ` <img src="${avatar_url}" alt = "" class = "profile-pic">
            <p>${theInput.value}</p> 

            <div class="number__repos"><h5>Number of Repos: ${response.public_repos}</h5></div>


            <button id="profile-btn">Edit profile</button>` ;

            // tabs.innerHTML = `
            // <a href="#">Overview</a>
            // <a href="#">Repositories</a>
            // <a href="#">Projects</a>
            // <a href="#">Packages</a>
            // <a href="#">Stars</a>`;

        })
  
        



        fetch(`https://api.github.com/users/${theInput.value}/repos`,{
            headers: {
              // Authorization:`Bearer ${token}`
            }
          })
        
        .then((response)=> response.json())
        .then((repositories)=>{

          for (let i = 0; i < repositories.length; i++){
            let repo = document.createElement('div')
            repo.className = "repo";
            repo.innerHTML = `
            <a href="#">${repositories[i].name}</a>
            <p class="public-word">Public</p>
            <p class="type-file">${repositories[i].language}</p>` ;
            repos.appendChild(repo)
          }
        })
  
      }}
      


