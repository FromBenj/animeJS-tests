anime.timeline()
    .add({
        targets: '#beatriz path',
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutBack',
        duration: 2000,
        delay: function(el, i) { return i * 250 },
        direction: 'alternate'
    }, "-=2000")
    .add({
        targets: '.main-container',
        backgroundColor: 'rgb(255,255,255)',
        easing: 'easeInOutBack',
    }, "-=1000")
    .add({
        targets: '.tagline',
        opacity: [0, 1],
        scaleY: [0.5, 1],
        easing: "easeOutExpo",
        duration: 600,
    },'-=400');