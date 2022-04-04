var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    slidesPerGroup: 1,
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
        },

        992: {
            slidesPerView: 3,
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
