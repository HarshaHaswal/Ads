import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import BasicTable from './BasicTable';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Chart from 'react-apexcharts';
import ToggleButtons from './ToggleButtons';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import CardHeader from '@mui/material/CardHeader';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';

function Dashboard() {
  const Item = styled(Paper)(({ theme }) => ({
    // backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    // ...theme.typography.body2,
    // padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  const [age, setAge] = React.useState('');
  const handleChange = (event) => {
        setAge(event.target.value);
};

  const gridContainerStyle = {
    boxShadow: '0 0 3px rgba(0, 0, 0, 0.2)', // Adjust the shadow properties as needed
    padding: '16px', // Add some padding for spacing
  };

  const options = {
    series: [40,53,25],
    labels: ['Male','Female','Unknown']
  }

  const series = [40,53,25];

  return (
    <>
        <Box component="main" sx={{ mx: 5 , py: 3 }}>
          <Typography variant='h2' style={{ textAlign: 'center' }} sx={{ m:5 , pt: 5 }}>Dashboard</Typography>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Item>
                <BasicTable />
              </Item>
            </Grid>
            <Grid item xs={6}>
              
              <Item>
              <Grid container  style={gridContainerStyle} sspacing={2}>
                <Grid item xs={6}>  
                <CardHeader  
                title="Ad Insigths"
                />
                </Grid>
                <Grid item xs={6}>
                <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Clicks</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    onChange={handleChange}
                  >
                    <MenuItem value={10}>Click 1</MenuItem>
                    <MenuItem value={20}>Click 2</MenuItem>
                    <MenuItem value={30}>Click 3</MenuItem>
                  </Select>
                </FormControl>
                </Grid>
              </Grid>
            
                 <Chart 
                  options={options}
                  series={series}
                  type="donut"
                  width='100%'
                  height={260}
                  sx={{  p: 5 }}
                  />
                  <Grid container spacing={2}>
                    <Grid item xs={6}>
                      <Item>
                    
                      </Item>
                    </Grid>
                    <Grid style={{ boxShadow:'none'}}  item xs={6}>
                      <Item style={{ boxShadow:'none'}}  sx={{ py: 2 }} >
                      <ToggleButtons/>
                      </Item>
                    </Grid>
                  </Grid>
                  
              </Item>
            </Grid>
          </Grid>
        
        </Box>
         
    </>
  )
}

export default Dashboard