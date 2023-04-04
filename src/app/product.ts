export interface Product {
    id: string; //dont need to put optional params, just define the get function with generic as the type of JSON
    image: string;
    title: string;
    price: string;
    description: string;
  }