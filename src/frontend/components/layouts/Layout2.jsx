import React, { useState, useEffect } from 'react';
import editorFunction from '../../../editor/states/editorStore';
import * as TsControls from '../../../common/components/controls/tsControls';
const {saveSettings} = editorFunction();

const register_controls = () => {
    const range = {
        min: 0,
        max: 100
    }
    return(
        <>
        <TsControls.TsDivider />
        <TsControls.TsSlider
          label="Slider"
          range={range}
          value={5}
        //   onChange={(value) => saveSettings('newslider.default', value)}
        />
        </>
    )
};

function Layout2({ settings, layoutType, imageUrl, title, subtitle, description, socialIcons }) {

    const get_name = () => {
        return 'New Card';
    };

    const layoutName = get_name();

    const render = () => {
        return 'New Card';
    };

    return (
        <>
        <h1>{layoutName}</h1>        
        </>
    );
}

export default Layout2;

export { register_controls };