import React, {Component} from 'react';
import './style.css';
import styles from './Mystyle.module.css'

class Stylesheet extends Component {

    render() {
        const header = this.props.header ? 'header': '';
        return <div>
            <h1 className={`${header} header-font`}>Hello User</h1>
            <h1 className={styles.txtColor}>Check Module CSS behav.</h1>
        </div>
    }
}

export default Stylesheet;