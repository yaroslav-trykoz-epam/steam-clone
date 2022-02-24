export class Game {
    id:number;
    title: string;
    price: number;
    description: string;
    genre?: string;

    constructor(id:number, title = '', price = 0, description:string, genre='action'){
        this.id = id;
        this.title = title;
        this.price = price;
        this.description = description;
        this.genre = genre;
    }
}
