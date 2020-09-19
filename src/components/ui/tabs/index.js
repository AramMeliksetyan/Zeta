import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import RecentPosts from '../recent-posts';
import { recentPostsInfo2 } from '../recent-posts/constants';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <div>{children}</div>
            )}
        </div>
    );
}



function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//     backgroundColor: theme.palette.background.paper,
//   },
// }));

export default function SimpleTabs(props) {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className='tabs-section'>
            <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                <Tab label="Item One" {...a11yProps(0)} />
                <Tab label="Item Two" {...a11yProps(1)} />
            </Tabs>
            <TabPanel value={value} index={0}>
                <RecentPosts data={recentPostsInfo2} />
            </TabPanel>
            <TabPanel value={value} index={1}>
                {
                    props.data && props.data.map((item) =>(
                        <div className='comments-section' key={item.id}>
                    <div className='icon-section'>
                        <i className="fa fa-comment-o" aria-hidden="true"></i>
                    </div>
                    <div className='text-area'>
                          <p>{item.text}</p> 
                          <span>{item.author}</span> 
                          <span>{item.date}</span> 
                    </div>
                </div>
                    ))
                }
            </TabPanel>
        </div>
    );
}

