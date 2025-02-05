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
    arr_tab: (HTMLElement | null)[] = [];
    arr_body: (HTMLElement | null)[] = [];
    constructor(tab_id: TabType[]) {
        this.arr_tab = this.getElements(tab_id.map(item => item.id_tab));
        this.arr_body = this.getElements(tab_id.map(item => item.id_body));
        this.init(tab_id);
    }
    init(tab_id: TabType[]) {
        this.arr_tab[0]!.style.color = tab_id[0].color;
        this.arr_body[0]!.style.display = 'block';

        tab_id.forEach(item => {
            const bar = this.getElement(item.id_tab);
            if (bar != null) {
                bar.addEventListener('click', () => {
                    console.log(bar);
                    this.setSelect(item);
                })
            }
        });
    }

    setSelect(item: TabType) {
        this.arr_tab.forEach(bar => {
            if (bar) {
                if (bar && bar.id == item.id_tab) {
                    bar.style.color = item.color;
                    this.arr_body.forEach(body => {
                        if (body && body.id == item.id_body) {
                            body.style.display = 'block';
                        } else {
                            body!.style.display = 'none';
                        }
                    });
                } else {
                    bar!.style.color = "";
                }
            }
        });
    }
    getElement(id: string) {
        return document.getElementById(id);
    }
    getElements(id_arr: string[]) {
        return id_arr.map(id => document.getElementById(id));
    }
    addClick(dom: HTMLElement, callfun: () => void) {
        dom.addEventListener('click', callfun.bind(this));
    }
}