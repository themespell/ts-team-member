import DetailsModal from './DetailsModal';
import DetailsDrawer from './DetailsDrawer.jsx';

function Details({ settings, member }) {
    if (!!settings.showcaseDetails?.enable !== true) {
        return null;
    }

    switch (settings.selectedDetails?.value) {
        case 'popup':
            return (
                <DetailsModal
                    member={member}
                />
            );
        case 'drawer':
            return (
                <DetailsDrawer
                    member={member}
                />
            );
        default:
            return null;
    }
}

export default Details;