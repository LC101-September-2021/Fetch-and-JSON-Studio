window.addEventListener('DOMContentLoaded', (event) => {

    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response) {
        response.json().then(function(json) {
            const div = document.getElementById("container");
            div.innerHTML = `
                <h3>${json.firstName}</h3>
                <ul>
                    <li>Hours in space: ${json.hoursInSpace}</li>
                    <li>Active: ${json.active}</li>
                    <li>Skills: ${json.skills}</li>
                </ul>
                <img class="avatar" src="${json.picture}">
                  `;
        });
    });
});