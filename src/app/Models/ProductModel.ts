export class ProductModel{
    id: number;
    name: string;
    category: string;
    description: string;
    size: number[];
    brand: string;
    gender: string;
    color: string[];
    price: number;
    is_in_inventory: boolean;
    items_left: number;
    imageURL: string;
    discountPrice?: number;
    slug: string;
   
}