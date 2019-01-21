import React, {Component} from 'react'
import {Button, Container, Menu, Visibility, Segment, Image, Divider, Grid, Header} from 'semantic-ui-react'
import DiagramContainer from '../../containers/dumb/DiagramContainer'

class CreateFlowchart extends Component {
  constructor() {
    super()
    this.state = {

    }
  }

  componentDidMount(){
    //
  }


  render() {
    return(
      <div>
    <Grid celled='internally'>
      <Grid.Row>
        <Grid.Column width={3}>
          <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
        </Grid.Column>
        <Grid.Column width={10}>
          <Header as='h1'>Please create your flowchart</Header>
        </Grid.Column>
        <Grid.Column width={3}>
          <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
        </Grid.Column>
      </Grid.Row>

      <Grid.Row>
        <Grid.Column width={3}>
          <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
          <Button primary>Add Move</Button>
        </Grid.Column>
        <Grid.Column width={10}>
          <DiagramContainer />
        </Grid.Column>
        <Grid.Column width={3}>
          <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
        </Grid.Column>
      </Grid.Row>
    </Grid>
      </div>
    )
  }

}

export default CreateFlowchart;
