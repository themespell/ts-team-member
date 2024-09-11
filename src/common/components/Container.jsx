import TableNav from "./TableNav";
import DataTable from "./DataTable";

function Container({ type, title }) {
  return (
    <>
      <TableNav type={type} title={title} />
      <DataTable type={type} title={title} />
    </>
  );
}

export default Container;