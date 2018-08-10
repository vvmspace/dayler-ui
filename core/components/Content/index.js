import React, { Component } from 'react';
import PropTypes from 'prop-types';

import style from './style.styl';

export default class Content extends Component {
    static propTypes = {
        children: PropTypes.oneOfType([
            PropTypes.arrayOf(PropTypes.node),
            PropTypes.node,
        ]),
        expanded: PropTypes.bool.isRequired,
    };

    render() {
        const { children, expanded } = this.props;

        return <div className={`${style.container} ${expanded ? style.expanded : null}`}>
            {children}
        </div>;
    }
}