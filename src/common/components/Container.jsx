import TableNav from "./TableNav";
import DataTable from "./DataTable";

function Container({ type, title, editor }) {
  return (
    <>
      <TableNav type={type} title={title} />
      <DataTable type={type} title={title} editor={editor} />
    </>
  );
}

export default Container;