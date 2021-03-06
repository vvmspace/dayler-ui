import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Icon from '../Icon';
import styles from './styles.styl';

export default class Avatar extends Component {
    static propTypes = {
        image: PropTypes.string,
        innerStyle: PropTypes.object,
        name: PropTypes.string,
        alwaysHideName: PropTypes.bool,
        prevenHideName: PropTypes.bool,
        size: PropTypes.number.isRequired,
        style: PropTypes.object,
    };

    static defaultProps = {
        innerStyle: {},
        name: '',
        alwaysHideName: false,
        prevenHideName: false,
        size: 120,
        style: {},
    };

    render() {
        const { image, innerStyle, name, alwaysHideName, prevenHideName, size, style, ...props } = this.props;

        const elementStyle = { width: size, height: size };
        const fontStyle = { fontSize: size * 0.34, top: size > 70 ? 5 : 2 };
        const heightIndex = size > 100 ? 1.2 : 1.4;
        const iconSize = size / 2;
        const imageStyle = { width: size - 4, height: size - 4 };
        const isNameShown = name && (prevenHideName || size > 70);

        const containerStyle = {
            height: isNameShown ? size * heightIndex : size,
            width: size,
        };

        const IconAvatar = (
            <div className={styles.iconAvatar} style={elementStyle}>
                <Icon name="user" size={iconSize} />
            </div>
        );

        const FontAvatar = name.length ? (
            <div className={styles.fontAvatar} style={elementStyle}>
                <span className={styles.iconHolder} style={fontStyle}>
                    {name.toUpperCase().charAt(0) + name.toUpperCase().charAt(1)}
                </span>
            </div>
        ) : null;

        const ImageAvatar = image ? (
            <div className={styles.imageAvatar} style={elementStyle}>
                <img className={styles.image} src={image} alt={name || ''} style={imageStyle} />
            </div>
        ) : null;

        return (
            <div className={styles.container} style={{ ...containerStyle, ...style }} {...props}>
                {ImageAvatar || FontAvatar || IconAvatar}
                {!alwaysHideName ? isNameShown ? <span className={styles.name} style={innerStyle}>{name}</span> : null : null}
            </div>
        );
    }
}
