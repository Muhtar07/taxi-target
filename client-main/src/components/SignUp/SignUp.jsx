import React, { useEffect, useState } from 'react'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import LocalTaxiIcon from '@material-ui/icons/LocalTaxi';
import Container from '@material-ui/core/Container';
import { useDispatch, useSelector } from 'react-redux';
import { signUpUser } from '../../redux/actions/userAction';
import { useHistory } from 'react-router';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  avatar: {
    backgroundColor: '#0066CC'
  }
}));


function SignUp() {

  // const checkHandler = () => {
  //   dispatch(googleCheckAuth())
  // }

  const loginWithGoogle = (e) => {
    e.preventDefault();
    window.open(`${process.env.REACT_APP_URL}/googleUser/signIn`, '_self')

  }

  const dispatch = useDispatch();

  const [form, setForm] = useState({})

  console.log(form);

  const changeHandler = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const history = useHistory()
  const user = useSelector(state => state.user)

  useEffect(() => {
    if (user) {
      history.push('/')
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user])

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(signUpUser(form))
  }

  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LocalTaxiIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          ????????????????????????????????????
        </Typography>
        <form className={classes.form} noValidate onSubmit={submitHandler}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                onChange={changeHandler}
                value={form.login || ""}
                autoComplete="fname"
                name="login"
                variant="outlined"
                required
                fullWidth
                id="login"
                label="Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                onChange={changeHandler}
                value={form.email || ''}
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                onChange={changeHandler}
                alue={form.password || ''}
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            ????????????????????????????????????
          </Button>
          <Button
            onClick={loginWithGoogle}
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            ?????????????????????????????? ?????????? google

          </Button> 
        </form>
      </div>
      <Box mt={5}>
      </Box>
    </Container >
  );
}

export default SignUp
