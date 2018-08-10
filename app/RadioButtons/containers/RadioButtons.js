import React from 'react';
import Radium, { StyleRoot } from 'radium';


import Paper from 'material-ui/Paper';
import Notifications from 'react-notification-system-redux';

//dumb component
import FirstGroupRadioButton from '../components/first-group-radio-button';
import SecondGroupRadioButton from '../components/second-group-radio-button';
import ThirdGroupRadioButton from '../components/third-group-radio-button';

const styles = {
    container : {
        margin: '20px 100px 20px',

        paper:{
            padding: '50px',
            display: 'flex',
            alignItems: 'flex-start',
        }
    }
}

const radioGroups = {
    first: 1,
    second: 2,
    third: 3
}



@Radium
class RadioButton extends React.Component{
    constructor(props){
        super(props);

        this.state ={
            radioButtonData : [],
            selectedItem: []
        }
    }

    componentWillMount(){
        this.setState({
            radioButtonData: this.getInitialData()
        })
    }

    getInitialData(){
        return [
            [
              { id: '101', value: 'Vegetarian' },
              { id: '102', value: 'Nut allergy' },
              { id: '103', value: 'Halal' }
            ],
            [
              { id: '201', value: 'Cashew chicken' },
              { id: '202', value: 'Sweet and sour pork' },
              { id: '203', value: 'Stir fried Tofu' },
              { id: '204', value: 'Vegetable fried rice' },
              { id: '205', value: 'Pad Thai' },
              { id: '206', value: 'Massaman beef' },
            ],
            [
              { id: '301', value: 'Peanut sauce' },
              { id: '302', value: 'Oyster sauce' },
              { id: '303', value: 'Vegetable spring rolls' },
              { id: '304', value: 'Steamed rice' },
            ],
          ];
    };

    setSelectedRadioButtonGroup(value, key){
        const valueString = value.toString();
        
        this.state.selectedItem = this.state.selectedItem.filter(x => x.toString().charAt(0) != key)
        

        const currenItem = [...this.state.selectedItem , parseInt(value)];
        //if(value.)

        this.setState({
            selectedItem: currenItem
        }, ()=> { this.state.selectedItem = currenItem});
        console.log(this.state.selectedItem);
    }

    isCompatible(value){
        value = parseInt(value);
        const currentItem = this.state.selectedItem;
        let isIncompatible = true;
        const for101 = [201,202, 206,302];
        const for102 = [201, 301];
        const for304 = [204,205];

        if(value == 101){
            isIncompatible = !currentItem.some(x => for101.some(c => c == x));
        }else if (value == 102){
            isIncompatible = currentItem.some(x => for102.some(c => c == x));
        }else if (value == 103){
            isIncompatible = !currentItem.some(x => x == 202);
        }else if(value == 204 || value == 205){
            isIncompatible = !currentItem.some(x => x == 304);
        }else if (for101.some(x => x == value)){
            isIncompatible = !currentItem.some(x => x == 101);
        }else if (for102.some(x => x == value)){
            isIncompatible = !currentItem.some(x => x == 102);
        }
        else if(value == 304){
            isIncompatible = !currenItem.some(x => for304.some(c => c = x));
        }

        if(!isIncompatible){
            
            alert('incompatible');
            return false;
        }

        return true;
    }

    render(){
        return(
            <StyleRoot style={styles.container}>
                <Paper style={styles.container.paper}>
                    <FirstGroupRadioButton 
                        data={ this.state.radioButtonData[0] }  
                        onSetSelectedItem={this.setSelectedRadioButtonGroup.bind(this)}
                        selectedItem={this.state.selectedItem}
                        isCompatible={this.isCompatible.bind(this)}

                    /> 

                    <SecondGroupRadioButton 
                        data={ this.state.radioButtonData[1] }  
                        onSetSelectedItem={this.setSelectedRadioButtonGroup.bind(this)}
                        selectedItem={this.state.selectedItem}
                        isCompatible={this.isCompatible.bind(this)}

                    /> 
                    <ThirdGroupRadioButton 
                        data={ this.state.radioButtonData[2] }  
                        onSetSelectedItem={this.setSelectedRadioButtonGroup.bind(this)}
                        selectedItem={this.state.selectedItem}
                        isCompatible={this.isCompatible.bind(this)}
                    /> 
                </Paper>
            </StyleRoot>
        );
    }
}

export default RadioButton;
