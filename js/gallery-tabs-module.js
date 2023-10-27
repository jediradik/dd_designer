//Portfolio tabs
const galleryTabsList = ['.gallery__tab-1', '.gallery__tab-2'];
const galleryContentsList = ['.gallery__content_1', '.gallery__content_2'];

const galleryTabs = new Tabs(galleryTabsList, galleryContentsList);

galleryTabs.getTabsClasses().forEach((tab) => {
    tab.addEventListener("click", (e) => {
        tabOnClick(e, galleryTabs);
    });
})