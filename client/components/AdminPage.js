import React from 'react';
import { Link } from 'react-router-dom';
import Instrument from './Instrument';
import Order from './OrderCard';
import User from './UserCard';

import { Grid, Container, Header, Menu, Input, Segment } from 'semantic-ui-react';

export default class AdminPage extends React.Component {


    constructor(props) {
        super(props);
        this.state = {};
        this.handleDeleteInstrument = this.handleDeleteInstrument.bind(this);
        this.handleAdminSubmit = this.handleAdminSubmit.bind(this);
    }

    componentDidMount() {
        if(this.props.loadOrders){
            this.props.loadOrders();
        }
        if(this.props.loadUsers){
            this.props.loadUsers();
        }
        if(this.props.loadInstruments){
            this.props.loadInstruments();
        }
    }

    handleDeleteInstrument(event) {
        this.props.deleteInstrument(event.target.value);
    }

    handleAdminSubmit(event) {
        // this.props.changeAdmin(event.target.value);
    }

    render() {
        const { users } = this.props;
        const { orders } = this.props;
        const { instruments } = this.props;

        return (
            <div>
                <h3>All Instruments</h3>
                <Grid columns="equal" padded>
                    <Grid.Column width={16}>
                        <Container textAlign="center">
                            <Grid columns={12} >

                            {Array.isArray(instruments) && instruments.map(instrument => {
                               return (
                                    <div key={instrument.id}>
                                        <Instrument instrument={instrument} />
                                        <button onClick={this.handleDeleteInstrument} value={instrument.id}>Delete Instrument</button>
                                    </div>
                                    ) 
                                }
                            )}
                            </Grid>
                        </Container>
                    </Grid.Column>
                </Grid>
                <h3>All Orders</h3>
                <Grid columns="equal" padded>
                    <Grid.Column width={16}>
                        <Container textAlign="center">
                            <Grid columns={12}>
                            {Array.isArray(orders) && orders.map(order => {
                               return (
                                    <div key={order.id}>
                                        <Order order={order} id={order.id}/>
                                    </div>
                                    ) 
                                }
                            )}
                            </Grid>
                        </Container>
                    </Grid.Column>
                </Grid>
                <h3>All Users</h3>
                <Grid columns="equal" padded>
                    <Grid.Column width={16}>
                        <Container textAlign="center">
                            <Grid columns={12}>
                            {Array.isArray(users) && users.map(user => {
                               return (
                                    <div key={user.id}>
                                        <User user={user} id={user.id}/>
                                    </div>
                                    ) 
                                }
                            )}
                            </Grid>
                        </Container>
                    </Grid.Column>
                </Grid>
            </div>
        )
    }
}

        