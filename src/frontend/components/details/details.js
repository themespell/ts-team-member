import DetailsModal from "./DetailsModal.jsx";
import DetailsDrawer from "./DetailsDrawer.jsx";

const componentMap = {
    drawer: DetailsDrawer,
    popup: DetailsModal,
};

export function loadDetailsComponent(componentType) {
    const Component = componentMap[componentType];

    if (!Component) {
        console.error(`Component not found for type: ${componentType}`);
        return null; // Return null if the component type is not found
    }

    return Component;
}