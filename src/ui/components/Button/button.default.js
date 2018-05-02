import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './styles.styl';

export default class Button extends Component {
    static propTypes = {
        color: PropTypes.oneOf(['dark', 'red', 'green', 'yellow']),
        title: PropTypes.string.isRequired,
        type: PropTypes.string,
    };

    static defaultProps = {
        type: 'button',
    }

    handleMouseDown = event => {
        const { offsetWidth, offsetHeight } = this.button;
        const size = Math.max(offsetWidth, offsetHeight);

        this.ripple.classList.remove(styles.animate);
        this.ripple.style.height = size + 'px';
        this.ripple.style.width = size + 'px';
        this.ripple.style.left = event.pageX - this.button.offsetLeft - size/2 + 'px';
        this.ripple.style.top = event.pageY - this.button.offsetTop - size/2 + 'px';
        this.ripple.classList.add(styles.animate);
    }

    render() {
        const { color, title, type, ...props } = this.props;

        return (
            <button className={`${styles.button} ${styles[color]}`}
                onMouseDown={this.handleMouseDown}
                type={type}
                ref={referance => this.button = referance}
                {...props}>
                <div className={styles.ripple} ref={referance => this.ripple = referance}></div>
                <div className={styles.title}>{title}</div>
            </button>
        );
    }
}
