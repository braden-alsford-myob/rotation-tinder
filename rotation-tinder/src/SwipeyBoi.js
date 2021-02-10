import './SwipeyBoi.css';
import React, {useState} from 'react';
import TinderCard from 'react-tinder-card'
import Confetti from 'react-dom-confetti';


const data = [
    {
        id: 1,
        image:
            "https://images.idgesg.net/images/article/2018/07/diverse_teamwork_group_meeting_by_rawpixel_cc0_via_unsplash_1200x800-100763372-large.jpg",
        teamName: "Unicorn",
        stack: ["React", "C#"],
        description: "Our team consists of 2 senior devs, a BA and a QA",
        product: "New Essentials",
        location: "Melbourne",
        domain: "Accounting and Banking",
        contact: {
            name: "John Smith",
            role: "Senior Developer",
            email: "john.smith@fake.com",
            slack: "John Smith"
        },
        pairing: 80,
        previousProteges: [{
            name: "James Kehoe",
            email: "james.kehoe@fake.com",
            slack: "James Kehoe"
        }, {
            name: "Amanda Chau",
            email: "amanda.chau@fake.com",
            slack: "Amanda Chau"
        }]
    },
    {
        id: 2,
        image:
            "https://images.idgesg.net/images/article/2018/07/diverse_teamwork_group_meeting_by_rawpixel_cc0_via_unsplash_1200x800-100763372-large.jpg",
        teamName: "Area51",
        stack: ["React", "C#"],
        description: "Our team consists of 2 senior devs, a BA and a QA",
        product: "All Products",
        location: "Melbourne",
        domain: "Bank Feeds",
        contact: {
            name: "Jane Smith",
            role: "Delivery Manager",
            email: "jane.smith@fake.com",
            slack: "Jane Smith"
        },
        pairing: 100,
        previousProteges: [{
            name: "James Kehoe",
            email: "james.kehoe@fake.com",
            slack: "James Kehoe"
        }, {
            name: "Amanda Chau",
            email: "amanda.chau@fake.com",
            slack: "Amanda Chau"
        }]
    },
    {
        id: 3,
        image:
            "https://images.idgesg.net/images/article/2018/07/diverse_teamwork_group_meeting_by_rawpixel_cc0_via_unsplash_1200x800-100763372-large.jpg",
        teamName: "BiFrost",
        stack: ["React", "C#"],
        description: "Our team consists of 2 senior devs, a BA and a QA",
        product: "New Essentials",
        location: "Melbourne",
        domain: "Some Domain",
        contact: {
            name: "Michael Smith",
            role: "Senior Developer",
            email: "michael.smith@fake.com",
            slack: "Michael Smith"
        },
        pairing: 0,
        previousProteges: []
    }
];

const SwipeyBoi = (props) => {

    const config = {
        angle: 90,
        spread: 360,
        startVelocity: 40,
        elementCount: 500,
        dragFriction: 0.12,
        duration: 3000,
        stagger: 3,
        width: "28px",
        height: "29px",
        perspective: "623px",
        colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"]
    };

    const [confetti, setConfetti] = useState(false)

    const swiped = (direction, team) => {
        console.log('removing: ' + team)
        if (direction == "right") {
            setConfetti(true);
            setConfetti(false);
        }
    };

    const outOfFrame = (name) => {
        console.log(name + ' left the screen!')
    };

    return (
        <div>
            <link href='https://fonts.googleapis.com/css?family=Damion&display=swap' rel='stylesheet' />
            <link href='https://fonts.googleapis.com/css?family=Alatsi&display=swap' rel='stylesheet' />

            <h1>Bianca presents: FMA Rotation Tinder</h1>
            <Confetti active={ confetti } config={ config }/>

            <div className='cardContainer'>
                {data.map((team) =>
                    <TinderCard preventSwipe={['up', 'down']} className='swipe' key={team.teamName} onSwipe={(dir) => swiped(dir, team)} onCardLeftScreen={() => outOfFrame(team.teamName)}>
                        <div style={{ backgroundImage: 'url(' + team.image + ')' }} className='card'>
                            <h3>{team.teamName}</h3>
                        </div>
                    </TinderCard>
                )}
            </div>
        </div>
    )
};

export default SwipeyBoi;
