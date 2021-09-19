import React from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

export default function CustomTabs(props) {
  const [value, setValue] = React.useState(2);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    props.setTrans(false);
    props.setTab(newValue);
  };

  return (
    <Paper square="true">
      <Tabs
        value={value}
        indicatorColor="primary"
        textColor="primary"
        onChange={handleChange}
        aria-label="데헷"
      >
        <Tab label="1" />
        <Tab label="2" />
        <Tab label="3" />
      </Tabs>
    </Paper>
  );
}