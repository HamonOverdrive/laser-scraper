/**
 * @flow
 */

 // External
 import React from "react";
 import {Route,HashRouter, Switch} from "react-router-dom";
 import { connect } from "react-redux";

 // Routing and Helpers
 import { SecureRoute } from "../routing";
 import { applicationHistory } from "../helpers";
 import { bindActionCreators } from "redux";

 // Containers (pages and controls)
 import LandingPageContainer  from "../containers/pages/LandingPageContainer";
 import LoginPageContainer  from "../containers/pages/LoginPageContainer";
 import Navbar from "../containers/pages/NavbarContainer"
 import FrameTableContainer from "../containers/pages/FrameTableContainer"

 // Props received from redux state
 type Props = {

 };

 function mapStateToProps(state: any) {
   return {
     currentPage: state.routing.locationBeforeTransitions==null ? "" : state.routing.locationBeforeTransitions.pathname
    };
 }

 function mapDispatchToProps(dispatch: any) {
   return bindActionCreators(
     {

     },
     dispatch
   );
 }

 class MainAppContainer extends React.Component<Props> {
   constructor(props: Props) {
     super(props);

     applicationHistory.listen((location: any, action: any) => {
      console.log("[MainAppContainer] History change detected");
     });
   }

   render() {
     return (
      <HashRouter>
       <div>
         <Navbar />
           <div style={{ margin: '0em 0em 0em 0em', padding: '0em 0em 0em 0em' ,borderColor: 'coral', borderStyle: 'none'}}>
             <div>
             <Switch>
               <Route path="/landingpage" component={LandingPageContainer} />
               <Route path="/frameTable" component={FrameTableContainer} />

             </Switch>
             </div>
           </div>
         </div>
       </HashRouter>

     );
   }
 }


 const connectedApp = connect(mapStateToProps,mapDispatchToProps)(MainAppContainer);
 export { connectedApp as MainAppContainer };
