import TsColor from "../../../../common/components/controls/TsColor";

function StyleTab(){
    
    return (
        <div>
            <TsColor
            label='Background Color'
            value={'#000'}
            />
            <TsColor
            label='Text Color'
            value={'#000'}
            />
        </div>
    );
}

export default StyleTab;