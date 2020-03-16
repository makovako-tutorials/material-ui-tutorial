import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

const useStyles = makeStyles({
    root: {
        flexGrow: 1
    }
});

export default function Footer({ muscles, onSelect, category }) {
    const classes = useStyles();

    const index = category ? muscles.findIndex(group => group === category) + 1 : 0

    const onIndexSelect = (e, index) => {
        onSelect(index === 0 ? '' : muscles[index - 1])
    }

    
    return (
        <Paper className={classes.root}>
            <Tabs
                value={index}
                onChange={onIndexSelect}
                indicatorColor="primary"
                textColor="primary"
                centered
            >
                <Tab label="All" />

                {muscles.map(group => (
                    <Tab key={group} label={group} />
                ))}
            </Tabs>
        </Paper>
    );
}
