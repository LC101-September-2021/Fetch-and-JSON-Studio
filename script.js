window.addEventListener('DOMContentLoaded', (event) => {

    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response) {
        console.log(response);
    });
});