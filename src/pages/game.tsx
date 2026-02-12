"use client";

import { useState } from "react";
import Doll from "@/app/components/Doll/doll";
import Wardrobe from "@/app/components/Wardrobe/wardrobe";
import { clothingItems } from "@/app/data/clothingItems";
import { ClothingItem } from "@/app/types/dressup";

export default function Game() {
    const [worn, setWorn] = useState<ClothingItem[]>([]);

    function wearItem(item: ClothingItem) {
        setWorn((prev) => [
            ...prev.filter((i) => i.category !== item.category),
            item,
        ]);
    }

    return(
        <>
            <Doll wornItems={worn} onDropItem={wearItem}/>
            <Wardrobe items={clothingItems} onSelect={wearItem}/>
        </>
    );
}