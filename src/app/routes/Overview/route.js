import React, { Component } from 'react';

import style from './style.styl';

export default class OverviewRoute extends Component {
    render() {
        return <div className={style.container}>
            <div className={style.header}>
                <span className={style.title}>Overview</span>
                <span className={style.description}>
                    Components usage overview
                </span>
            </div>
        </div>;
    }
}