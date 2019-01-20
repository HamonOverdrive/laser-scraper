/**
 * @flow
 */

import * as React from "react";
import * as DOM from "react-dom";
import { Link } from "react-router-dom";
import { applicationHistory } from "../../helpers";

import { Button, Icon, Segment, Input, Header, Grid, Label, Divider, Form, TextArea, Image, Progress, TransitionablePortal,Portal, Message, Card } from "semantic-ui-react";

import * as getFrames from '../../utils/webScraper'

type Props = {

};

type State = {
  data: array
};

class FrameTable extends React.Component<Props,State> {
  state = {
    data: []
  }

  async componentDidMount(){
    try{
      let result = await getFrames
      console.log(result)
    }catch(err){
      console.log(err)
    }

  }

  render() {
    return(
      <div>
        {
          this.state.data.map(function(d){
            return (<li key={d}>{d}</li>)
          })
        }
      </div>
    )
  }
}
