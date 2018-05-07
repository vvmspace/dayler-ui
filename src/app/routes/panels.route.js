import React, { Component } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter/prism';
import { coy } from 'react-syntax-highlighter/styles/prism';
import { Panel } from 'ui';

import styles from '../styles.styl';

export default class PanelsRoute extends Component {
    render() {
        return (
            <div className={styles.route}>
                <div className={styles.routeHeader}>
                    <div className={styles.routeTitle}>Panels</div>
                </div>
                <div className={styles.routeBody}>
                    <Panel outerStyle={{ marginBottom: 20 }}>
                        <p>Empty Panel</p>
                        <hr style={{ margin: '20px 0' }}/>
                        <SyntaxHighlighter language='jsx' style={coy} wrapLines={true}>
                            {`import { Panel } from 'dayler-ui';\n\n<Panel>\n    ...\n</Panel>`}
                        </SyntaxHighlighter>
                    </Panel>

                    <Panel title="panel with title" outerStyle={{ marginBottom: 20 }}>
                        <SyntaxHighlighter language='jsx' style={coy} wrapLines={true}>
                            {`import { Panel } from 'dayler-ui';\n\n<Panel title="panel with title">\n    ...\n</Panel>`}
                        </SyntaxHighlighter>
                    </Panel>

                    <Panel title="panel with title and icon" icon="code" outerStyle={{ marginBottom: 20 }}>
                        <SyntaxHighlighter language='jsx' style={coy} wrapLines={true}>
                            {`import { Panel } from 'dayler-ui';\n\n<Panel title="panel with title and icon" icon="code">\n    ...\n</Panel>`}
                        </SyntaxHighlighter>
                    </Panel>
                </div>
            </div>
        );
    }
}
