// window.addEventListener('DOMContentLoaded', (event) => {

//     fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response) {
//         response.json().then(function(json) {
//             const div = document.getElementById("container");
//             let astronauts = "";
//             for (astronaut of json) {
//                 astronauts += `
//                 <div class="astronaut">
//                 <div class="bio">
//                 <h3>${json.firstName}</h3>
//                 <ul>
//                     <li>Hours in space: ${json.hoursInSpace}</li>
//                     <li>Active: ${json.active}</li>
//                     <li>Skills: ${json.skills}</li>
//                 </ul>
//                 <img class="avatar" src="${json.picture}">
//                 </div>
//                 </div>

//                   `;

//             }
//             div.innerHTML = astronauts;
//         });
//     });
// });

window.addEventListener('load', function() {

    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response) {
        return response.json();
    }).then(function(json) {
        console.log(json);
        const container = document.querySelector('#container');
        let astronauts = '';
        for (astronaut of json) {
            astronauts += `
        <div class="astronaut">
          <div class="bio">
            <h3>${astronaut.firstName} ${astronaut.lastName}</h3>
            <ul>
              <li>Hours in space: ${astronaut.hoursInSpace}</li>
              <li>Active: ${astronaut.active}</li>
              <li>Skills: ${astronaut.skills.join(", ")}</li>
            </ul>
          </div>
          <img class="avatar" src="images/${astronaut.picture}"/>
        </div>
        `;
        }
        container.innerHTML = astronauts;
    });

});