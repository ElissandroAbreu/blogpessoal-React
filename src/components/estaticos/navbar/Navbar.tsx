import React from "react";
import { Box } from "@mui/material";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

function Navbar() {
    return (
        <>
            <AppBar position="static">
                <Toolbar variant="dense">
                    <Box style={{ cursor: "pointer" }}>
                        <Typography variant="h5" color="inherit">
                            Blog Pessoal
                        </Typography>
                        </Box>
                        <Box display="flex" justifyContent="">
                            <Box mx={1} style={{ cursor: "pointer" }}>
                                <Typography variant="h5" color="inherit">
                                    home
                                </Typography>
                            </Box>
                        </Box>
                        <Box display="flex" justifyContent="">
                            <Box mx={1} style={{ cursor: "pointer" }}>
                                <Typography variant="h5" color="inherit">
                                    postagens
                                </Typography>
                            </Box>
                        </Box>
                        <Box display="flex" justifyContent="">
                            <Box mx={1} style={{ cursor: "pointer" }}>
                                <Typography variant="h5" color="inherit">
                                    temas
                                </Typography>
                            </Box>
                        </Box>
                        <Box display="flex" justifyContent="">
                            <Box mx={1} style={{ cursor: "pointer" }}>
                                <Typography variant="h5" color="inherit">
                                    cadastrar temas
                                </Typography>
                            </Box>
                        </Box>
                        <Box display="flex" justifyContent="">
                            <Box mx={1} style={{ cursor: "pointer" }}>
                                <Typography variant="h5" color="inherit">
                                    logout
                                </Typography>
                            </Box>
                        </Box>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar;