import React from 'react'
import "../../styles/ButtonStyles.css";
import Download from '../../image/svg/Download';

const DownloadButton = () => {
    return (
        <>
            <button class="download-button" type="button">
                <span class="button__text">Download CV</span>
                <span class="button__icon"><Download /></span>
            </button>
        </>
    )
}

export default DownloadButton