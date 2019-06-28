import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    drawerWidth: 55,
    palette: {
        type: 'dark',
        primary: {
            main: '#29b6f6',
        },
        secondary: {
            main: '#ffa726',
        },
    },
});

export default theme;
