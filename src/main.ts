import "./css/style.css";
import ListItem from "./model/ListItem";
import FullList from "./model/FullList";
import ListTemplate from "./templates/ListTemplate";

const initApp = (): void {
    const fullList = FullList.instance;
    const template = ListTemplate.instance;

    const itemEntryForm = document.getElementById('itemEntryForm') as HTMLFormElement

    const clearItems = document.getElementById('')
}

document.addEventListener('DOMContentLoaded', initApp)