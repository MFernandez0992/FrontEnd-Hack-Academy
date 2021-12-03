var myApp = new Vue({
    el: '#tutorialYouTubeHA',
    data: {
        title: "Tutorial en YouTube de Hack Academy",
        year: 2021,
        descripcion: "Tutorial sobre manejo del framework Vue.js",
        imageUrl: "https://ha.dev/img/ha_logo_horizontal_white.svg",
        courses: [
            {
                name: "Front-End",
                hours: 60
            },
            {
                name: "Back-End (PHP)",
                hours: 54
            },
            {
                name: "Back-End (Node.js)",
                hours: 68
            },
            {
                name: "React.js",
                hours: 80
            },
            {
                name: "Coding Bootcamp",
                hours: 300
            }
        ]
    }
});