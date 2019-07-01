import {ADD_NEW_RESOURCE, REMOVE_RESOURCE, SET_RESOURCE_FIELD} from "../actions/ProjectActions";
import {SET_RESOURCES_PAGE_INDEX} from "../actions/EditorActions";

const initialState = {
    "f706ad4a-c735-4fd6-825d-188832bea3d7": [],
    "b2d5125c-8f96-4d06-89ca-636fdfe3a508": [],
    "cd33a462-9f89-412a-95e0-7cf7d457a400": [
        { mcid: "minecraft:piston", quantity: 16 },
        { mcid: "minecraft:chest", quantity: 34, notes: "Storage" },
        { mcid: "minecraft:hopper", quantity: 68, notes: "Sorter" },
        { mcid: "minecraft:hopper", quantity: 68, notes: "Sorter" },
        { mcid: "minecraft:piston", quantity: 16 },
        { mcid: "minecraft:chest", quantity: 68, notes: "Sorter" },
        { mcid: "minecraft:hopper", quantity: 68, notes: "Sorter" },
        { mcid: "minecraft:hopper", quantity: 68, notes: "Sorter" },
        { mcid: "minecraft:piston", quantity: 16 },
        { mcid: "minecraft:chest", quantity: 68, notes: "Sorter" },
        { mcid: "minecraft:hopper", quantity: 68, notes: "Sorter" },
    ],
};

export default function(state=initialState, action) {
    switch (action.type) {
        case ADD_NEW_RESOURCE:
            return { ...state, ...addResource(state, action.payload) };
        case SET_RESOURCE_FIELD:
            return { ...state, ...setResourceField(state, action.payload) };
        case REMOVE_RESOURCE:
            return { ...state, ...removeResource(state, action.payload) };
        default:
            return state;
    }
}

function addResource(state, { projectId, resource }) {
    const resources = state[projectId];
    return { [projectId]: [
        {
            mcid: resource.mcid,
            quantity: resource.quantity || 1,
            notes: resource.notes || null
        }, ...resources
    ] };
}

function setResourceField( state, { projectId, index, key, value }) {
    const resources = state[projectId];
    const resource = resources[index];
    return { [projectId]: [
        ...resources.slice(0, index),
        {
            mcid: resource.mcid,
            quantity: resource.quantity || 1,
            notes: resource.notes || null,
            [key]: value
        },
        ...resources.slice(index + 1),
    ]};
}

function removeResource(state, { projectId, index }) {
    const resources = state[projectId];
    return { [projectId]: [
            ...resources.slice(0, index),
            ...resources.slice(index + 1),
        ]};
}
