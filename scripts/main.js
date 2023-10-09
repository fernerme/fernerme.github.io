/** namespace. */
var rhit = rhit || {};

/* globals */
rhit.imageIndex = 0;
rhit.intervalID = null;


rhit.handler = function() {
    if (window.location.pathname.includes("index")) {
        const imgs = document.querySelectorAll(".about-image"); //select all images
        const newIndex = (rhit.imageIndex + 1) % imgs.length;

        imgs.forEach((img) => {
            if (newIndex == parseInt(img.dataset.imgIndex)) {
                img.classList.remove("off-image");
            } else if (rhit.imageIndex == parseInt(img.dataset.imgIndex)) {
                img.classList.add("off-image");
            }
		});
        rhit.imageIndex = newIndex;
    } else {
        if (rhit.intervalID) {
            clearInterval(rhit.intervalID);
        }
        rhit.intervalID = null;
    }
}


/* Main */
rhit.main = function () {
    const imgs = document.querySelectorAll(".about-image");
    if (!rhit.intervalID) {
        rhit.intervalID = setInterval(rhit.handler, 4000);
    }
};

rhit.main();