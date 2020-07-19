var photos = []
var i = 0

function init() {
    axios
        .get("https://run.mocky.io/v3/08c763ab-5bb2-46b7-a504-b9f28a8ba050")
        .then(function (res) {
            console.log(res)
            document.getElementById("img").src = res.data.img[0]
            photos = res.data.img
            page();
        })
}

function page() {
    document.getElementById("num").innerText = (i + 1) + "/8"
}

document.getElementsByClassName("next")[0].addEventListener("click", function () {
    if (i == 7) {
        i = 0
        document.getElementById("img").src = photos[i]
    }
    else {
        i += 1
        document.getElementById("img").src = photos[i]
    }
    page();
})

document.getElementsByClassName("last")[0].addEventListener("click", function () {
    if (i == 0) {
        i = 7
        document.getElementById("img").src = photos[i]
    }
    else {
        i -= 1
        document.getElementById("img").src = photos[i]
    }
    page();
})


init()