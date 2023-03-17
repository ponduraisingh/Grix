import { styled } from "@mui/material/styles";
import TextField from '@mui/material/TextField';

const TextFieldPrimary = styled(TextField)(({ theme }) => ({
    width: "100%",
    "& .MuiInputBase-root": {
        "&:before": {
            borderBottomWidth: 2,
        },
        "&:after": {
            borderBottomWidth: 2,
        },
    },
    "&:after": {
    },
    "&:hover": {

    },
}));

export { TextFieldPrimary };