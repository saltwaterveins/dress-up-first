"use client";

import styles from "@/app/components/Wardrobe/wardrobe.module.scss";
import { ClothingItem } from "@/app/types/dressup";

type Props = {
    items: ClothingItem[];
    onSelect: (item: ClothingItem) => void;
}

export default function Wardrobe({ items, onSelect }: Props) {
    return(
        <div className={styles.wardrobe}>wardrobe
            {items.map((item) => (
                <button 
                    key={item.id}
                    draggable 
                    onClick={() => onSelect(item)}
                    onDragStart={(e) => {
                        console.log("drag start!!", item);
                        e.dataTransfer.effectAllowed = "move";
                        e.dataTransfer.setData("text/plain", item.id);
                    }}
                >
                    <img src={item.imageSource} alt={item.name} />
                </button>
            ))}
        </div>
    );
};