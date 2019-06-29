import React from "react";
import EditorResourcesTable from "../components/EditorResourcesTable";
import {connect} from "react-redux";

const resources = [
    { minecraftId: "minecraft:piston", quantity: 16 },
    { minecraftId: "minecraft:chest", quantity: 34, notes: "Storage" },
    { minecraftId: "minecraft:hopper", quantity: 68, notes: "Sorter" },
];

const mapStateToProps = state => ({
    items: resources.map(r => ({ ...state.components[r.minecraftId], ...r })),
    selectedIndex: 0,
});

const mapDispatchToProps = () => ({
    onRowClick: () => {}
});

export default connect(mapStateToProps, mapDispatchToProps)(EditorResourcesTable);
