import React from "react";
import {Popover} from 'react-bootstrap';
import {OverlayTrigger} from 'react-bootstrap';


export class CustomEvent extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
      console.log('props: ' + JSON.stringify(this.props));

    //   let popoverClickRootClose = (
    //     <Popover id="popover-trigger-click-root-close" style={{zIndex:10000}}>
    //       <div>{this.props.event.desc}</div>
    //     </Popover>
    //   );

      if(this.props.event.desc) {
        const linkTokenIndexOf = this.props.event.desc.indexOf('LINK=');
        const link = linkTokenIndexOf === -1 ? undefined : this.props.event.desc.substring(linkTokenIndexOf+5);
        console.log('link: ' + link);
  
          return (
            <div>
              {/* <OverlayTrigger id="help" trigger="click" rootClose container={this} placement="bottom" overlay={popoverClickRootClose}> */}
                <div>{this.props.event.title} {link ? (<a target="_blank" href={link}>LINK</a>) : ''}</div>
              {/* </OverlayTrigger> */}
  
            </div>
          );
      } else {
        return (
            <div>
              {/* <OverlayTrigger id="help" trigger="click" rootClose container={this} placement="bottom" overlay={popoverClickRootClose}> */}
                <div>{this.props.event.title}</div>
              {/* </OverlayTrigger> */}
            </div>
          );
      }
      }
      
}