function mobileTarget() {
    let theLinks = document.getElementsByClassName("contact-email");
    if(window.innerWidth > 767) {
        Array.prototype.forEach.call(theLinks,
            (link) => link.href = "/pages/contact"
        );
    }
    else {
        Array.prototype.forEach.call(theLinks,
            (link) => link.href = "mailto:" + link.innerHTML
        );
    }


}

window.onload = mobileTarget;
window.onresize = mobileTarget;
