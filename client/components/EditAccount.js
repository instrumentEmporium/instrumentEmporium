/* eslint-disable */

import React from 'react';
import { Button, Divider, Form, Grid, Container, Header } from 'semantic-ui-react';

export default class EditAccount extends React.Component {
  constructor(props){
    super(props)
    this.state = {

    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  render() {

    return (
      <Container fluid textAlign='center'>
        <Header size='large'>Edit My Account</Header>
        <Form size='large' onSubmit={this.handleSubmit}>
          <Form.Group widths='equal'>
            <Grid centered>
              <Grid.Column width='6'  >
                <Grid.Row >
                  <div>
                    <Form.Field label='First name' control='input' placeholder='First name'  />
                  </div>
                  <div>
                    <Form.Field label='Last name' control='input' placeholder='Last name' />
                  </div>
                </Grid.Row>
                <Grid.Row>
                  <div>
                    <Form.Field label='Address 1' control='input' placeholder='Address 1' />
                  </div>
                  <div>
                    <Form.Field label='Address 2' control='input' placeholder='Address 2' />
                  </div>
                </Grid.Row>
                <Grid.Row>
                  <div>
                    <Form.Field label='City' control='input' placeholder='City' />
                  </div>
                  <div>
                    <Form.Field label='State' control='input' placeholder='State' />
                  </div>
                </Grid.Row>
                <Grid.Row>
                  <div>
                    <Form.Field label='Zip' control='input' placeholder='Zip' />
                  </div>
                  <div>
                    <Form.Field label='Phone Number' control='input' placeholder='Phone Number' />
                  </div>
                </Grid.Row>
              </Grid.Column>
            </Grid>
          </Form.Group>
        </Form>
        <Button size='large' type='submit'>Submit</Button>
      </Container>
    )
  }
}
