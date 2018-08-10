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
class SecondGroupRadioButton extends React.Component{

    

    mapData(){
        const { data , selectedItem} = this.props;
        console.log(selectedItem)
        const isDisabled = selectedItem.length < 1;
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
       
        const { onSetSelectedItem , selectedItem, isCompatible } = this.props;

        //check if compatible
        if(isCompatible(value)){
            //if not in selectedItem
            if(!selectedItem.some(x=> x == value)){
                onSetSelectedItem(value, 2);
            }
        }
    }

    render(){
        return(
            <StyleRoot style={styles.container}>
                <RadioButtonGroup 
                    ref="second-group-radio-button" 
                    name="second-group-radio-button" 
                    onChange={this.onChange.bind(this)}
                    err
                    children={
                        this.mapData()
                    }
                />

            </StyleRoot>
           
        );
    }
}

export default SecondGroupRadioButton;