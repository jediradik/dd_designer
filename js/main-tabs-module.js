//Main tabs
const mainTabsList = ['.tab-1', '.tab-2'];
const mainContentsList = ['.tabs__content_1', '.tabs__content_2'];

const mainTabs = new Tabs(mainTabsList, mainContentsList);

mainTabs.getTabsClasses().forEach((tab) => {
    tab.addEventListener("click", (e) => {
        tabOnClick(e, mainTabs);
    });
})