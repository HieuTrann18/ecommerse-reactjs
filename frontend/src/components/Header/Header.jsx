import React, { useEffect, useState } from 'react';
import styles from './styles.module.scss'
import BoxIcon from './BoxIcons/BoxIcon'
import Menu from './Menu/Menu';
import Logo from '@icons/images/Logo-retina.png'
import reloadIcon from '@icons/svgs/reload.svg'
import heartIcon from '@icons/svgs/heart.svg'
import cartIcon from '@icons/svgs/cart.svg'
import { dataIcons, dataMenu } from './constant';
import useScrollHandling from '../../hooks/useScrollHandling';
import classNames from 'classnames';

const Header = () => {
    const { container_box_icons, container_box_menu, container_header, container_box, container, fixed_header, top_header } = styles

    const {scrollPosition} = useScrollHandling()
    const [fixedHeader, setFixedHeader] = useState(false)

    useEffect(() => {
        // if(scrollPosition > 80){
        //     setFixedHeader(true)
        // }else{
        //     setFixedHeader(false)
        // }
        scrollPosition > 80 ? setFixedHeader(true) : setFixedHeader(false)
    }, [scrollPosition])

    return (
        <div className={classNames(container, top_header, {
            [fixed_header]: fixedHeader
        })}>
              <header className={container_header}>
            <div className={container_box}>
                <div className={container_box_icons}>
                    {dataIcons.map((i, index) => {
                        return <BoxIcon type={i.type} href={i.href} />
                    })}
                </div>
                <div className={container_box_menu}>
                    {dataMenu.slice(0, 3).map((i, index) => {
                        return <Menu content={i.content} href={i.href} />
                    })}
                </div>
            </div>
            <div>
                <img src={Logo} style={{ width: '153px', height: '53px' }} alt="" />
            </div>
            <div className={container_box}>
                <div className={container_box_menu}>
                    {dataMenu.slice(3, dataMenu.length).map((i, index) => {
                        return <Menu content={i.content} href={i.href} />
                    })}
                </div>
                <div className={container_box_icons}>
                    <img width={26} height={26} src={reloadIcon} alt="reloadIcon" />
                    <img width={26} height={26} src={heartIcon} alt="heartIcon" />
                    <img width={26} height={26} src={cartIcon} alt="cartIcon" />
                </div>
            </div>
        </header>
        </div>
      
    );
};

export default Header;