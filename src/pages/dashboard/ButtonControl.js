import { Box, Grid } from "@mui/material";
import { useState } from "react";
import { ButtonInfo, ButtonPause, ButtonPlay, ButtonReplay } from "src/components/ButtonGD";

export default function ButtonControl({ isPause, setPause, isReload, setReload }) {
    return (
        <Box sx={{ position: 'absolute', bottom: 10, right: 10 }}>
            <Grid container gap={2}>
                <ButtonInfo />
                {isPause ?
                    <ButtonPlay onClick={() => setPause(false)} />
                    :
                    <ButtonPause onClick={() => setPause(true)} />
                }
                <ButtonReplay onClick={() => setReload(isReload + 1)} />
            </Grid>
        </Box>
    )
}