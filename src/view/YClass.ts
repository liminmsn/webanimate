export class Title {
    constructor() {
        document.title = Math.random().toString(32).slice(2);
    }
}


interface TabType {
    color: string;
    id_tab: string;
    id_body: string;
}

export class Bar {
    arr_tab: (HTMLElement)[] = [];
    arr_body: (HTMLElement)[] = [];
    constructor(tab_arr: TabType[]) {
        const arr_tab = this.getElements(tab_arr.map(item => item.id_tab));
        const arr_body = this.getElements(tab_arr.map(item => item.id_body));
        if (arr_tab.concat(arr_body).every(item => item != null)) {
            this.arr_tab = this.getElements(tab_arr.map(item => item.id_tab)) as HTMLElement[];
            this.arr_body = this.getElements(tab_arr.map(item => item.id_body)) as HTMLElement[];
        }
        this.init(tab_arr);
    }
    init(tab_arr: TabType[]) {
        const idx = 1;
        this.setDefineActive(idx, tab_arr[idx].color);
        tab_arr.forEach(item => {
            const bar = this.getElement(item.id_tab);
            if (bar != null) {
                this.addClick(bar, () => {
                    console.log(bar);
                    this.setSelect(item);
                });
            }
        });
    }

    setSelect(item: TabType) {
        this.arr_tab.forEach(bar => {
            if (bar) {
                if (bar && bar.id == item.id_tab) {
                    bar.style.color = item.color;
                    bar.style.textDecoration = `underline wavy ${item.color}`;
                    this.arr_body.forEach(body => {
                        if (body && body.id == item.id_body) {
                            body.style.display = 'block';
                        } else {
                            body.style.display = 'none';
                        }
                    });
                } else {
                    bar.style.color = "";
                    bar.style.textDecoration = `none`;
                }
            }
        });
    }
    setDefineActive(idx: number = 0, color: string) {
        this.arr_tab[idx].style.color = color;
        this.arr_tab[idx].style.textDecoration = `underline wavy ${color}`;
        this.arr_body[idx].style.display = 'block';
    }
    private getElement(id: string) {
        return document.getElementById(id);
    }
    private getElements(id_arr: string[]) {
        return id_arr.map(id => document.getElementById(id));
    }
    private addClick(dom: HTMLElement, callfun: () => void) {
        dom.addEventListener('click', callfun.bind(this));
    }
    get_arr_body() {

    }
}