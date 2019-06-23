$(document).ready(() => {
    const pages = [{
            path: "/",
            page: "/pages/home.html",
        },
        {
            path: "/index.html",
            page: "/pages/home.html",
        },
        {
            path: "/publication.html",
            page: "/pages/publication.html",
            navBtn: 'nav-publication',
        },
        {
            path: "/mgpusim.html",
            page: "/pages/mgpusim.html",
        }
    ]

    function route() {
        let path = window.location.pathname
        path = path.substr(1, path.length - 6)
        if (path == "") {
            path = "index"
        }
        const htmlPath = path + '.html'
        const pagePath = "/pages/" + htmlPath
        const navBtn = '#nav-' + path

        loadContent(pagePath)
        $('.nav-item').removeClass('active')
        $(navBtn).addClass('active')
    }
    route();

    $('#nav-publication').click(() => {
        window.history.pushState(null, null, "publication.html");
        route()
    })

    $('#nav-index').click(() => {
        window.history.pushState(null, null, "/");
        route();
    })

    function loadContent(page) {
        fetch(page)
            .then(rsp => rsp.text())
            .then(rsp => {
                $('#right-content').html(rsp)
            })
    }
})