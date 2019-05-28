import React, { Component } from 'react';
import { connect } from 'react-redux';

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

    componentDidMount() {
        // this.getElements();
        this.props.dispatch({
          type: 'SET_ZOO'
        })
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
        return (
            <div>
                <h3>Add New Animal</h3>
                <pre>{JSON.stringify(this.state)}</pre>
                <form onSubmit={this.addNewAnimal}>
                    <input type='text' value={this.state.newAnimal.species_name} onChange={this.handleNameChange} />
                    <input type='text' value={this.state.newAnimal.class} onChange={this.handleNameChange} />
                    <input type='submit' value='Add New Plant' />
                </form>
            </div>
        );
    }
}


export default connect(mapStateToProps)(NewAnimalForm);
