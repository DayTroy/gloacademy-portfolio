const tabButtons = document.querySelectorAll('.design-list__item');
const tabDescriptions = document.querySelectorAll('.design__descr');
const tabImages = document.querySelectorAll('.design-images');
const title = document.querySelector('title');

const changeContent = (array, value) => {

    array.forEach((elem) => {
        if(elem.dataset.tabsField === value){
            elem.classList.remove('hidden');
        }
        else {
            elem.classList.add('hidden');
        }
    })
}

tabButtons.forEach((tabButton, index) => {

    tabButton.addEventListener('click', (event) => {
        const dataValue = tabButton.dataset.tabsHandler;

        changeContent(tabImages, dataValue);
        changeContent(tabDescriptions, dataValue);
         
        tabButtons.forEach((btn) => {
            if (btn == event.target) {
                btn.classList.add('design-list__item_active');
                title.innerText = tabButtons[index].innerText
                
            } else {
                btn.classList.remove('design-list__item_active');
                title.innerText = tabButtons[index].innerText
            }
        })

    })
})
