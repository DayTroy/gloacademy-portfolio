const tabButtons = document.querySelectorAll('.design-list__item');
const tabDescriptions = document.querySelectorAll('.design__descr');
const tabImages = document.querySelectorAll('.design-images');
const tabTitles = document.querySelectorAll('.design__title');

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
        changeContent(tabTitles, dataValue);
        
        tabTitles.forEach((tabTitle, indexTitle) => {
            if (index === indexTitle){
                tabTitle.classList.remove('hidden');
            }
            else {
                tabTitle.classList.add('hidden');
            }

        })

        tabButtons.forEach((btn) => {
            if (btn == event.target) {
                btn.classList.add('design-list__item_active');
                
            } else {
                btn.classList.remove('design-list__item_active');
            }
        })

    })
})
