import { Title, Bar } from "./src/view/YClass";

window.onload = function () {
    new Title();
    new Bar([
        { id_tab: 'sy', id_body: 'one', color: 'rgb(240, 220, 78)' },
        { id_tab: 'jn', id_body: 'two', color: 'red' },
        { id_tab: 'lx', id_body: 'three', color: 'yellow' }
    ]);
}