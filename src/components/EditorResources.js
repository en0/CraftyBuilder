import React from "react";
import EditorResourcesToolbar from "./EditorResourcesToolbar";
import EditorResourcesPanel from "./EditorResourcesPanel";
import EditorResourcesTable from "./EditorResourcesTable";

export default function() {

    const onSelectClick = () => {};

    const rowItems = [
        { minecraftId: "minecraft:piston", displayName: "Piston", quantity: 16, notes: null, selected: true },
        { minecraftId: "minecraft:chest", displayName: "Chest", quantity: 34, notes: "Storage", selected: false },
        { minecraftId: "minecraft:hopper", displayName: "Hopper", quantity: 68, notes: "Sorter", selected: false },
    ];

    return (
        <div>
            <EditorResourcesToolbar />
            <EditorResourcesTable items={rowItems} onSelect={onSelectClick} />
            <EditorResourcesPanel />
        </div>
    );
}
