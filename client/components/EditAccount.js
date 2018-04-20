/* eslint-disable */

import React from 'react';
import { Button, Divider, Form } from 'semantic-ui-react';

export default class  EditAccount extends React.Component {

  render() {

      return(
        <div>
            <Form size='large'>
              <Form.Group widths='equal'>
                <Form.Field label='First name' control='input' placeholder='First name' />
                <Form.Field label='Last name' control='input' placeholder='Last name' />
                <Form.Field label='Address 1' control='input' placeholder='Address 1' />
                <Form.Field label='Address 2' control='input' placeholder='Address 2' />
                <Form.Field label='City' control='input' placeholder='City' />
                <Form.Field label='State' control='input' placeholder='State' />
                <Form.Field label='Zip' control='input' placeholder='Zip' />
                <Form.Field label='Phone Number' control='input' placeholder='Phone Number' />
              </Form.Group>
              <Button type='submit'>Submit</Button>
              <Divider hidden />
            </Form>
        </div>
    )
  }
}
