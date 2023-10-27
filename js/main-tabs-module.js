//Main tabs
const mainTabsList = ['.tab-1', '.tab-2', '.tab-3'];
const mainContentsList = ['.tabs__content_1', '.tabs__content_2', '.tabs__content_3'];

const mainTabs = new Tabs(mainTabsList, mainContentsList);

mainTabs.getTabsClasses().forEach((tab) => {
    tab.addEventListener("click", (e) => {
        tabOnClick(e, mainTabs);
    });
})