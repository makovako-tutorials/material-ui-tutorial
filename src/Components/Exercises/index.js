import React from "react";
import {
    Grid,
    Paper,
    Typography,
    ListItem,
    List,
    ListItemText
} from "@material-ui/core";
import LeftPane from "./LeftPane";
import RightPane from "./RightPane";

const styles = {
    Paper: {
        padding: 20,
        marginBottom: 10,
        marginTop: 10,
        height: 500,
        overflowY: 'auto'
    }
};

export default ({ exercises }) => {
    console.log(exercises);

    return (
        <Grid container>
            <Grid item sm>
                <Paper style={styles.Paper}>
                    {exercises.map(([group, exercises]) => (
                        <>
                            <Typography
                                variant="h5"
                                style={{ textTransform: "capitalize" }}
                            >
                                {group}
                            </Typography>
                            <List component="ul">
                                {exercises.map(({ title }) => (
                                    <ListItem>
                                        <ListItemText primary={title} />
                                    </ListItem>
                                ))}
                            </List>
                        </>
                    ))}
                </Paper>
            </Grid>
            <Grid item sm>
                <Paper style={styles.Paper}>
                    <Typography variant="h4">Welcome</Typography>
                    <Typography variant="h5" style={{marginTop: 20}}>
                        Please select an exercie from list on the left
                    </Typography>
                </Paper>
            </Grid>
        </Grid>
    );
};
