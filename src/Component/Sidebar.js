import React from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded';
import { SideMenuItem } from './Data/SideMenuItem';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";


function Sidebar(props) {
    const { openDrawer } = props;
    return (
        <Drawer anchor="left" open={openDrawer} hideBackdrop={true} sx={{ position: "static", ".MuiPaper-root": { paddingTop: "3rem", width: "15rem", backgroundColor: "#293042", color: "#adb5bd" } ,".MuiListItem-root":{borderBottom:"1px solid #ccc",marginBottom:"1rem",cursor:"pointer"}}} variant="persistent">
            <List>
                {
                    SideMenuItem.map((item, n) =>
                        <ListItem key={n} disablePadding>
                            <ListItemButton sx={{ display: "flex", justifyContent: "center", alignItems: "center" }} to={item.RouteName}>
                                <BookmarkAddedIcon sx={{ color: "#adb5bd"}}/>
                                <ListItemText primary={item.MenuItem} sx={{marginLeft:"1rem"}}>{item.MenuItem}</ListItemText>
                            </ListItemButton>
                        </ListItem>
                    )
                }

            </List>
        </Drawer>
    );
}

export default Sidebar;