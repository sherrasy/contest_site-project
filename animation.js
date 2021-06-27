(function () {
var square = document.querySelector('.speech');

var observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
    if (typeof getCurrentAnimationPreference === 'function' && !getCurrentAnimationPreference()) {
        return;
    }

    if (entry.isIntersecting) {
        entry.target.classList.add('anim-lineUp');
    }
    });
});

observer.observe(square);
})();

(function () {
var square = document.querySelector('.2015-page__icons');

var observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
    if (typeof getCurrentAnimationPreference === 'function' && !getCurrentAnimationPreference()) {
        return;
    }

    if (entry.isIntersecting) {
        entry.target.classList.add('icons-animation');
    }
    });
});

observer.observe(square);
})();
