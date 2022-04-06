var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    slidesPerGroup: 1,
    breakpoints: {
        320: {
            direction: "vertical",
        },
        385: {
            direction: "horizontal",
        },
    }
});

ymaps.ready(init);

function init() {
    var myMap = new ymaps.Map("map", {
            center: [55.758154, 37.552831],
            zoom: 14,
            controls: []
        },),
        myPlacemark = new ymaps.Placemark([55.758154, 37.552831], {
            balloonContentBody: "Шмитовский проезд, 9/5",
        });

    myMap.geoObjects.add(myPlacemark);

}

const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
        e.preventDefault()

        const blockID = anchor.getAttribute('href').substr(1)

        document.getElementById(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
}
