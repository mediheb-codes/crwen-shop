import React from 'react';

import './ButtonInput.scss';

const CustomButton = ({ children,isGoogleSignIn ,inversed,  ...otherProps }) => (
    <button className={`${inversed? 'inversed' : ''}${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} {...otherProps}>
        {children}
    </button>
);

export default CustomButton;