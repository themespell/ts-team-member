import TableNavItems from "./helper/TableNavItems";
import FormContainer from './helper/form/FormContainer.jsx';
import useAdminStore from '../../admin/states/admin-store.js';
import { TsModal } from './controls/tsControls.js';

function TableNav({type, title}) {
  const { isOpen, closeShowcaseModal } = useAdminStore();
  return (
    <div className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-700">{title}</h2>
          <div className="flex justify-between mt-4">
            <TableNavItems title={title} />

            <TsModal
              actionType='create'
              formSupport={true}
              name={title}
              type={type}
              isOpen={isOpen}
              isClose={closeShowcaseModal}
              width={550} />
        </div>
    </div>
  );
}

export default TableNav;