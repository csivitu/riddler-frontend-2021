import { makeStyles, Tooltip } from "@material-ui/core";

const LightTooltipStyle = makeStyles((theme) => ({
  arrow: {
    color: "#D3D3D3",
  },
  tooltip: {
    backgroundColor: "#D3D3D3",
    color: "rgba(0, 0, 0, 1)",
    boxShadow: theme.shadows[1],
    fontSize: "1rem",
  },
}));

const LightTooltip = (props) => {
  const classes = LightTooltipStyle();

  return <Tooltip arrow classes={classes} {...props} />;
}

export default LightTooltip;