if (screen.width >= 1920) {
    setTimeout(() => {
        document.querySelector(".slidecont").style.height = "44px";
        document.querySelector(".language").style.marginTop = "48.125px";
    }, 500);
    
    setTimeout(() => {
        document.querySelector(".slide").style.transform = "translateX(0px)";
    }, 1000);
    
    setTimeout(() => {
        document.querySelector(".slide").style.transform = "translateX(1600px)";
    }, 8000);
    
    setTimeout(() => {
        document.querySelector(".language").style.marginTop = "27.5px";
        document.querySelector(".slidecont").style.height = "0px";
        document.querySelector(".slide").style.display = "none";
    }, 8500);
}

else if (screen.width <= 801) {
    setTimeout(() => {
        document.querySelector(".slidecont").style.height = "27px";
        document.querySelector(".language").style.marginTop = "35px";
    }, 500);
    
    setTimeout(() => {
        document.querySelector(".slide").style.transform = "translateX(0px)";
    }, 1000);
    
    setTimeout(() => {
        document.querySelector(".slide").style.transform = "translateX(500px)";
    }, 8000);
    
    setTimeout(() => {
        document.querySelector(".language").style.marginTop = "10px";
        document.querySelector(".slidecont").style.height = "0px";
        document.querySelector(".slide").style.display = "none";
    }, 8500);
}

else {
    setTimeout(() => {
        document.querySelector(".slidecont").style.height = "32px";
        document.querySelector(".language").style.marginTop = "35px";
    }, 500);

    setTimeout(() => {
        document.querySelector(".slide").style.transform = "translateX(0px)";
    }, 1000);

    setTimeout(() => {
        document.querySelector(".slide").style.transform = "translateX(1600px)";
    }, 8000);

    setTimeout(() => {
        document.querySelector(".language").style.marginTop = "20px";
        document.querySelector(".slidecont").style.height = "0px";
        document.querySelector(".slide").style.display = "none";
    }, 8500);
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

document.querySelectorAll('.tbh').forEach((el) => observer.observe(el));

document.querySelectorAll('.tbp').forEach((el) => observer.observe(el));

document.querySelectorAll('.tbi').forEach((el) => observer.observe(el));

document.querySelectorAll('.footer-col').forEach((el) => observer.observe(el));

document.querySelectorAll('.servicehead').forEach((el) => observer.observe(el));

document.querySelectorAll('.card').forEach((el) => observer.observe(el));