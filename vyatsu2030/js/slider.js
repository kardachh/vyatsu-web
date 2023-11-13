// slider for block #10
let sliderLider = tns({
    container: '#sliderLider',
    slideBy: 'page',
    "swipeAngle": false,
    "gutter": 30,
    autoplay: true,
    autoplayButtonOutput: false,
    speed: 750,
    nav: false,
    autoplayButton: false,
    controlsContainer: "#controls-lider",
    edgePadding: 0,
    items: 1,
    loop: true,
    responsive: {
        640: {
            items: 2
        },
        768: {
            items: 3
        },
        1024: {
            items: 4
        }
    }
});
