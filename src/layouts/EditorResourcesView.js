import React from "react";
import EditorResourcesTableContainer from "../containers/EditorResourcesTableContainer";
import EditorResourcesToolbarContainer from "../containers/EditorResourcesToolbarContainer";
import EditorResourcesPanelContainer from "../containers/EditorResourcesPanelContainer";

export default function() {
    return (
        <div>
            <EditorResourcesToolbarContainer />
            <EditorResourcesTableContainer />
            <EditorResourcesPanelContainer />
        </div>
    )
}