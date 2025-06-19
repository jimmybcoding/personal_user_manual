"use client"
import { useState, useEffect } from 'react';
import useResponsiveWidth from './useResposiveWidth.jsx';
import HamburgerMenu from './hamburger.jsx';
import AltMenu from './altMenu.jsx';

const Nav = () => {
    const windowWidth = useResponsiveWidth();
    const [hasMounted, setHasMounted] = useState(false);

    //prevents hydration error
    useEffect(() => {
        setHasMounted(true);
    }, []);

    if (!hasMounted) {
        return null;
    }

    return (
        <>
            {windowWidth > 700 ? <AltMenu /> : <HamburgerMenu />}
        </>
    );
};

export default Nav;

