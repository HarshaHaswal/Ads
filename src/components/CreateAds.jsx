import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CardComp from './CardComp';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';


function CreateAds() {
  const Item = styled(Paper)(({ theme }) => ({
    // backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    // ...theme.typography.body2,
    // padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    display:'flex',
    justifyContent:'center',
    boxShadow:0,
  }));

  return (
    <Box sx={{  boxShadow: 0  , p:5 }} component="main">
    <Typography variant='h2' style={{ textAlign: 'center' }} sx={{ m:5 , pt: 5 }}>CreateAds</Typography>
    <Grid container spacing={2} sx={{  boxShadow: 0  , p:5 }} >
            <Grid sx={{ display: 'flex' , alignContent: 'center', justifyContent:'center', flexDirection: 'row', p:5 }} item xs={3}>
              <Item>
                
              </Item>
            </Grid>
            <Grid item xs={3}>
              <Item sx={{ boxShadow:0 }}>
              <Link style={{color:'#fff',textDecoration:'none'}} to={`/TextAds`}><CardComp /></Link>
              </Item>
            </Grid>
            <Grid item xs={3}>
              <Item sx={{ boxShadow:0 }}>
              <Link style={{color:'#fff',textDecoration:'none'}} to={`/MediaAds`}><CardComp/></Link>
              </Item>
            </Grid>
            <Grid item xs={3}>
              <Item>
               
              </Item>
            </Grid>
            
    </Grid>

  </Box>
  )
}

export default CreateAds