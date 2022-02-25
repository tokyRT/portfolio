
var overlay = document.querySelector('body>.overlay');

window.addEventListener('load', function () {
    //overlay loader animation
    overlay.classList.add('loaded');
    $('html').css("overflow", "auto");

    /* ----------------------------
             hero animation
    ----------------------------*/

    var helloSvg = new Vivus('hello-svg', {
        duration: 400,
        start: "manual"
    });
    var creativeSvg = new Vivus('creativeSvg', {
        duration: 400,
    });
    //creating a timeline for all elements on the hero section
    var heroTl = gsap.timeline({ paused: true });
    heroTl.from(".hero .text h1", {
        opacity: 0,
        y: 100,
        duration: .5
    }).from(".hero .text .socials li", {
        opacity: 0,
        y: 50,
        duration: .4,
        stagger: 0.1,
        delay: .3
    }).from(".hero .image img", {
        opacity: 0,
        y: 200,
        duration: .9,
        ease: CustomEase.create("custom", "0.77,0,0.18,1")
    }, "-=0.5");

    $('body>.overlay>div:first-child').on('transitionend', function () {
        //start all animations after the loder overlay has finished transitionning
        //vivus animation
        helloSvg.play();
        setTimeout(() => {
            heroTl.play();
        }, 2000);
    });


});


//project animation
var elasticEase = CustomEase.create("custom", "0.73,-0.67,0,1.67");

prms.then(() => {
    $('.projectsSection .project').each(function (i, project) {
        var takeAlook = $(this).find('a');
        var tlTakeALook = gsap.timeline({ paused: true });
        tlTakeALook.to(takeAlook, {
            y: -45,
            duration: .4,
            ease: elasticEase,
        }).to(takeAlook, {
            paddingLeft: 100,
            duration: .5,
            ease: elasticEase
        });



        $(project).hover(() => tlTakeALook.play(), () => tlTakeALook.reverse());
        function startAnim() {
            tlTakeALook.play();
        }
    });

    /* ----------------------------
             custom cursor
    ----------------------------*/
    var cursor = document.getElementById('customCursor');
    document.addEventListener('mousemove', function (e) {
        var cursorWidth = cursor.offsetWidth;
        var x = e.clientX - cursorWidth / 2;
        var y = e.clientY - cursorWidth / 2;
        cursor.style.transform = 'translate(' + x + 'px, ' + y + 'px)';
    });
    var links = document.querySelectorAll('a');
    for (let i = 0; i < links.length; i++) {
        const link = links[i];
        link.addEventListener('mouseover', function () {
            cursor.classList.add('on-link');
        });
        link.addEventListener('mouseout', function () {
            cursor.classList.remove('on-link');
        })
    }


});