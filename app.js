const tabs = document.querySelectorAll(".tab__btn");
const contents = document.querySelectorAll(".details__content, .tutorials__content, .code__content")

tabs.forEach((tab, i) => {
    tab.addEventListener('click', () => {
        tabs.forEach((t, index) => {
        if (tab === t) {
            t.classList.add("active");
        } else {
            t.classList.remove("active");
        }
        });
        
        contents.forEach((content, index) => {
        if (index === i) {
            content.classList.add("active");
        } else {
            content.classList.remove("active");
        }
        });
    });
});

