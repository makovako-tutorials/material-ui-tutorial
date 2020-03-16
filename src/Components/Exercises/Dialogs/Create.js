import React, { useState } from "react";
import {
    Dialog,
    Button,
    DialogActions,
    DialogTitle,
    DialogContent,
    DialogContentText,
    TextField,
    FormControl,
    InputLabel,
    Select,
    MenuItem
} from "@material-ui/core";

import { Add } from "@material-ui/icons";
import {makeStyles} from "@material-ui/core/styles"

const useStyles = makeStyles({
    FormControl: {
        width: 500
    }
})

export default function Create({categories, onCreate}) {
    const classes= useStyles()

    const [open, setOpen] = useState(false);
    const [exercise, setExercise] = useState({
        title: "",
        description: "",
        muscles: ""
    });

    const handleToggle = () => {
        setOpen(!open);
    };


    const handleChange = name => ({ target: { value } }) => {
        setExercise({
            ...exercise,
            [name]: value
        });
    };

    const handleSubmit = () => {
        // TODO: validation
        onCreate({...exercise,id:exercise.title.toLowerCase().replace(' ','-')})
        handleToggle()
        setExercise({
            title: "",
            description: "",
            muscles: ""
        })
    }

    return (
        <>
            <Button variant="contained" onClick={handleToggle}>
                <Add />
            </Button>
            <Dialog open={open} onClose={handleToggle}>
                <DialogTitle id="form-dialog-title">
                    Create a new Exercise
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Please fill out the form below
                    </DialogContentText>
                    <form>
                        <TextField
                            label="Title"
                            value={exercise.title}
                            onChange={handleChange("title")}
                            margin="normal"
                            className={classes.FormControl}
                        />
                        <br />
                        <FormControl className={classes.FormControl}>
                            <InputLabel htmlFor="muscles">
                                Muscles
                            </InputLabel>
                            <Select
                                labelId="muscles"
                                id="demo-simple-select"
                                value={exercise.muscles}
                                onChange={handleChange("muscles")}
                            >
                                {
                                    categories.map(category => 
                                    <MenuItem key={category} value={category}>{category}</MenuItem>
                                        
                                        )
                                }
                            </Select>
                        </FormControl>
                        <br />
                        <TextField
                            label="Description"
                            value={exercise.description}
                            onChange={handleChange("description")}
                            margin="normal"
                            multiline
                            rows="4"
                            className={classes.FormControl}
                        />
                        
                    </form>
                </DialogContent>
                <DialogActions>
                    <Button
                        onClick={handleSubmit}
                        color="primary"
                        variant="contained"
                    >
                        Create
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}
