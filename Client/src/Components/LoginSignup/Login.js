import React from 'react'
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import { FaFacebook, FaTwitter, FaGoogle } from 'react-icons/fa';
import { Typography, Tooltip, tooltipClasses, styled, Zoom } from '@mui/material';
import { Link } from 'react-router-dom';

import './Style/AuthStyle.css';

const Login = ({ setActive }) => {
    return (
        <>
            <Paper elevation={3} className='auth_paper' style={{ borderRadius: '8px' }}>
                <Grid container>
                    <Grid item xs={12} md={8}>
                        <div className='f_container'>
                            <h2 style={{ marginBottom: '10px', color: 'rgb(255, 144, 163)' }}>Log in to your Account</h2>
                            <hr width="10%" style={{ backgroundColor: "rgb(255, 144, 163)", height: '3px', border: 'none', margin: '10px' }} />
                            <Stack
                                direction='row'
                                divider={<Divider orientation="vertical" flexItem />}
                                spacing={4}
                                margin={1}
                            >
                                <FaGoogle color='#DB4437' size={24} style={{ cursor: 'pointer' }} />
                                <FaFacebook color='#4267B2' size={24} style={{ cursor: 'pointer' }} />
                                <FaTwitter color='#1DA1F2' size={24} style={{ cursor: 'pointer' }} />
                            </Stack>
                            <Typography color='textSecondary' margin={1} variant="caption">or use your email account</Typography>
                            <FormComponent />
                        </div>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <div className='s_Container right'>
                            <h2 style={{ marginBottom: '10px', color: 'white' }}>Hello, New Friend!</h2>
                            <Typography variant="body2" className="s_typography" >
                                Fill up personal information and start journey with us.
                            </Typography>
                            <Link to="/signup">
                                <input type='submit' value="Create Account" className='submit' onClick={() => (setActive('signup'))} />
                            </Link>
                        </div>
                    </Grid>
                </Grid>
            </Paper>
        </>
    )
}

export default Login;

const FormComponent = () => {

    const HtmlTooltip = styled(({ className, ...props }) => (
        <Tooltip {...props} classes={{ popper: className }} />
    ))(({ theme }) => ({
        [`& .${tooltipClasses.tooltip}`]: {
            maxWidth: 300,
            fontSize: theme.typography.pxToRem(12)
        },
    }));


    return (
        <form id='login_form'>
            <label>Email</label>
            <input type="email" name="email" placeholder='Enter email address' className='input_box' />
            <br />
            <label>Password</label>
            <HtmlTooltip TransitionComponent={Zoom}
                title={
                    <React.Fragment>
                        <pre> Your password must:<br />
                            &#8194; Be at least 8 characters<br />
                            &#8194; Have at least one number<br />
                            &#8194; Have at least one symbol<br />
                            &#8194; Have at least one upper case letter<br />
                            &#8194; Have at least one lower case letter
                        </pre>
                    </React.Fragment>
                }
                placement='right'
                disableHoverListener
                arrow>
                <input type="password" name="password" placeholder='Enter Password ' className='input_box' />
            </HtmlTooltip>
            <Grid container className='b_row'>
                <Grid item xs={6} >
                    <input type="checkbox" /><label>Remeber me</label>
                </Grid>
                <Grid item xs={6}>
                    <div style={{ textAlign: 'right' }}><label style={{ cursor: 'pointer' }}>Forget Password?</label></div>
                </Grid>
            </Grid>
            <input type='submit' value="Log in" className='submit' />
        </form>
    )
}

