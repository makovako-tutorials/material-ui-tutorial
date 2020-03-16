import React, { Fragment } from "react";
import {
    Grid,
    Paper,
    Typography,
    ListItem,
    List,
    ListItemText
} from "@material-ui/core";

const styles = {
    Paper: {
        padding: 20,
        marginBottom: 10,
        marginTop: 10,
        height: 500,
        overflowY: "auto"
    }
};

export default ({
    exercises,
    category,
    exercise: {
        id,
        description = "Please select an exercie from list on the left",
        title = "Welcome"
    },
    onSelect
}) => {

    
    return (
        <Grid container>
            <Grid item sm>
                <Paper style={styles.Paper}>
                    {exercises.map(([group, exercises]) =>
                        !category || category === group ? (
                            <Fragment key={group}>
                                <Typography
                                    variant="h5"
                                    style={{ textTransform: "capitalize" }}
                                >
                                    {group}
                                </Typography>
                                <List component="ul">
                                    {exercises.map(({ id, title }) => (
                                        <ListItem
                                            key={id}
                                            onClick={() => onSelect(id)}
                                            button
                                        >
                                            <ListItemText primary={title} />
                                        </ListItem>
                                    ))}
                                </List>
                            </Fragment>
                        ) : null
                    )}
                </Paper>
            </Grid>
            <Grid item sm>
                <Paper style={styles.Paper}>
                    <Typography variant="h4">{title}</Typography>
                    <Typography variant="h5" style={{ marginTop: 20 }}>
                        {description}
                    </Typography>
                </Paper>
            </Grid>
        </Grid>
    );
};
