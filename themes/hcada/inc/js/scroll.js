var controller = new ScrollMagic.Controller({
  globalSceneOptions: {
    triggerHook: "onLeave",
    duration: "200%"
  }
});

// build scenes
new ScrollMagic.Scene({
  triggerElement: "section.aspot"
})
  .setTween("section.aspot .scroll-image", {y: "80%", ease: Linear.easeNone})
  // .addIndicators()
  .addTo(controller);
