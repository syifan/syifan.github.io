$(document).ready(() => {
    const pages = [{
            path: "/publication.html",
            page: "/pages/publication.html",
        },
        {
            path: "/",
            page: "/pages/home.html",
        },
        {
            path: "/index.html",
            page: "/pages/home.html",
        },
    ]

    function route() {
        for (let i = 0; i < pages.length; i++) {
            if (window.location.pathname == pages[i].path) {
                loadContent(pages[i].page)
                return
            }
        }
    }
    route();

    $('#nav-publication').click(() => {
        window.history.pushState(null, null, "publication.html");
        route()
    })
    $('#nav-home').click(() => {
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