const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

document.querySelectorAll('.footer-col').forEach((el) => observer.observe(el));

document.querySelectorAll('.aumain').forEach((el) => observer.observe(el));

document.querySelectorAll('.sustain').forEach((el) => observer.observe(el));

document.querySelectorAll('.goalhead').forEach((el) => observer.observe(el));

document.querySelectorAll('.goal9head').forEach((el) => observer.observe(el));

document.querySelectorAll('.goalpara').forEach((el) => observer.observe(el));

document.querySelectorAll('.goalimg').forEach((el) => observer.observe(el));