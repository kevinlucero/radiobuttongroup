import React from 'react';

import Radium, { StyleRoot } from 'radium';

const styles = {
    container: {
        height: '80px',
        backgroundColor: 'lightgray',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }
}

@Radium
class Subheader extends React.Component{

    render(){
        return(
            <StyleRoot style={styles.container}>
                {/* //<h1>Radio Button Groups</h1> */}
            </StyleRoot>
        )
    }
}

export default Subheader;