import React from 'react';
import { useIsListLayout } from "../features/switcherSlice";

const ContentWrap = (props) => {
    const isListLayout = useIsListLayout();

    return (
        <div className="container pt-4 pb-4">
            <div className={`row row-cols-1 g-4 ${isListLayout ? '' : 'row-cols-lg-2'}`}>
                {props.children}
            </div>
        </div>
    );
};

export default ContentWrap;