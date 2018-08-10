import React from 'react';
import Radium, { StyleRoot } from 'radium';
import Subheader from './subheader';

import RadioButtonContainer from './radiobuttons/containers/RadioButtons';

const styles = {

}

@Radium
class Main extends React.Component {
    render(){
        return(
            <StyleRoot style={styles}>
                <Subheader />

                <RadioButtonContainer />
            </StyleRoot>
        );
    }
}

export default Main;
