import AddIcon from '@material-ui/icons/Add';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import LayersIcon from '@material-ui/icons/Layers';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PeopleIcon from '@material-ui/icons/People';
import PostAddIcon from '@material-ui/icons/PostAdd';
import React, { useState } from 'react';
import SettingsIcon from '@material-ui/icons/Settings';
import { Link as NavLink } from 'react-router-dom';
import logoutAction from '../actions/logoutAction';

import './NavigationBarItems.scss';

const NavigationBarItems = () => {
  const [selectedItem, setSelectedItem] = useState(document.location.pathname);

  return (
    <div className="NavigationBarItems">
      <_MenuItem
        selectedItem={selectedItem}
        onClick={setSelectedItem}
        to="/egzamin/"
        label="Home"
      >
        <DashboardIcon />
      </_MenuItem>
      <_MenuItem
        selectedItem={selectedItem}
        onClick={setSelectedItem}
        to="/egzamin/maketest"
        label="Make a test"
      >
        <PostAddIcon />
      </_MenuItem>
      <_MenuItem
        selectedItem={selectedItem}
        onClick={setSelectedItem}
        to="/egzamin/group"
        label="Groups"
      >
        <PeopleIcon />
      </_MenuItem>
      <_MenuItem
        selectedItem={selectedItem}
        onClick={setSelectedItem}
        to="/egzamin/addquest"
        label="Add Questions"
      >
        <AddIcon />
      </_MenuItem>
      <_MenuItem
        selectedItem={selectedItem}
        onClick={setSelectedItem}
        to="/egzamin/settings"
        label="Settings"
      >
        <SettingsIcon />
      </_MenuItem>
      <_MenuItem
        selectedItem={selectedItem}
        onClick={setSelectedItem}
        to="/egzamin/tests"
        label="Designated tests"
      >
        <LayersIcon />
      </_MenuItem>
      <div className="navbar-space" />
      <div className="bottom-items">
        <_MenuItem
          selectedItem={''}
          onClick={logoutAction}
          to="/egzamin/"
          label="Logout"
        >
          <ExitToAppIcon />
        </_MenuItem>
      </div>
    </div>
  );
};

type MenuItemType = {
  to: string;
  label: string;
  children: any;
  selectedItem: string;
  onClick: (to: string) => any;
};

const _MenuItem = ({
  to,
  label,
  selectedItem,
  onClick,
  children,
}: MenuItemType) => {
  const selected = selectedItem === to;
  return (
    <NavLink to={to}>
      <ListItem selected={selected} button onClick={() => onClick(to)}>
        <ListItemIcon>{children}</ListItemIcon>
        <ListItemText primary={label} />
      </ListItem>
    </NavLink>
  );
};

export default NavigationBarItems;
