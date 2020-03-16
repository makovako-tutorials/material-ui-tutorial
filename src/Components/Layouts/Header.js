import React from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Create from "../Exercises/Dialogs/Create";

export default function Header({muscles, onExerciseCreate}) {
    const styles = {
        Typography: {
            flex:1
        }
    }

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h4" color="inherit" style={styles.Typography}>
                    Exercise database
                </Typography>
                <Create categories={muscles} onCreate={onExerciseCreate}/>
            </Toolbar>
        </AppBar>
    );
}
