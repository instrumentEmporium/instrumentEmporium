import React from 'react';
import { Link } from 'react-router-dom';
import { Image, Grid, Header, Card } from 'semantic-ui-react'

export default class User extends React.Component {
  componentDidMount() {
    
  }

  render() {
    const { user } = this.props;
    return (
      <Grid>
        <Grid.Column mobile={16} tablet={8} computer={4}>
          <Card>
              <Header as="h3">
                User Id:{user.id} {/* Change to user name, once associated */}
              </Header>
              <h3>Email: {user.email}</h3>
              <h3>Admin Status: {user.admin ? <span>True</span> : <span>False</span>} </h3>
              <h3>Change Status: {user.admin ? <button>Remove Admin</button> : <button>Promote Status</button> }</h3>
              <form>
                <input/>
              </form>
          </Card>
        </Grid.Column>
      </Grid>
    )
  }
}
