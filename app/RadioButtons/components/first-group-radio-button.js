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
class FirstGroupRadioButton extends React.Component{

    

    mapData(){
        const { data } = this.props;
        return data.map(x => {
            return(
                <RadioButton
                    key={x.id}
                    value={x.id}
                    label={x.value}
                    style={styles.container.radioButton}
                />
            )
        })
    }

    onChange(event, value){
       
        const { onSetSelectedItem , selectedItem, isCompatible} = this.props;
        if(selectedItem.length == 0){
            onSetSelectedItem(value, 1);
        }else{
            //check if compatible
            if(isCompatible(value)){
                //if not in selectedItem
                if(!selectedItem.some(x=> x == value)){
                    onSetSelectedItem(value, 1);
                }
            }
        }


    }

    render(){
        return(
            <StyleRoot style={styles.container}>
                <RadioButtonGroup 
                    ref="first-group-radio-button" 
                    name="first-group-radio-button" 
                    onChange={this.onChange.bind(this)}
                    children={
                        this.mapData()
                    }
                />

            </StyleRoot>
           
        );
    }
}

export default FirstGroupRadioButton;