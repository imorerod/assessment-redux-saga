import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import DropdownList from 'react-widgets/lib/DropdownList';

const mapStateToProps = reduxState => ({
    reduxState,
});

class NewAnimalForm extends Component {
    state = {
        newAnimal: {
            species_name: '',
            class: ''
        }
    }


    handleNameChange = event => {
        this.setState({
            newAnimal: {
                ...this.state.newAnimal,
                species_name: event.target.value,
                class: event.target.value
            }
        });
    }

    addNewAnimal = event => {
        event.preventDefault();
        this.props.dispatch({ type: 'POST_ANIMAL', payload: this.state.newAnimal })
        this.setState({
            newAnimal: {
                species_name: '',
                class: ''
            }
        });
    }

    render() {
        const renderDropdownList = ({ input, data, valueField, textField }) =>
            <DropdownList {...input}
            data={data}
            valueField={valueField}
            textField={textField}
            onChange={input.onChange} />

            const class_name = [
                { class: 'Mammal'},
                { class: 'Green'},
                { class: 'Blue'},
                { class: 'Reptile'},
                { class: 'Amphibian'}
            ]
        
        
        return (
            <div>
                <h3>Add New Animal</h3>
                <form onSubmit={this.addNewAnimal}>
                    <input type='text' value={this.state.newAnimal.species_name} placeholder="Species" onChange={this.handleNameChange} />
                    <div>
                        <label>Favorite Color</label>
                            <Field
                            name="class"
                            component={renderDropdownList}
                            data={class_name}
                            valueField="value"
                            textField="class"/>
                    </div>
                    <input type='submit' value='Add New Plant' />
                </form>
            </div>
        );
    }
}


export default connect(mapStateToProps)(NewAnimalForm);
