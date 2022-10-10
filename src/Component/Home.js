import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Header from './Header';
import Sidebar from './Sidebar';
import Color from './Data/Color';
import {
    BrowserRouter as Router,
    Routes, Route
} from "react-router-dom";
import PricePlan from './Custom-component/PricePlan';
import Accordian from './Custom-component/Accordian';


function Home(props) {
    const [openDrawer, setOpenDrawer] = React.useState(false)
    const handleDrawer = (e) => {
        e.preventDefault()
        setOpenDrawer(!openDrawer)
    }
    document.body.style = `background:${Color.bsBodyBg}`;
    return (
        <Box>
            <Grid container spacing={0}>
                <Grid item md={2}>
                    <Sidebar openDrawer={openDrawer} />
                </Grid>
                <Grid item md={!openDrawer ? 12 : 10}>
                    <Header handleDrawer={handleDrawer} />
                    <Grid item md={12} pl={10} pr={10}>
                        <Router>
                            <Routes>
                                <Route path="/" element={<PricePlan />} />
                                <Route path="accordian" element={<Accordian />} />
                            </Routes>
                        </Router>
                    </Grid>
                </Grid>

            </Grid>
        </Box>
    );
}

export default Home;