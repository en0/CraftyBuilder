const initialState = {
    "editor:new": { name: "New Component", itemsPerStack: 0, itemsPerShulker: 0 },
    "minecraft:piston": { name: "Piston", itemsPerStack: 64, itemsPerShulker: 64 * 27 },
    "minecraft:chest": { name: "Chest", itemsPerStack: 64, itemsPerShulker: 64 * 27 },
    "minecraft:hopper": { name: "Hopper", itemsPerStack: 64, itemsPerShulker: 64 * 27 },
};

export default function(state = initialState, action) {
    switch(action.type) {
        default:
            return state;
    }
}

