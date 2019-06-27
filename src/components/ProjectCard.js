import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    card: {
        width: 245,
    },
    media: {
        height: 140,
    },
    content: {
        height: 45,
    },
});

export default function ProjectCard({ title, desc, image, onSelect, onRemove }) {

    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <CardActionArea onClick={onSelect}>
                <CardMedia
                    className={classes.media}
                    image={image}
                    title={title}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p" className={classes.content}>
                        {desc}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary" onClick={onRemove}>
                    Remove
                </Button>
            </CardActions>
        </Card>
    );
}

/*
  <ProjectCard
      title="Ghast Farm"
      desc="Ilmago's Ghast farm for all your ghast tear needs."
      image="https://i.ytimg.com/vi/Dqm75ezNKJM/maxresdefault.jpg"
      onSelect={() => alert("OK")}
      onRemove={() => alert("remove")}
  />
 */
