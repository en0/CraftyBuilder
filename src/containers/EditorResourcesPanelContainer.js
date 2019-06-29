import {connect} from "react-redux";
import EditorResourcesPanel from "../components/EditorResourcesPanel";

const resources = [
    { mcid: "minecraft:piston", quantity: 16 },
    { mcid: "minecraft:chest", quantity: 34, notes: "Storage" },
    { mcid: "minecraft:hopper", quantity: 68, notes: "Sorter" },
];

const selectedIndex = 0;

const mapStateToProps = state => {
    const item = resources[selectedIndex];
    return ({
        resource: item && {...state.components[item.mcid], ...item}
    });
};

const mapDispatchToProps = () => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(EditorResourcesPanel);
