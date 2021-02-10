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
import { data } from './dummyData';
import EmailIcon from '@material-ui/icons/Email';
import slack from './slack.svg';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
        minWidth: 345,
        margin: 5,
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

export default function TeamCard(props) {
    const classes = useStyles();
    const entry = props.entry;
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card className={classes.root}>
            <CardHeader
                title={entry.teamName}
                subheader={entry.location}
            />
            <CardMedia
                className={classes.media}
                image={entry.image}
                title={entry.teamName}
            />
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <EmailIcon />
                </IconButton>
                <IconButton aria-label="share">
                    <img src={slack} className="slack-logo" alt="slack logo" />
                </IconButton>
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
                    <Typography paragraph>Product: {entry.product}</Typography>
                    <Typography paragraph>Stack: {entry.stack.toString()}</Typography>
                    <Typography paragraph>{entry.description}</Typography>
                </CardContent>
            </Collapse>
        </Card>
    );
}