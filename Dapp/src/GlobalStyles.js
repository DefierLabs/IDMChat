import { makeStyles } from '@material-ui/core/styles';

var drawerWidth = 240
const GlobalStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
      },
      appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        background: "linear-gradient(90deg, " + theme.palette.primary.dark + " 0%, " + theme.palette.secondary.light + " 90%)",
      },
      appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
      menuButton: {
        marginRight: 36,
      },
      hide: {
        display: 'none',
      },
      drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
      },
      drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
      drawerClose: {
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9) + 1,
        },
      },
      toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
      },
      content: {
        flexGrow: 1,
        padding: theme.spacing(7),
      },
      toolbarButtons: {
        marginLeft: 'auto',
      },
      formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
        color:"white"
      },
      selectEmpty: {
        marginTop: theme.spacing(2),
      },
      headerPaper: {
        color: "white",
        background: "linear-gradient(90deg, " + theme.palette.primary.dark + " 0%, " + theme.palette.secondary.light + " 90%)",
        padding: theme.spacing(1)
      },
      paperContainer: {
        color: "white",
        backgroundImage: `url(${"images/resources/bg.gif"})`,
      },
        rootPage: {
          flexGrow: 1,
        },
        paper: {
          padding: theme.spacing(1),
          textAlign: 'center',
          color: theme.palette.text.primary,
        },
        textField: {
          marginLeft: theme.spacing(1),
          marginRight: theme.spacing(1),
          width: '25ch',
        },
        option: {
          fontSize: 15,
          '& > span': {
            marginRight: 10,
            fontSize: 18,
          },
        },
        cardWithBG: {
          maxWidth: 1000,
          background: "linear-gradient(90deg, " + theme.palette.primary.dark + " 0%, " + theme.palette.secondary.light + " 90%)",
          color: "white"
        },
        card: {
          maxWidth: 10000,
        },
        cardWithoutBg: {
          maxWidth: 10000,
          color: "white",
          backgroundColor: 'transparent',
          boxShadow: 'none',
          borderColor: 'transparent',
          margin: theme.spacing(1),
          padding: theme.spacing(1),
        },
        cardWithoutBgwithBorder: {
          maxWidth: 10000,
          color: "white",
          backgroundColor: 'transparent',
          boxShadow: 'none',
          borderColor: 'white',
          borderWidth: 3,
          margin: theme.spacing(1),
          padding: theme.spacing(1),
        },
        cardWithItems: {
          maxWidth: 1000,
          background: "linear-gradient(90deg, " + theme.palette.primary.dark + " 0%, " + theme.palette.secondary.light + " 90%)",
          color: "white",
          margin: theme.spacing(1),
          align: "center"
        },
        button: {
          margin: theme.spacing(1),
        },
        actionsContainer: {
          marginBottom: theme.spacing(2),
        },
        resetContainer: {
          padding: theme.spacing(3),
        },
        inputSlider: {
          width: 300,
          margin: theme.spacing(1),
        },
        input: {
          width: 100,
          margin: theme.spacing(1),
        },
        largeAvatar: {
          width: theme.spacing(7),
          height: theme.spacing(7),
          margin: theme.spacing(1),
        },
    }));

export default GlobalStyles