/*
//編譯完後，一起同時發生。可用delay延時
gsap.to('#box', 1, {x:450})
gsap.to('#box', 13, {y:150})

//gsap.fromTo('#about', 5, {x:-1500}, {x: 0})
*/

// proCards = document.getElementsByClassName("pro-card");
// proCards[0].style.backgroundColor = "#000"


/*
//產品抖抖
new gsap.timeline()
    .to('#pros', 0.18, {rotation: 5})
    .to('#pros', 0.18, {rotation: -5})
    .to('#pros', 0.18, {rotation: 3})
    .to('#pros', 0.18, {rotation: 0, ease: Elastic.easeOut.config(1, 0.3)})
*/

/*
//滾動偵測!
$(document).ready(function () {
    let timeLine = new gsap.timeline({
        scrollTrigger: {
            trigger: "#box",
            pin: true,
            start: "center center",
            end: "+=400",
            scrub: true,
            markers: true,
            id: "block1",
        },
    })
    timeLine
        .to("#box", 2, {backgroundColor: "blue"})
        .to("#box", 1, {rotation: 360, delay:1})
        .to("#box", 1, {x: $(window).width() - $("#box").width()},0)
})
*/







$(document).ready(function () {
    let timeLine = new gsap.timeline({
        scrollTrigger: {
            trigger: "#about",
            pin: false,
            start: "center bottom",
            end: "+=400",
            scrub: true,
            markers: false,
            id: "index_sec1",
        },
    })
    timeLine
        .to("#about", 2, {y:-20})
        .fromTo("#about", 5, {opacity:0}, {opacity:1} ,0)

})

$(document).ready(function () {
    let timeLine = new gsap.timeline({
        scrollTrigger: {
            trigger: "#products",
            pin: false,
            start: "top bottom",
            end: "+=400",
            scrub: true,
            markers: false,
            id: "index_sec2",
        },
    })
    timeLine
        .to("#products", 2, {y:-20})
        .fromTo("#products", 5, {opacity:0}, {opacity:1} ,0)

}) 

$(document).ready(function () {
    let timeLine = new gsap.timeline({
        scrollTrigger: {
            trigger: "#footer",
            pin: false,
            start: "center bottom",
            end: "+=80",
            scrub: true,
            markers: false,
            id: "footer",
        },
    })
    timeLine
        .fromTo("#footer", 5, {opacity:0}, {opacity:1} ,0)

})
// --
$(document).ready(function () {
    let timeLine = new gsap.timeline({
        scrollTrigger: {
            trigger: "#products-pc",
            pin: false,
            start: "center bottom",
            end: "+=400",
            scrub: true,
            markers: false,
            id: "products_sec1-1",
        },
    })
    timeLine
        .to("#products-pc", 2, {y:-20})
        .fromTo("#products-pc", 5, {opacity:0}, {opacity:1} ,0)

})
$(document).ready(function () {
    let timeLine = new gsap.timeline({
        scrollTrigger: {
            trigger: "#products-mobile",
            pin: false,
            start: "center bottom",
            end: "+=400",
            scrub: true,
            markers: false,
            id: "products_sec1-2",
        },
    })
    timeLine
        .to("#products-mobile", 2, {y:-20})
        .fromTo("#products-mobile", 5, {opacity:0}, {opacity:1} ,0)

}) 
// --
$(document).ready(function () {
    let timeLine = new gsap.timeline({
        scrollTrigger: {
            trigger: "#help",
            pin: false,
            start: "top bottom",
            end: "+=400",
            scrub: true,
            markers: false,
            id: "support_sec1",
        },
    })
    timeLine
        .to("#help", 2, {y:-20})
        .fromTo("#help", 5, {opacity:0}, {opacity:1} ,0)

})  
