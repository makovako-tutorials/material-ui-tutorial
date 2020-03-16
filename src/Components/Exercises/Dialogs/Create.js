import React, { useState } from "react";
import {
    Dialog,
    Button,
    DialogActions,
    DialogTitle,
    DialogContent,
    DialogContentText,
} from "@material-ui/core";

import { Add } from "@material-ui/icons";

export default function Create() {
    const [open, setOpen] = useState(false);

    const handleToggle = () => {
        setOpen(!open)
    }

    const handleClose = () => {

    }

    return (
        <>
            <Button variant="contained" onClick={handleToggle} >
                <Add />
            </Button>
            <Dialog
                open={open}
                onClose={handleToggle}
            >
                <DialogTitle id="form-dialog-title">
                    Create a new Exercise
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Please fill out the form below
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary" variant="contained">
                        Create
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}
