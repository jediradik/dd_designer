class Tabs {
    constructor(arr1, arr2) {
        this.arr1 = arr1;
        this.arr2 = arr2;
    }

    getTabsClasses() {
        this.tabsList = [];
        const [...tabs] = this.arr1

        tabs.forEach((tab) => {
            tab = document.querySelector(tab);
            this.tabsList.push(tab);
        })

        return this.tabsList;
    }


    getContentsClasses() {
        this.contentsList = [];
        const [...contents] = this.arr2

        contents.forEach((content) => {
            content = document.querySelector(content);
            this.contentsList.push(content);
        })

        return this.contentsList;
    }
}
function tabOnClick(e, tabsClass) {
    const currentTarget = e.target;

    tabsClass.getTabsClasses();
    tabsClass.getContentsClasses();
    tabsClass.tabsList.forEach((tab) => {
        tab.classList.remove('active');
    });

    tabsClass.contentsList.forEach((content) => {
        content.classList.remove('active');
    });

    if (currentTarget === tabsClass.tabsList[0]) {
        tabsClass.tabsList[0].classList.add('active');
        tabsClass.contentsList[0].classList.add('active');
    } else if (currentTarget === tabsClass.tabsList[1]) {
        tabsClass.tabsList[1].classList.add('active');
        tabsClass.contentsList[1].classList.add('active');
    } else {
        tabsClass.tabsList[2].classList.add('active');
        tabsClass.contentsList[2].classList.add('active');
    }
}