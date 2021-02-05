import React from 'react';
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { useHistory } from "react-router-dom";
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
  let history = useHistory();

//   console.log(props.deployed)

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleImageLink = () => {
    
     console.log(props.deployed)
       setLink((imagelink.push(props.deployed)))
       console.log(imagelink[0])
       const url = imagelink[0];
       window.open(url, '_blank')
    
  }

  return (
    <Card className={classes.root} id="card-container">
      <CardHeader
        // avatar={
        //   <Avatar aria-label="recipe" className={classes.avatar}>
        //     R
        //   </Avatar>
        // }
        // action={
        //   <IconButton aria-label="settings">
        //     <MoreVertIcon />
        //   </IconButton>
        // }
        title={props.projects}
        style={{textAlign: "center"}}
      />
      <CardMedia
        className={classes.media}
        image={props.image} 
        title="Paella dish"
        onClick={handleImageLink}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        {/* <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton> */}
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
          {/* <Typography paragraph>{props.github} {props.deployed} </Typography> */}
          <div>
          <p style={{color: "black", fontSize: "16px", marginBottom: "0px"}}>Github:</p>
          <a href={props.github} style={{fontSize: "14px"}}>{props.github}</a>
          </div>
          <div>
          <p style={{color: "black", fontSize: "16px", marginBottom: "0px"}}>Deployed:</p>
           <a href={props.deployed} style={{fontSize: "14px"}}>{props.deployed}</a>
           </div>
        </CardContent>
      </Collapse>
    </Card>
  );
}