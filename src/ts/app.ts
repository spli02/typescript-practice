import { Item } from './item';
const elem = document.querySelector("#app");
const aBook = new Item('TypeScript Practice',2000);
aBook.say(elem);