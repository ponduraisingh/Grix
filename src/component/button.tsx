import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

const ButtonPrimary = styled(Button)(({ theme }) => ({
    fontSize:16,
    fontWeight:500,
    boxShadow: "none",
    overflow: "hidden",
    padding:"12px 28px",
    lineHeight: 1.1,
    position: "relative",
    textTransform: "none",
    WebkitTransition: "all 0.3s ease 0s",
    MozTransition: "all 0.3s ease 0s",
    OTransition: "all 0.3s ease 0s",
    transition: "all 0.3s ease 0s",
    borderRadius: 8,
    "&:after": {
        content: "''",
        position: "absolute",
        height: "0%",
        left: "50%",
        top: "50%",
        width: "150%",
        zIndex: "-1",
        MozTransform: "translateX(-50%) translateY(-50%) rotate(25deg)",
        MsTransform: "translateX(-50%) translateY(-50%) rotate(25deg)",
        WebkitTransform: "translateX(-50%) translateY(-50%) rotate(25deg)",
        transform: "translateX(-50%) translateY(-50%) rotate(25deg)",
        WebkitTransition: "all 0.6s ease 0s",
        MozTransition: "all 0.6s ease 0s",
        OTransition: "all 0.6s ease 0s",
        transition: "all 0.6s ease 0s",
    },
    "&:hover": {
      "&:after": {
        height: "450%",
      }
    },
}));
const ButtonOutline = styled(Button)(({ theme }) => ({
    fontSize:16,
    fontWeight:500,
    boxShadow: "none",
    overflow: "hidden",
    padding:"12px 16px",
    lineHeight: 1.1,
    position: "relative",
    textTransform: "none",
    WebkitTransition: "all 0.3s ease 0s",
    MozTransition: "all 0.3s ease 0s",
    OTransition: "all 0.3s ease 0s",
    transition: "all 0.3s ease 0s",
    borderRadius: 4,
    maxWidth: 320,
    "&:hover": {
      "&:after": {
        height: "450%",
      }
    },
}));
const ButtonAction = styled(Button)(({ theme }) => ({
    fontSize:16,
    fontWeight:500,
    boxShadow: "none",
    overflow: "hidden",
    padding:"16px 32px",
    lineHeight: 1.1,
    position: "relative",
    textTransform: "none",
    WebkitTransition: "all 0.3s ease 0s",
    MozTransition: "all 0.3s ease 0s",
    OTransition: "all 0.3s ease 0s",
    transition: "all 0.3s ease 0s",
    borderRadius: 4,
    "&:hover": {
      "&:after": {
        height: "450%",
      }
    },
}));

export { ButtonPrimary, ButtonOutline, ButtonAction };