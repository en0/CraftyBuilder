import React from "react";
import EditorDetailsContainer from "../containers/EditorDetailsContainer";
import EditorMaterialsContainer from "../containers/EditorMaterialsContainer";
import EditorCraftingContainer from "../containers/EditorCraftingContainer";
import EditorResourcesView from "./EditorResourcesView";

export default function({selectedView}) {
    switch(selectedView) {
        case "edit:details":
            return (<EditorDetailsContainer />);
        case "edit:resources":
            return (<EditorResourcesView />);
        case "edit:materials":
            return (<EditorMaterialsContainer />);
        case "edit:crafting":
            return (<EditorCraftingContainer />);
        default:
            return (<h2>Not Found</h2>);
    }
};
