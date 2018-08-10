import React from 'react';
import Radium, { StyleRoot } from 'radium';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';

const styles = {
    container: {
        width: '30%',
        radioButton:{
        }
    }
    
};


@Radium
class ThirdGroupRadioButton extends React.Component{

    

    mapData(){
        const { data, selectedItem } = this.props;
        console.log(selectedItem)
        const isDisabled = selectedItem.length < 2;
        return data.map(x => {
            return(
                <RadioButton
                    key={x.id}
                    value={x.id}
                    label={x.value}
                    style={styles.container.radioButton}
                    disabled={isDisabled}
                />
            )
        })
    }

    onChange(event, value){
       
        const { onSetSelectedItem , selectedItem} = this.props;

        //if not in selectedItem
        if(!selectedItem.some(x=> x == value)){
            onSetSelectedItem(value, 3);
        }
    }

    render(){
        return(
            <StyleRoot style={styles.container}>
                <RadioButtonGroup 
                    ref="third-group-radio-button" 
                    name="third-group-radio-button" 
                    onChange={this.onChange.bind(this)}
                    children={
                        this.mapData()
                    }
                />

            </StyleRoot>
           
        );
    }
}

export default ThirdGroupRadioButton;