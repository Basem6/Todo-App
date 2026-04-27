import Collapse from '@mui/material/Collapse';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
export function Snacbar({statue , content , open}){
    
    return(
        <Stack  sx={{ width: '27%',position: 'fixed', top: "10%", left: "50%" , zIndex: 1000,transform: 'translateX(-50%)',borderRadius: 8 , transition: 'all 0.3s ease'} } spacing={2} >
                <Collapse in={open}>
                                    <Alert severity={statue}>{content}</Alert>
                </Collapse>
        </Stack>
    )
}