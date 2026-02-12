"use client";

import styles from "@/app/components/Doll/doll.module.scss";
import { ClothingItem } from "@/app/types/dressup";

type Props = {
    wornItems: ClothingItem[];
    onDropItem: (item: ClothingItem) => void;
};

export default function Doll({ wornItems, onDropItem }: Props) {
    function handleDrop(e: React.DragEvent) {
        console.log("DROP FIRED");
        e.preventDefault();

        const itemId = e.dataTransfer.getData("text/plain")
        console.log("drop data:", itemId);

        if(!itemId) return;

        const item = wornItems.find((i) => i.id === itemId);
        if(!item) return;

        onDropItem(item);
    }
    
    return(
        <div 
            className={styles.doll}
            onDragOver={(e) => e.preventDefault()}
            onDrop={handleDrop}
        >
            <img
                src="/doll/dollBase.png"
                className={styles.base}
                alt="doll base"
            />

            {[...wornItems]
                .sort((a, b) => a.zIndex - b.zIndex)
                .map((item) => (
                    <img
                        key={item.id}
                        src={item.imageSource}
                        className={styles.outfit}
                        alt={item.name}
                    />
                ))
            }
        </div>
    );
}
