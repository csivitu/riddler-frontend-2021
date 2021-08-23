import { makeStyles, Tooltip } from "@material-ui/core";

const LightTooltipStyle = makeStyles((theme) => ({
  arrow: {
    color: "#3B3B3B",
  },
  tooltip: {
    backgroundColor: "#3B3B3B",
    color: "#FFFFFF",
    fontWeight: 500,
    boxShadow: theme.shadows[1],
    fontSize: "0.8rem",
  },
}));

const LightTooltip = (props) => {
  const classes = LightTooltipStyle();

  return <Tooltip arrow classes={classes} {...props} />;
}

export default LightTooltip;