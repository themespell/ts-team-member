import { TsButton } from "../../common/components/controls/tsControls";

function Topbar() {
    return (
        <>
        <div class="flex flex-col justify-end bg-black p-4">
          <TsButton 
          label="Publish"
          />
      </div>
        </>
    );
}

export default Topbar;