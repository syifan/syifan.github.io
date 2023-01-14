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
    },
    {
        path: "/blog.html",
        page: "/pages/blog.html",
        navBtn: 'nav-blog'
    },
    {
        path: "/teaching.html",
        page: "/pages/teaching.html",
    },
    {
        path: "/software.html",
        page: "/pages/software.html",
    },
]

document.addEventListener("DOMContentLoaded", () => {
    route();

    document.getElementById('nav-index')
        .addEventListener("click", () => {
            jumpTo("/")
        })

    document.getElementById('nav-publication')
        .addEventListener("click", () => {
            jumpTo("publication.html")
        })

    document.getElementById('nav-teaching')
        .addEventListener("click", () => {
            jumpTo("teaching.html")
        })

    document.getElementById('nav-software')
        .addEventListener("click", () => {
            jumpTo("software.html")
        })

    document.getElementById('nav-blog')
        .addEventListener("click", () => {
            jumpTo("blog.html")
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
    const navBtn = 'nav-link-' + path

    loadContent(pagePath)


    document.querySelectorAll('.nav-link').forEach(item => {
        item.classList.remove('active')
    })
    document.getElementById(navBtn).classList.add('active')
}

function loadContent(page) {
    fetch(page)
        .then(rsp => rsp.text())
        .then(rsp => {
            document.getElementById('right-content').innerHTML = rsp
        })

    fetch('/pages/news.html')
        .then(rsp => rsp.text())
        .then(rsp => {
            document.getElementById('news-content').innerHTML = rsp
        })
}

window.addEventListener('popstate', function (event) {
    route();
}, false);