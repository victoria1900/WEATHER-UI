import { UI_ELEMENTS } from "./view.js";


export function tabsButtonsListener(buttons) {
    buttons.forEach((btn) => {
        btn.addEventListener("click", selectTab);
    });
}

function selectTab() {
    const id = this.dataset.tab;
    const tab = document.querySelector(`#${id}`);

    removeClassFromElements(UI_ELEMENTS.TABS.SECTIONS, "main__info--active");

    removeClassFromElements(
        UI_ELEMENTS.TABS.SECTIONS_BUTTONS,
        "main__tab--active"
    );

    this.classList.add("main__tab--active");
    tab.classList.add("main__info--active");
}

function removeClassFromElements(elements, className) {
    for (let elem of elements) {
        elem.classList.remove(className);
    }
}