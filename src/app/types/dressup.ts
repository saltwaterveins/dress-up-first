export type ClothingCategory = 
    | "hair"
    | "top"
    | "bottom"
    | "dress"
    | "shoes"
    | "socks";

export type ClothingItem = {
    id: string;
    name: string;
    category: ClothingCategory;
    imageSource: string;
    zIndex: number;
};