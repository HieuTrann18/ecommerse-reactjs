import React from 'react';
import styles from '../styles.module.scss'
import facebookIcon from '@icons/svgs/facebook.svg'
import instagramIcon from '@icons/svgs/instagram.svg'
import youtubeIcon from '@icons/svgs/youtube.svg'

const BoxIcon = ({type, href}) => {

    const {box_icons} = styles

    const handleRenderIcon = (type) => {
        switch(type){
            case 'facebook':
                return facebookIcon
            case 'instagram':
                return instagramIcon
            case 'youtube':
                return youtubeIcon
        }
    }

    return (
        <div className={box_icons}>
            <img src={handleRenderIcon(type)} alt="" />
        </div>
    );
};

export default BoxIcon;