import React from "react";
import EditorMenuContainer from "../containers/EditorMenuContainer";

export default function({match}) {
    const { id } = match.params;
    return (
        <div>
            <EditorMenuContainer />
        </div>
    );
};
