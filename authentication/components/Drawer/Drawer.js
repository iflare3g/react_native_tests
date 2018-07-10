import React, { Component } from 'react';
import { Drawer } from 'native-base';
import SideBar from '../SideBar/SideBar';

export default class SideDrawer extends Component {
  render() {
    return (
      <Drawer
        ref={(ref) => { this.drawer = ref; }}
        content={<SideBar />}
        onClose={ closeDrawer()} >
        { this.props.children }
      </Drawer>
    );
  }
}
