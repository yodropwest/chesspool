var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    slidesPerGroup: 1
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
