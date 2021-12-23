import React from 'react';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import { FaFacebook, FaTwitter, FaGoogle } from 'react-icons/fa';
import './Style/AuthStyle.css';
import { Typography, Tooltip, tooltipClasses, styled, Zoom } from '@mui/material';
import { Link } from 'react-router-dom';

const Signup = ({ setActive }) => {
    return (
        <>
            <Paper elevation={3} className='auth_paper' style={{ borderRadius: '8px' }}>
                <Grid container>
                    <Grid item xs={12} md={4}>
                        <div className='s_Container left'>
                            <h2 style={{ marginBottom: '10px', color: 'white' }}>Welcome Back!</h2>
                            <Typography variant="body2" style={{ color: 'white', width: '280px' }}>
                                To keep connected with us please login with your personal information.
                            </Typography>
                            <Link to="/login" >
                                <input type='submit' value="Log in" className='submit' onClick={() => (setActive('login'))} />
                            </Link>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={8}>
                        <div className='f_container'>
                            <h2 style={{ margin: '8px', color: 'rgb(255, 144, 163)' }}>Create Your Account</h2>
                            <hr width="10%" style={{ backgroundColor: "rgb(255, 144, 163)", height: '3px', border: 'none', margin: '8px' }} />
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
                </Grid>
            </Paper>
        </>
    )
}

export default Signup;

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
                disableHoverListener
                placement='right'
                arrow>
                <input type="password" name="password" placeholder='Enter Password ' className='input_box' />
            </HtmlTooltip>
            <br />
            <label>Re-type Password</label>
            <Tooltip title="Must be matched with above password" disableHoverListener placement='right' arrow>
                <input type="password" name="re-password" placeholder='Re-Enter Password ' className='input_box' />
            </Tooltip>
            <input type='submit' value="Create Account" className='submit' />
        </form>
    )
}