import React from 'react';
import {Grid} from 'semantic-ui-react'

export default function User (props) {
  const { user } = props;
  return (
    <Grid>
      <Grid.Column mobile={16} tablet={8} computer={4}>
            <h3>
              User Id:{user.id} {/* Change to user name, once associated */}
            </h3>
            <h3>Email: {user.email}</h3>
      </Grid.Column>
    </Grid>
  )
}

