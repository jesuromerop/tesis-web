import { makeStyles } from '@material-ui/core/styles';
import sizes from "./sizes";
import img from "./resources/1398650.jpg"

export default makeStyles((theme) => ({
    main: {
        backgroundImage: `url(${img})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
    },
    root: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "cener",
        width: "40vw",
        height: "81.5vh",
        borderRadius: "10px",
        boxShadow: "2px 2px 5px 1px rgba(0,0,0,0.45)",
        [sizes.Wdown("sm")]: {
            width: "80vw",
        },
        [sizes.Hdown("lg")]: {
            height: "61.5vh",
        },
        [sizes.Hdown("sm")]: {
            height: "81.5vh",
        },
    },
    login: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
    },
    avatar: {
        margin: "-80px",
        //position: "absolute",
        position: "relative",
        /*top: "1.55vh",
        left: "50%",
        marginLeft: "-6rem",*/
        height: "18rem",
        width: "24rem",
        overflow: "visible",
        //boxShadow: "2px 2px 3px rgba(0,0,0,0.45)",
        /*[sizes.Wdown("lg")]: {
            width: "10rem",
            height: "10rem",
            marginLeft: "-5rem",
        },
        [sizes.Hdown("lg")]: {
            top: "14.55vh",
        },
        [sizes.Hdown("md")]: {
            top: "12.55vh",
        },
        [sizes.Hdown("sm")]: {
            top: "1.55vh",
        },*/
    },
    cardContent: {
        height: "100%",
        width: "88%",
        textAlign: "center"
    },
    divider: {
        width: "83%",
        margin: "auto",
        marginBottom: "1rem"
    },
    cssLabel: {
        "&.Mui-focused": {
            color: "#1a7769"
        }
    },
    textField: {
        width: "80%",
        "& .MuiOutlinedInput-root": {
            borderRadius: "2rem",
            backgroundColor: "#bdbdbd6e",
        },

        marginBottom: "1em",
        ["& input"]: {
            height: "1em",
        },
        "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            borderColor: "transparent"
        },
        "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            borderColor: "#1a7769"
        },
        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#1a7769"
        },

    },
    inputText: {
        marginBottom: "1rem",
    },
    textFields: {
        [`& fieldset`]: {
            borderRadius: "40px",
            height: "3rem",
            paddingBottom: "0.25rem",
            paddingTop: "0.2rem",
        },
        btn: {
            textTransform: "none",
            borderRadius: "40px",
            marginTop: "80rem",
            padding: "0.55rem 1.5rem",
        }
    },
    background: {
        backgroundImage: "url('./1398625.jpg')"
    },
    "body": {
        margin: 0
    }
}));