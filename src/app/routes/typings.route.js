import React, { Component } from 'react';
import { Panel } from 'ui';

import styles from '../styles.styl';

export default class Typings extends Component {
    render() {
        return (
            <div className={styles.route}>
                <div className={styles.routeHeader}>
                    <div className={styles.routeTitle}>Typings</div>
                </div>
                <div className={styles.routeBody}>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: '200px 200px auto',
                        gridColumnGap: '30px',
                        paddingBottom: 30,
                        marginBottom: 30
                    }}>
                        <Panel title="headings">
                            <h1>Heading 1</h1>
                            <h2>Heading 2</h2>
                            <h3>Heading 3</h3>
                            <h4>Heading 4</h4>
                            <h5>Heading 5</h5>
                            <h6>Heading 6</h6>
                        </Panel>
                        <Panel title="pre">
                            <pre>
                                {`<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>
<h6>Heading 6</h6>`}
                            </pre>
                        </Panel>
                        <Panel title="paragraph">
                            <p>
                                Lorem ipsum dolor sit amet, qualisque efficiendi ea est, an cetero perfecto sea. Eos perfecto scribentur ei. His verear feugait pertinax te, nec te argumentum comprehensam. Mea justo voluptua te, augue choro expetenda no est.
                            </p>
                        </Panel>
                    </div>
                </div>
            </div>
        );
    }
}
