import React, { Component } from 'react';

import style from './style.styl';

export default class SwitchesRoute extends Component {
    render() {
        return (
            <div className={style.container}>
                <div className={style.header}>
                    <span className={style.title}>Switches</span>
                    <span className={style.description}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span>
                </div>
            </div>
        );
    }
}
