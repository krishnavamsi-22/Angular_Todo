export class Todo {
    sno: number;
    title: string;
    desc: string;
    active: boolean;

    constructor(sno: number = 0, title: string = '', desc: string = '', active: boolean = true) {
        this.sno = sno;
        this.title = title;
        this.desc = desc;
        this.active = active;
    }
}
