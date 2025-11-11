export type Product = {
  id: number;
  name: string;
  price: number;
  description?: string; 
};

export const PRODUCTS: Product[] = [
  { id: 1, name: "Laptop", price: 1199, description: "Fast and lightweight" },
  { id: 2, name: "Headphones", price: 99, description: "Bluetooth with noise cancellation" },
  { id: 3, name: "Keyboard", price: 69, description: "Mechanical keyboard" },
];
