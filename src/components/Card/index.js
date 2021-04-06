import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import "./style.css";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function RecipeReviewCard(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [imagelink, setLink] = React.useState([]);
  let expandCard;

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleImageLink = () => {
       setLink((imagelink.push(props.deployed)))
       const url = imagelink[0];
       window.open(url, '_blank')
  }

 if (expanded) {
   expandCard = "575px"
 } else {
   expandCard = "450px"
 }

  return (
    <Card className={classes.root} id="card-container" style={{height: expandCard}}>
      <CardHeader
        title={props.projects}
        style={{textAlign: "center"}}
      />
      <CardMedia
        className={classes.media}
        image={props.image} 
        title="image"
        onClick={handleImageLink}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing className="arrow-container">
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <div>
          <p style={{color: "black", fontSize: "16px", marginBottom: "0px"}}>Github:</p>
          <a href={props.github} style={{fontSize: "14px"}} target="blank">{props.github}</a>
          </div>
          <div>
          <p style={{color: "black", fontSize: "16px", marginBottom: "0px"}}>Deployed:</p>
           <a href={props.deployed} style={{fontSize: "14px"}} target="blank">{props.deployed}</a>
           </div>
        </CardContent>
      </Collapse>
    </Card>
  );
}