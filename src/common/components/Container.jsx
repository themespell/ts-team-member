import TableNav from "./TableNav";
import DataTable from "./DataTable";

function Container({ type, title, editor }) {
  return (
    <>
      <TableNav type={type} title={title} />
      <div className="w-full table-responsive rounded-xl">
        <DataTable type={type} title={title} editor={editor} />
      </div>
    </>
  );
}

export default Container;
