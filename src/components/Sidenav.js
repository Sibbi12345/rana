import React from 'react';
import {BrowserRouter as Router, Link} from "react-router-dom";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

function Sidenav() {
  
  return (
    <>
      
      <List>
        <ListItem button> 
              <ListItemIcon> <InboxIcon /> </ListItemIcon>
              <ListItemText>    <Link to="/dashboard">Home</Link> </ListItemText>
            </ListItem>
            <ListItem button> 
              <ListItemIcon> <InboxIcon /> </ListItemIcon>
              <ListItemText>    <Link to="/userlist">User List</Link> </ListItemText>
            </ListItem>
            <ListItem button> 
              <ListItemIcon> <InboxIcon /> </ListItemIcon>
              <ListItemText> <Link to="/userdetail">User Details</Link>  </ListItemText>
            </ListItem>
            <ListItem button> 
              <ListItemIcon> <InboxIcon /> </ListItemIcon>
              <ListItemText> <Link to="/updateuser">Update User</Link>  </ListItemText>
            </ListItem>
           
        </List>
        

      
    </>
  );
}


export default Sidenav


