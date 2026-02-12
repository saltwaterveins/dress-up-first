"use client";

export default function DragDropTest() {
  return (
    <div style={{ padding: 40 }}>
      <div
        draggable
        onDragStart={() => console.log("DRAG START")}
        style={{
          width: 100,
          height: 100,
          background: "hotpink",
          marginBottom: 40,
        }}
      >
        drag me
      </div>

      <div
        onDragOver={(e) => e.preventDefault()}
        onDrop={() => console.log("DROP FIRED")}
        style={{
          width: 300,
          height: 300,
          background: "lightblue",
        }}
      >
        drop here
      </div>
    </div>
  );
}