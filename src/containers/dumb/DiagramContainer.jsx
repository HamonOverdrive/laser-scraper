
/**
 * @flow
 */

import * as React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Diagram from '../../components/dumb/Diagram';

// Map the global application state to the props
function mapStateToProps(state: any) {
  return {

  };
}

function mapDispatchToProps(dispatch: any) {
  return bindActionCreators(
    {

    },
    dispatch
  );
}

export default connect(mapStateToProps,mapDispatchToProps)(Diagram);
