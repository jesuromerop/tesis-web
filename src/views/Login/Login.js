import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from "react-router-dom";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { Card, CardContent, Button, Typography, Divider, Avatar } from '@material-ui/core/';
import useStyles from "../../styles/Login";
import { LogIn } from '../../api/session';
import LoginLoading from './LoginLoading';
import { GetFullUserData } from '../../api/user';
import Notification from '../../components/Notifications';
import { ReactComponent as LogoIcon } from '../../styles/resources/DataSecSVG.svg'

function Login(props) {
    const classes = useStyles();
    const history = useHistory();
    const location = useLocation();
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [open, setOpen] = useState(false);
    const [isLoading, setisLoading] = useState(false);
    const [msg, setMsg] = useState("");

    const btn = {
        textTransform: "none",
        borderRadius: "5px",
        marginTop: "0.5rem",
        padding: "0.55rem 1.5rem",
        backgroundColor: "#1a7769",
        color: "whitesmoke",
        marginTop: "10%"
    }


    useEffect(() => {

            // const Session = await location.state
            // console.log(location.state === undefined);
            if (!(location.state === undefined)) {
                console.log("dasdadsa " + location.state.expired);
                if (location.state.expired) {
                    setMsg("La sesión ha expirado");
                    setOpen(true);
                    history.replace({ state: { expired: false } })
                }
            }


        async function getData() {
            let bool = await GetFullUserData();
            if (bool) {
                setisLoading(true);
                setTimeout(() => { history.push('/home'); }, 3000);
            }
        }
        getData()
    }, [location.state])

    async function handleLogin(e) {
        if (!email) {
            setMsg("El campo E-mail está vacío");
            setOpen(true);
        } else if (!pass) {
            setMsg("El campo Contraseña está vacío");
            setOpen(true);
        } else {
            setisLoading(true);
            console.log(isLoading);
            let params = {
                email,
                pass
            }
            goLogIn(params);
        }
    };

    const goLogIn = async (params) => {
        const response = await LogIn(params);
        console.log(response);
        if (response.data.success && response.data.isActive) {
            history.push("/home");
        } else {
            if (!response.data.isActive && response.data.success) {
                setisLoading(false);
                setMsg("El usuario no esta activo, contacte a un administrador");
                setOpen(true);
            } else if (response.data.session && !response.data.success) {
                setisLoading(false);
                setMsg("El usuario ya tiene una sesion activa");
                setOpen(true);
            } else {
                setisLoading(false);
                setMsg("Los datos ingresados son inválidos, intente nuevamente");
                setOpen(true);
            }
        }
    }

    return (
        <div className={classes.main}>
            {open && (
                <Notification close={() => setOpen(false)} data={{ severity: "error", open: open, description: msg }} />
            )}
            <div className={classes.login}>
                <Card className={classes.root}>
                    <LoginLoading isLoading={isLoading}>
                        <LogoIcon className={classes.avatar} />
                        <CardContent className={classes.cardContent}>
                            <Typography gutterBottom variant="h5" component="h2">
                                Inicia Sesión
                            </Typography>
                            <Divider className={classes.divider} variant="middle" />
                            <ValidatorForm
                                onSubmit={handleLogin}
                                className={classes.textFields}
                                onError={errors => console.log(errors)}
                                instantValidate={true}

                            >
                                <Typography gutterBottom variant="body1" component="h2">
                                    Correo electrónico
                                </Typography>
                                <TextValidator
                                    id="outlined-email"
                                    label="Correo electrónico"
                                    onChange={(e) => { setEmail(e.target.value) }}
                                    name="email"
                                    value={email}
                                    variant="outlined"
                                    className={classes.textField}
                                    validators={['required', 'isEmail']}
                                    errorMessages={['El campo no puede estar vacío', 'Correo inválido']}
                                    InputLabelProps={{
                                        classes: {
                                            root: classes.cssLabel,
                                        }
                                    }}
                                />
                                <Typography gutterBottom variant="body1" component="h2">
                                    Contraseña
                                </Typography>
                                <TextValidator
                                    id="outlined-pass"
                                    label="Contraseña"
                                    type="password"
                                    onChange={(e) => { setPass(e.target.value) }}
                                    name="pass"
                                    value={pass}
                                    variant="outlined"
                                    className={classes.textField}
                                    validators={['required']}
                                    errorMessages={['El campo no puede estar vacío']}
                                    InputLabelProps={{
                                        classes: {
                                            root: classes.cssLabel,
                                        }
                                    }}
                                />
                                <Button type="submit" variant="contained" style={btn}>
                                    Iniciar Sesión
                                </Button>
                            </ValidatorForm>
                        </CardContent>
                    </LoginLoading>
                </Card>
            </div>
        </div>

    );
}

export default Login;