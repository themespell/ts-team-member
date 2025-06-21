import globalSettings from '../../utils/globalSettings';
import './style.css';

function TsProBadge({ heading, description, label, ctalink, onClick }) {
    return (
        <span className="bg-amber-500 text-white text-xs px-2 py-0.5 rounded font-medium">PRO</span>
    );
}

export default TsProBadge;