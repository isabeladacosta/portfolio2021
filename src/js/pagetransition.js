//import { gsap } from 'gsap';

function delay(n) {
    n = n || 1000;
    return new Promise((done) => {
        setTimeout(() => {
            done();
        }, n);
    });
}

function pageTransition() {
    var tl = gsap.timeline();
    tl.to(".loading-screen", {
        duration: 1.2,
        width: "100vw",
        left: "0vw",
        ease: "Expo.easeInOut",
    });

    tl.to(".loading-screen", {
        duration: 1,
        width: "100vw",
        left: "100vw",
        ease: "Expo.easeInOut",
        delay: 0.3,
    });
    tl.set(".loading-screen", { left: "-100vw" });
}

function contentAnimation() {
    var tl = gsap.timeline();
    tl.from(".animate", { duration: 1.2, y: 30, opacity: 0, stagger: 0.4, delay: 0.3 });
}

$(function () {
    barba.init({
        sync: true,

        transitions: [
            {
                async leave(data) {
                    const done = this.async();

                    pageTransition();
                    await delay(1000);
                    done();
                },

                async enter(data) {
                    window.scrollTo(0, 0);
                    contentAnimation();
                    
                },

                async once(data) {
                    contentAnimation();
                },
            },
        ],
    });
});