export interface IProduct{
    idProduct: string;
    name: string;
    price: number;
    description: string;

    category: Category;
    urlImage: string;
}

export enum Category{
    Burguers = "Burguers",
    SoftDrinks = "Bebidas sin alcohol",
    Beers = "Cervezas",
    SideDishes = "Guarniciones", //*guarniciones
    Desserts = "Postres",
    Salads = "Ensaladas",
    BurguerVeggies = "Veggies"
    
}