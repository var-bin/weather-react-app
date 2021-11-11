import React from 'react';
import { useIsListLayout } from '../features/switcherSlice';

type Props = {
    className?: string;
};

const ContentWrap: React.FC<Props> = props => {
    const { children } = props;
    const isListLayout = useIsListLayout();

    return (
        <div className="container pt-4 pb-4">
            <div className={`row row-cols-1 g-4 ${isListLayout ? '' : 'row-cols-lg-2'}`}>
                {children}
            </div>
        </div>
    );
};

export default ContentWrap;