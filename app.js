const tabs = document.querySelectorAll(".tab__btn");

tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
        tabs.forEach(tab=>{tab.classList.remove("active")});
        tab.classList.add('active')
    });
});





// if (tabs.length === 3){
//     console.log('Buttons have been added')
// }else{
//     console.log('missing buttons')
// }

// console.log(tabs);