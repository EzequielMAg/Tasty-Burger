export interface IUser {
  id:          string;// | null;  //TODO: Revisar que pasa aca despues por haber comentado esto..
  name:        string;
  email:       string;
  password:    string;
  phoneNumber: number;
  address:     string;
}

export interface IProduct{
  id:          string;// | null;  //TODO: Revisar que pasa aca despues por haber comentado esto..
  name:        string;
  price:       number;
  description: string;

  category:    Category;
  urlImage:    string;
}

export enum Category{
  Burguers = "Hamburguesas",
  SoftDrinks = "Bebidas sin alcohol",
  Beers = "Cervezas",
  Fries = "Frituras",
  Desserts = "Postres",
  Salads = "Ensaladas",
  BurguerVeggies = "Hamburguesas Veganas"
}

export interface ICart{
  productList: IProduct[],
  cartPrice:   number,
  payMode:     string,
}
