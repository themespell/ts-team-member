import TableNavItems from "./helper/TableNavItems";
import FormContainer from './helper/form/FormContainer.jsx';
import useAdminStore from '../../admin/states/admin-store.js';
import { TsModal } from './controls/tsControls.js';

function TableNav({type, title}) {
  const { isOpen, closeShowcaseModal } = useAdminStore();
  return (
    <div className="">
          <h4 className="text-xl font-semibold mb-4">{title}</h4>
          <div className="flex justify-between">
            <TableNavItems title={title} />

            <TsModal
              actionType='create'
              formSupport={true}
              name={title}
              type={type}
              isOpen={isOpen}
              isClose={closeShowcaseModal}
              width={650} />
        </div>
    </div>
  );
}

export default TableNav;