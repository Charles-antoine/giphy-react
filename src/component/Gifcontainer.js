import React, { useState } from "react";
import Icon from '@material-ui/core/Icon';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { TweenMax, Power2 } from 'gsap/TweenMax';


export const Gifcontainer = (props) => {
    const [value, setValue] = useState('');
    const [copied, setCopied] = useState(false);

    return (
        <div className="gifs__container">
            <img src={props.link} alt={props.title}/>
            <div className="hover">
                <CopyToClipboard text={props.embed_url} onCopy={(e) => {setCopied(!copied);props.triggerParentUpdate(e);}}>
                    <button className="icon">
                        <Icon className="share">share</Icon>
                    </button>
                </CopyToClipboard>
                <a href={props.url} target="_blank" rel="noopener noreferrer" className="icon">
                    <Icon className="open">open_in_new</Icon>
                </a>
            </div>
        </div>

    );
}