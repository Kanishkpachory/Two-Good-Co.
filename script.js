const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function loadanimation(){
    gsap.from("#page1 h1",{
        y:100,
        opacity:0,
        delay:0.3,
        duration:0.4,
        stagger:0.3
    })
    gsap.from("#page1 #vedio-container",{
        scale:0.9,
        opacity:0,
        delay:1,
        duration:0.4,
        stagger:0.3
    })
}

function vedioconAnimation(){
    var vediocon = document.querySelector("#vedio-container");
    var play = document.querySelector("#play");
    vediocon.addEventListener("mouseenter",function(){
        gsap.to(play,{
            opacity : 1,
            scale : 1
        })
    })

    vediocon.addEventListener("mouseleave",function(){
        gsap.to(play,{
            opacity :0,
            scale : 0
        })
    })

    vediocon.addEventListener("mousemove",function(dets){
        gsap.to(play,{
            left : dets.x-50,
            top : dets.y-60,
        })
    })
}

loadanimation()
vedioconAnimation()

document.addEventListener("mousemove",function(dets){
    gsap.to("#cursor",{
        left : dets.x,
        top : dets.y
    })
})

// document.querySelector("#child1").addEventListener("mouseenter" , function(){
//     gsap.to("#cursor",{
//         transform:` translate(-50%,-50%)  scale(1)`
//     })
// })

// document.querySelector("#child1").addEventListener("mouseleave" , function(){
//     gsap.to("#cursor",{
//         transform:` translate(-50%,-50%)  scale(0)`
//     })
// })

function page3cursor(){
    var a = document.querySelectorAll(".child");
a.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        gsap.to("#cursor",{
            transform:` translate(-50%,-50%)  scale(1)`
        }) 
    })
})
a.forEach(function(elem){
    elem.addEventListener("mouseleave",function(){
        gsap.to("#cursor",{
            transform:` translate(-50%,-50%)  scale(0)`
        }) 
    })
})
}

page3cursor()