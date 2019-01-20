
import * as React from "react";
import * as DOM from "react-dom";
import { NavLink, Link } from "react-router-dom";
import {Button, Container, Menu, Visibility, Segment, Image, Divider} from 'semantic-ui-react'

type Props = {
};

type State = {
};

const src = 'https://tk7.tekken.com/assets/images/header/logo.png'

class Navbar extends React.Component<Props,State> {
  constructor(props: Props,state: State) {
    super(props,state);
    this.state = {}
  }
  hideFixedMenu = () => this.setState({fixed: false})
  showFixedMenu = () => this.setState({fixed: true})

  render() {
    const {fixed} = this.state
    return (
      <div>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <Segment
            inverted
            textAlign="center"
            style={{minHeight: 70, padding: '1em 0em'}}
            vertical
          >
            <Menu
              fixed={fixed ? 'top' : null}
              inverted={!fixed}
              pointing={!fixed}
              secondary={!fixed}
              size="large"
            >
              <Container>
                <Menu.Item as={NavLink} exact to="/">
                  Home
                </Menu.Item>
                <Menu.Item as={NavLink} exact to="#" position="center">
                  <Image src={src} size='small' />
                  <Divider hidden />
                </Menu.Item>
                <Menu.Item position="right">
                  get ready
                </Menu.Item>
              </Container>
            </Menu>
          </Segment>
        </Visibility>
      </div>

      );
  }

}

export default Navbar;
