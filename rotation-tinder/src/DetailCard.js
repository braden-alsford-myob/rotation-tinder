import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { useSpring, animated } from 'react-spring'
import Divider from "@material-ui/core/Divider";
import Chip from "@material-ui/core/Chip";

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 250,
    },
});

export default function DetailCard(prop) {
    const team = prop.team;
    const classes = useStyles();
    const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 2, tension: 350, friction: 40 } }))

    return (
        <animated.div
            onMouseMove={({clientX: x, clientY: y}) => set({xys: calc(x, y)})}
            onMouseLeave={() => set({xys: [0, 0, 1]})}
            style={{transform: props.xys.interpolate(trans)}}
        >
            <div>
                <Card className={classes.root}>
                    <CardMedia
                        className={classes.media}
                        image={team.image}
                        title={team.teamName}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2" style={{color: "black"}}>
                            {team.teamName}
                        </Typography>
                        <Chip label={"Location: " + team.location} variant="outlined" color="primary" style={{margin: "5px"}}/>
                        <Chip label={"Stack: " + team.stack.join(', ')} variant="outlined" color="primary" style={{margin: "5px"}}/>
                        <Chip label={"Product: " + team.product} variant="outlined" color="primary" style={{margin: "5px"}}/>
                        <Divider style={{margin: "5px"}}/>
                        <Typography variant="body1" color="textSecondary" component="p">
                            {team.description}
                        </Typography>

                    </CardContent>
                </Card>
            </div>
        </animated.div>

    );
}