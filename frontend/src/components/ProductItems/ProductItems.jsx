import React from 'react';
import styles from './styles.module.scss';
import BagIcon from '@icons/svgs/bag.svg'
import HeartIcon from '@icons/svgs/heart.svg'
import ReloadIcon from '@icons/svgs/reload.svg'
import ViewIcon from '@icons/svgs/view.svg'

const ProductItems = ({src, prevSrc, name, price}) => {
    const {box_img, show_img_when_hover, show_function_when_hover, box_icon, title, price_pr} = styles
    return (
        <div>
            <div className={box_img}>
                <img src={src} alt="" />
                <img className={show_img_when_hover} src={prevSrc} alt="" />
                <div className={show_function_when_hover}>
                    <div className={box_icon}>
                        <img src={BagIcon} alt="" />
                    </div>
                    <div className={box_icon}>
                        <img src={HeartIcon} alt="" />
                    </div>
                    <div className={box_icon}>
                        <img src={ReloadIcon} alt="" />
                    </div>
                    <div className={box_icon}>
                        <img src={ViewIcon} alt="" />
                    </div>
                </div>
            </div>
            <div className={title}>
                {name}
            </div>
            <div className={price_pr}>${price}</div>
        </div>
    );
};

export default ProductItems;