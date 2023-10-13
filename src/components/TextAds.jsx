import React from 'react'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

function TextAds() {
    const gridContainerStyle = {
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)', // Adjust the shadow properties as needed
        padding: '16px', // Add some padding for spacing
      };

      const [age, setAge] = React.useState('');
      const handleChange = (event) => {
            setAge(event.target.value);
    };



  return (
    <div sx={{ mt:5 }}>
    <Typography variant="h2" sx={{mt:5,pt:5}} >Create Text Ad</Typography>
    <Grid container  style={gridContainerStyle} sx={{ mt:5,p:5 }} spacing={2}>

      <Grid item xs={6}>
        {/* Content for the first column */}
        <Typography variant="h6">Heading 01</Typography>
        <TextField label="Type something..." variant="outlined" fullWidth />
      
        <Typography variant="h6">Heading 02</Typography>
        <TextField label="Type something..." variant="outlined" fullWidth />

        <Typography variant="h6">Business Name</Typography>
        <TextField label="Type something..." variant="outlined" fullWidth />

      </Grid>


      <Grid item xs={6}>
        {/* Content for the second column */}
        <Typography variant="h6">Description 01</Typography>
        <TextField
          id="outlined-multiline-static"
          multiline
          rows={4}
          defaultValue="Default Value"
          fullWidth
        />
        <Typography variant="h6">Select List 01</Typography>
        <FormControl fullWidth>
       
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      </Grid>
      <Grid item xs={12}>
      <Typography variant="h6">Website URL</Typography>
        <TextField label="Type something..." variant="outlined" fullWidth />
      </Grid>
      <Grid item xs={12}>
      <Box display="flex" justifyContent="flex-end" alignItems="center" p={2} fullWidth>
              {/* Content on the left */}
              <div>
                
              </div>

              {/* Button on the right */}
              <Link style={{color:'#fff',textDecoration:'none'}} to={`/CREATE ADS`}> <Button variant="outlined" sx={{ mx:2 }}>Back</Button></Link>
              {/* <Button variant="contained" color="primary" sx={{ mx:2 }}>
                Back
              </Button> */}
              <Button variant="contained" color="primary">
               Submit
              </Button>
            </Box>
        </Grid>
    </Grid>
</div>
  )
}

export default TextAds