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

$(document).ready(() => {
    route();

    $('#nav-publication').click(() => {
        jumpTo("publication.html")
    })

    $('#nav-index').click(() => {
        jumpTo("/")
    })
})

function jumpTo(pos) {
    window.history.pushState(null, null, pos);
    route();
}

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

function loadContent(page) {
    fetch(page)
        .then(rsp => rsp.text())
        .then(rsp => {
            $('#right-content').html(rsp)
        })
}

window.addEventListener('popstate', function (event) {
    route();
}, false);