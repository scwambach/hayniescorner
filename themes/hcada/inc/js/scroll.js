var controller = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onEnter", duration: "200%"}});

// build scenes
new ScrollMagic.Scene({triggerElement: "#parallax1"})
        .setTween("section.aspot .scroll-image", {y: "80%", ease: Linear.easeNone})
        // .addIndicators()
        .addTo(controller);
