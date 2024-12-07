import { createTheme } from "@mui/material/styles";

import borders from "./base/borders";
import boxShadows from "./base/boxShadows";
import breakpoints from "./base/breakpoints";
import colors from "./base/colors";
import globals from "./base/globals";
import typography from "./base/typography";
 
import boxShadow from "../../utils/functions/boxShadow";
import hexToRgb from "../../utils/functions/hexToRgb";
import linearGradient from "../../utils/functions/linearGradient";
import pxToRem from "../../utils/functions/pxToRem";
import rgba from "../../utils/functions/rgba";

import appBar from "./components/appBar";
import avatar from "./components/avatar";
import buttonBase from "./components/buttonBase";
import card from "./components/card";
import cardContent from "./components/card/cardContent";
import cardMedia from "./components/card/cardMedia";
import container from "./components/container";
import formControlLabel from "./components/form/formControlLabel";
import formLabel from "./components/form/formLabel";
import input from "./components/form/input";
import inputLabel from "./components/form/inputLabel";
import textField from "./components/form/textField";
import icon from "./components/icon";
import link from "./components/link";
import listItem from "./components/list/listItem";
import listItemText from "./components/list/listItemText";
import popover from "./components/popover";
import slider from "./components/slider";
import svgIcon from "./components/svgIcon";
import tooltip from "./components/tooltip";

export default createTheme({
  breakpoints: { ...breakpoints },
  palette: { ...colors },
  typography: { ...typography },
  boxShadows: { ...boxShadows },
  borders: { ...borders },
  functions: {
    boxShadow,
    hexToRgb,
    linearGradient,
    pxToRem,
    rgba,
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        ...globals,
        ...container,
      },
    },  
    MuiListItem: { ...listItem },
    MuiListItemText: { ...listItemText },
    MuiCard: { ...card },
    MuiCardMedia: { ...cardMedia },
    MuiCardContent: { ...cardContent }, 
    MuiInput: { ...input },
    MuiInputLabel: { ...inputLabel }, 
    MuiTextField: { ...textField },   
    MuiSlider: { ...slider },
    MuiAvatar: { ...avatar },
    MuiTooltip: { ...tooltip },
    MuiAppBar: { ...appBar },     
    MuiFormControlLabel: { ...formControlLabel },
    MuiFormLabel: { ...formLabel }, 
    MuiPopover: { ...popover },
    MuiButtonBase: { ...buttonBase },
    MuiIcon: { ...icon },
    MuiSvgIcon: { ...svgIcon },
    MuiLink: { ...link }, 
  },
});
