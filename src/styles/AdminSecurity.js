import { makeStyles } from '@material-ui/core/styles';
import sizes from "./sizes";

export default makeStyles((theme) => ({
    "@keyframes loading ": {
        " 0%": { backgroundPosition: "0% 50%" },
        "50%": { backgroundPosition: "100% 50%" },
        "100%": { backgroundPosition: "0% 50%" }
    },
    "@global": {
        "@keyframes fade": {
            "0%,25%": {
                opacity: "0"
            },
            "50%": {
                opacity: "1"
            },
            "90%": {
                opacity: "1"
            },
            "100%": {
                opacity: "0"
            }
        },

        "@keyframes rotateLente": {
            "0%": {
                transform: "rotate(0deg)"
            },
            "50%": {
                transform: "rotate(360deg)"
            },
            "100%": {
                transform: "rotate(360deg)"
            },
        },

        "@keyframes strokeUp": {
            "0%,15%": {
                strokeWidth: 0
            },

            "15%,35%": {
                strokeWidth: 10
            },

            "35%,55%": {
                strokeWidth: 0
            },

            "55%,75%": {
                strokeWidth: 10
            },

            "75%,100%": {
                strokeWidth: 0
            }
        }
    },

    loading: {
        animationName: '$loading',
        background: "linear-gradient(90deg, transparent, rgba(0,0,0,0.08), transparent)",
        backgroundSize: "400% 400%",
        animationDuration: '1s',
        animationIterationCount: 'infinite',
        color: "transparent",
    },
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        marginLeft: "2%",
        marginRight: "2%",
        "& > *": {
            color: "#4f4f4f"
        },
        "& #Lente, #Person": {
            transition: "all 1s ease",
            transformBox: "fill-box",
            transformOrigin: "center",
        },
        "& #Person": {
            opacity: "0",
        },
        "& #Lente": {
            animationName: "$rotateLente",
            animationDuration: "3s",
            animationIterationCount: "infinite",
            animationTimingFunction: "ease-in-out"
        },
        "& #Person": {
            animationName: "$fade",
            animationDuration: "3s",
            animationTimingFunction: "ease-out",
            animationIterationCount: "infinite",
            animationFillMode: "forwards"
        },
        "& #fingerPrint": {
            animationName: "$strokeUp",
            animationDuration: "6s",
            animationTimingFunction: "linear",
            animationIterationCount: "infinite",
            animationFillMode: "forwards",
            transition: "all 6s",
            transformBox: "fill-box",
            transformOrigin: "center",
            stroke: "black",
            strokeWidth: 0
        },
    },
    mainContainer: {
        width: "100%",
        height: "80vh"
    },
    panelContainer: {
        height: "80vh",
        width: "100%",
        padding: "2%",
        display: "flex",
        [sizes.Wdown("md-sm")]: {
            flexDirection: "column",
            overflowY: "auto"
        },
    },
    minimizerButton: {
        width: "5%",
        color: "whitesmoke",
        backgroundColor: "#1a7769",
        margin: "0 15px",
        "&:hover":{
            color: "#1a7769",
            backgroundColor: "#e8e8e8eb"
        },
        [sizes.Wdown("md-sm")]: {
            width: "auto",
            margin: "15px 0",
            "& .icon": {
                transform: "rotate(90deg)"
            }
        },
    },
    UserList: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "0.1%",
        width: "30%",
        height: "100%",
        transition: "200ms ease-in",
        "& .Title": {
            color: "#4c4c4c",
            fontSize: "2em"
        },
        "& .divider": {
            marginBottom: "15px"
        },
        "& .acordion": {
            color: "#4c4c4c",
            boxShadow: " 0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 0%), 0px 1px 3px 0px rgb(0 0 0 / 0%)"
        },
        "& .container": {
            height: "100%",
            "& > .lists": {
                height: "calc(100% - 57px)",
                overflowY: "auto",
                overflowX: "hidden"
            },
        },
        "&  .MuiList-root.MuiList-padding": {
            width: "100%"
        },
        "& .MuiAccordionDetails-root": {
            padding: 0,
            flexDirection: "column"
        },
        [sizes.Wdown("md-sm")]: {
            width: "auto"
        },
    },
    UserListMinimized: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "7%",
        transition: "250ms ease-out",
        [sizes.Wdown("md-sm")]: {
            height: "12%",
            width: "100%"
        },
    },
    dataContainer: {
        display: "flex",
        flexDirection: "column",
        alignContent: "center",
        justifyContent: "center",
        height: "100%",
        flexGrow: 1,
        overflowY: "auto",
        [sizes.Wdown("md-sm")]: {
            minHeight: "500px"
        },
        [sizes.Wdown("lg")]: {
            overflowY: "auto"
        },
    },
    chip: {
        display: "flex",
        backgroundColor: "#ff9800",
        color: "whitesmoke",
        fontWeight: "600",
        padding: "1%",
        margin: "1em 0em",
        "& > *": {
            color: "whitesmoke",
        }
    },
    UpperContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        height: "25%",
        "& .name": {
            fontSize: "calc(25px + (28 - 25) * ((80vw - 303px) / (1600 - 300)))",
            fontWeight: "600"
        }, "& .code": {
            fontSize: "calc(25px + (28 - 25) * ((80vw - 303px) / (1600 - 300)))",
            fontWeight: "600"
        }, "& .EmailType": {
            fontSize: "calc(12px + (24 - 10) * ((70vw - 303px) / (1600 - 300)))",
        },
        "& > *": {
            color: "#4f4f4f"
        }
    },
    BottomContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly",
        width: "100%",
        height: "75%",
        flexWrap: "wrap",
        overflow: "visible"
    },
    LeftContainer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-around",
        width: "45%",
        minWidth: "300px",
        height: "95%",
        [sizes.Wdown("sm")]: {
            flexGrow: 1,
            marginBottom: "3%"
        },
        [sizes.Wdown("lg")]: {
            flexGrow: 1,
            marginBottom: "3%"
        },
    },
    RightContainer: {
        color: "inherit",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-around",
        padding: "0rem 1rem",
        width: "45%",
        minWidth: "300px",
        height: "95%",
        [sizes.Wdown("sm")]: {
            flexGrow: 1,
            marginBottom: "3%"
        },
        [sizes.Wdown("lg")]: {
            flexGrow: 1,
            marginBottom: "3%"
        },
    },
    noPhoto: {
        justifyContent: "flex-start",
    },
    noPhotoContent: {
        display: "inherit",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100%"
    },
    List: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        paddingRight: "1em"
    },
    ListItem: {
        width: "15em",
        padding: "0.5rem 1rem",
        marginTop: "0.5rem",
        color: "#000000a6",
        display: "flex",
        flexDirection: "row",
        borderRadius: "1rem",
        fontSize: "2.2vmin"
    },
    listItemText: {
        fontWeight: "600",
        fontSize: `calc(18px + (30 - 18) * ((40vw - 320px) / (1600 - 300)))`
    },
    active: {
        backgroundColor: "#0000001a"
    },
    noInfoText: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "calc(1em + 1vw)",
        height: "100%",
    },
    photoTitle: {
        fontSize: "calc(0.8em + 0.8vw)",
        margin: "0.3em 0",
        textAlign: "center"
    },
    faceAvatar: {
        width: "9rem",
        height: "9rem"
    },
    photoButtonGroup: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly",
        width: "100%"
    },
    button: {
        textTransform: "none",
        color: "inherit"
    },
    editButton: {
        color: "whitesmoke",
        backgroundColor: "#1a7769",
        "&:hover": {
            color: "#1a7769"
        }
    },
    deleteButton: {
        backgroundColor: "#f4433612",
        color: "#f44336"
    },
    red: {
        backgroundColor: "#f44336"
    },
    green: {
        backgroundColor: "#4caf50"
    },
    AuthItem: {
        margin: "1.3%",
        display: "flex",
        alignItems: "center",
        width: "15em",
        cursor: "default",
        height: "6.7vh",
        "& > .AuthName": {
            width: "45%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
            justifyContent: "center",
            zIndex: "12",
            transition: "350ms",
            "& > * ": {
                fontWeight: 600,
                color: "#5f5f5f"
            }
        },
        "& > .AuthNameDis": {
            width: "45%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
            zIndex: "12",
            backgroundColor: "#c4c4c4",
            transition: "350ms",
            "& > * ": {
                fontWeight: 600,
                color: "#8a8a8a"
            }
        },
        "& > .IsActive": {
            width: "55%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "whitesmoke",
            transition: "350ms",
        },
        "& > .IsDis": {
            width: "55%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "#636363",
            transition: "350ms",
            fontSize: "1em",
        },
        "& > * ": {
            fontWeight: 600,
            color: "#5f5f5f"
        }
    },
    disabled: {
        "& > .AuthName": {
            transform: "translateX(122.5%)",
            transition: "350ms"
        },
        "& > .IsActive": {
            transform: "translateX(-80%)",
            transition: "350ms"
        }
    },
    fingerTitle: {
        fontSize: "calc(0.8em + 0.8vw)",
        margin: "0.3em 0"
    },
    fingerInfoContainer: {
        overflowY: "auto",
        width: "100%"
    },
    fingerDataContainer: {
        boxShadow: "1px 1px 5px #d0c5c5",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        margin: "4%"
    },
    fingerContainer2: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly",
        flexDirection: "row",
        width: "100%"
    },
    iconList: {
      borderRadius: "100%",
      width: "70px",
      height: "auto",
      padding: "2%",
      marginLeft: "2%",
      color: "#4f4f4f !important"
    },
    fingerItem: {
        display: "flex",
        flexDirection: "column",
        width: "100%",
        justifyContent: "space-evenly"
    },
    fingerItemTitleContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "10vh",
    },
    fingerItemTitle: {
        fontSize: "calc(17px + (23 - 17) * ((40vw - 303px) / (1600 - 300)))",
        marginTop: "0.3em",
        fontWeight: "bold",
        color: "#4f4f4f !important",
    },
    fingerItemButtonGroup: {
        display: "flex",
        alignItems: "flex-end",
        flexDirection: "row",
        justifyContent: "flex-end",
        height: "5vh"
    },
    formControl: {
        width: "50%",
        margin: theme.spacing(1),
        minWidth: 120,
        "& .MuiFormLabel-root.Mui-focused": {
            color: "#1a7769"
        }
    },
    underline: {
        "&&::after": {
            borderBottom: "2px solid #1a7769"
           // borderColor: "#1a7769"
        }
    }
}));