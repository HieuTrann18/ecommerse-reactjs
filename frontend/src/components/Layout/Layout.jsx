import React from 'react';
import styles from './styles.module.scss'

const Layout = ({children}) => {
    const {wrap_layout, container} = styles

    return (
       <main className={wrap_layout}>
            <div className={container}>{children}</div> 
       </main>
    );
};

export default Layout;