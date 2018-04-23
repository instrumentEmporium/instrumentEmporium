import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Header, Card } from 'semantic-ui-react'
import Instrument from '../components/Instrument';

export default class SingleOrder extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            phone: '',
            address1: '',
            address2: '',
            city: '',
            unitedState: '',
            zip: ''
        }
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    componentDidMount() {
        this.props.loadSingleOrder();
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    render() {
        const { singleOrder } = this.props;
        return (
            <Grid style={{
                margin: '2em'
            }}>
                <Grid celled>
                <Grid.Column width={3}>
                    <h3>Name: {singleOrder && singleOrder.firstName}{singleOrder.lastName}</h3>
                </Grid.Column>
                <Grid.Column width={8}>
                    <Grid.Row>
                    <h3>Phone#: {singleOrder && singleOrder.phoneNumber}</h3>
                    </Grid.Row>
                    <Grid.Row>
                    <h3>Address1: {singleOrder && singleOrder.addressLine1}</h3>
                    </Grid.Row>
                    <Grid.Row>
                    <h3>Address2: {singleOrder && singleOrder.addressLine2}</h3>
                    </Grid.Row>
                    <Grid.Row>
                    <h3>City: {singleOrder && singleOrder.city}</h3>
                    </Grid.Row>
                    <Grid.Row>
                        <h3>State: {singleOrder && singleOrder.state}</h3>
                    </Grid.Row>
                    <Grid.Row>
                            <h3>Zip: {singleOrder && singleOrder.zip}</h3>
                    </Grid.Row>
                    <Grid.Row>
                            <h3>UserId: {singleOrder && singleOrder.userId}</h3>         
                    </Grid.Row>
                    <Grid.Row>
                        
                    </Grid.Row>
                </Grid.Column>
                </Grid>
                <Grid celled>
                    <Grid.Column width={3}>
                        <h2>Change Details</h2>
                        <form>
                            <label>
                                <h3>Phone#: </h3>
                                <input onChange={this.handleInputChange} name='phone' value={this.state.phone}/>
                            </label>
                            <label>
                                <h3>Address 1: </h3>
                                <input onChange={this.handleInputChange} name='address1' value={this.state.address1}/>
                            </label>
                            <label>
                                <h3>Address 2: </h3>
                                <input onChange={this.handleInputChange} name='address2' value={this.state.address2}/>
                            </label>
                            <label>
                                <h3>City: </h3>
                                <input onChange={this.handleInputChange} name='city' value={this.state.city}/>
                            </label>
                            <label>
                                <h3>State: </h3>
                                <input onChange={this.handleInputChange} name='unitedState' value={this.state.unitedState}/>
                            </label>
                            <label>
                                <h3>Zip: </h3>
                                <input onChange={this.handleInputChange} name='zip' value={this.state.zip}/>
                            </label>
                        </form>
                    </Grid.Column>
                </Grid>
            </Grid>
        )
    }
}
