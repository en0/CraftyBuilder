import {ADD_NEW_RESOURCE} from "../actions/ProjectActions";

const initialState = {

    "f706ad4a-c735-4fd6-825d-188832bea3d7": {
        title: "Ghast Farm",
        desc: "Ilmago's Ghast farm for all your ghast tear needs.",
        image: "https://i.ytimg.com/vi/Dqm75ezNKJM/maxresdefault.jpg",
        video: { ref: "https://www.youtube.com/embed/SbtZ3geJ64E", type: "youtube" },
        resources: [],
    },

    "b2d5125c-8f96-4d06-89ca-636fdfe3a508": {
        title: "Tree Farm",
        desc: "MoboJumbo's TNT Powered Tree Farm for all your oak wood needs.",
        image: "https://gamepedia.cursecdn.com/minecraft_gamepedia/thumb/d/d6/Oak_Trees.png/300px-Oak_Trees.png?version=6492abe05a911c41ccc5ad1863c10175",
        video: { ref: "https://www.youtube.com/embed/D67YrTG0SGM", type: "youtube" },
        resources: [],
    },

    "cd33a462-9f89-412a-95e0-7cf7d457a400": {
        title: "Sugar Cane",
        desc: "En0_Nix's Supper Simple Sugarcane farm.",
        image: "https://previews.123rf.com/images/peerayotwongsuwan/peerayotwongsuwan1212/peerayotwongsuwan121200023/16673451-sugarcane-farm.jpg",
        resources: [
            { mcid: "minecraft:piston", quantity: 16 },
            { mcid: "minecraft:chest", quantity: 34, notes: "Storage" },
            { mcid: "minecraft:hopper", quantity: 68, notes: "Sorter" },
        ]
    },
};

export default function(state = initialState, action) {
    switch (action.type) {
        case ADD_NEW_RESOURCE:
            return addResourceToProject(state, action.payload);
        default:
            return state;
    }
}

function addResourceToProject(state, { projectId, resource }) {
    return {
        ...state,
        [projectId]: {
            ...state[projectId],
            resources: [...state[projectId].resources, {
                mcid: resource.mcid,
                quantity: resource.quantity || 1,
                notes: resource.notes || null
            }]
        }
    };
}

