import type { Dayjs } from 'dayjs';
import dayjs from 'dayjs';

export const EVENT_LIST_BY_DAY = (value: Dayjs) => {
    switch (value.format('MMMM D')) {
        case 'July 13':
            return [{
                title: 'Young Adults Group!',
                description: 'As always, we have our Thursday night group! This recurring event is a lovely time to find community and dig into some hard questions together. Hope to see you there!',
                meetingPlace: '1595 Pearl St, Denver, CO 80203',
                time: '7:00 PM',
                contact: 'Tommy Madden (408-355-0639)',
                rsvpBy: null
            }];
        case 'July 15':
            return [{
                title: 'Board Game Night',
                description: 'Let\'s get together and play some fun board games! Maybe Blockbuster? Cards Against Humanity? Regardless it\'ll be a fun time!',
                meetingPlace: '2021 Samuel Drive, Denver, CO 80221',
                time: '7:00 PM',
                contact: 'Anna Hallinan (918-894-3391)',
                rsvpBy: null
            }];
        case 'July 20':
            return [{
                title: 'Young Adults Group!',
                description: 'As always, we have our Thursday night group! This recurring event is a lovely time to find community and dig into some hard questions together. Hope to see you there!',
                meetingPlace: '1595 Pearl St, Denver, CO 80203',
                time: '7:00 PM',
                contact: 'Tommy Madden (408-355-0639)',
                rsvpBy: null
            }];
        case 'July 16':
            return [{
                title: 'Park Day',
                description: 'Today seems as good a day as ever to go to the park!',
                meetingPlace: 'Cheesman Park',
                time: '1:00 PM',
                contact: 'Tommy Madden (408-355-0639)',
                rsvpBy: null
            }];
        case 'July 21':
            return [{
                title: 'Bar Night',
                description: 'Let\'s have a fun night of bar games and friendship!',
                meetingPlace: 'Bierstadt Lagerhaus',
                time: '8:00 PM',
                contact: 'Tommy Madden (408-355-0639)',
                rsvpBy: null
            }]
        case 'July 22':
            return [{
                title: 'Tubing Escapade',
                description: 'Let\'s go tubing down Platte River!',
                meetingPlace: '6600 W 4th Ave, Lakewood, CO 80226',
                time: '10:30 AM',
                contact: 'Eric Alvarez (970-889-9261)',
                rsvpBy: dayjs('July 20'),
            }];
        case 'July 23':
            return [{
                title: 'Park Day',
                description: 'Let\'s meet up with Sunday Social crew at City Park Jazz! There will be a concert from 6pm to 8pm.',
                meetingPlace: 'City Park Jazz',
                time: '4:00 PM',
                contact: 'Anna Hallinan (918-894-3391)',
                rsvpBy: null
            }];
        case 'July 27':
            return [{
                title: 'Young Adults Group!',
                description: 'As always, we have our Thursday night group! This recurring event is a lovely time to find community and dig into some hard questions together. Hope to see you there!',
                meetingPlace: '1595 Pearl St, Denver, CO 80203',
                time: '7:00 PM',
                contact: 'Tommy Madden (408-355-0639)',
                rsvpBy: null
            }];
        case 'July 29':
            return [{
                title: 'St. Mary\'s Glacier Hike!',
                description: '',
                meetingPlace: '1621 S Allison St, Denver, CO 80232',
                time: '1:00 PM',
                contact: 'Tommy Madden (408-355-0639)',
                rsvpBy: dayjs('July 29 9:00 AM')
            }];
        case 'August 1':
            return [{
                title: 'Rockies Game',
                description: 'There\'s a Rockies game on the first of August, and we thought it would be fun to go as a group!',
                meetingPlace: 'Coors Field',
                time: '6:40 PM',
                contact: 'Anna Hallinan (918-894-3391)',
                rsvpBy: dayjs('July 28'),
            }];
        case 'August 3':
            return [{
                title: 'Young Adults Group!',
                description: 'As always, we have our Thursday night group! This recurring event is a lovely time to find community and dig into some hard questions together. Hope to see you there!',
                meetingPlace: '1595 Pearl St, Denver, CO 80203',
                time: '7:00 PM',
                contact: 'Tommy Madden (408-355-0639)',
                rsvpBy: null
            }];
        case 'August 5':
            return [{
                title: 'Lake Day',
                description: 'It should stop raining by August, right? That\'s our hope, as we plan to head to Chatfield State Park for a dip in the lake on 8/5!',
                meetingPlace: '6600 W 4th Ave, Lakewood, CO 80226',
                time: '12:30 PM',
                contact: 'Eric Alvarez (970-889-9261)',
                rsvpBy: dayjs('August 3')
            }];
        case 'August 10':
            return [{
                title: 'Young Adults Group!',
                description: 'As always, we have our Thursday night group! This recurring event is a lovely time to find community and dig into some hard questions together. Hope to see you there!',
                meetingPlace: '1595 Pearl St, Denver, CO 80203',
                time: '7:00 PM',
                contact: 'Tommy Madden (408-355-0639)',
                rsvpBy: null
            }];
        case 'August 12':
            return [{
                title: 'White Water Rafting!',
                description: 'We\'re going white water rafting as a group!',
                meetingPlace: '1621 S Allison St, Denver, CO 80232',
                time: '10:30 AM',
                contact: 'Tommy Madden (408-355-0639)',
                rsvpBy: dayjs('July 28')
            }];
        case 'August 13':
            return [{
                title: 'Park Day',
                description: 'Here\'s another chance for a fun park day everyone!',
                meetingPlace: 'Cheesman Park',
                time: '1:00 PM',
                contact: 'Eric Alvarez (970-889-9261)',
                rsvpBy: null
            }];
        case 'August 17':
            return [{
                title: 'Young Adults Group!',
                description: 'As always, we have our Thursday night group! This recurring event is a lovely time to find community and dig into some hard questions together. Hope to see you there!',
                meetingPlace: '1595 Pearl St, Denver, CO 80203',
                time: '7:00 PM',
                contact: 'Tommy Madden (408-355-0639)',
                rsvpBy: null
            }];
        case 'August 18':
            return [{
                title: '88 Drive-In Movie Theater',
                description: 'Let\'s go to a drive-in movie theater, everyone!',
                meetingPlace: '8780 Rosemary St, Commerce City, CO 80640',
                time: '8:45 PM',
                contact: 'Tommy Madden (408-355-0639)',
                rsvpBy: dayjs('August 16')
            }];
        case 'August 19':
            return [{
                title: 'Outback Saloon Night',
                description: 'Paint the town green!',
                meetingPlace: 'Outback Saloon',
                time: '8:00 PM',
                contact: 'Anna Hallinan (918-894-3391)',
                rsvpBy: null
            }];
        case 'August 24':
            return [{
                title: 'Young Adults Group!',
                description: 'As always, we have our Thursday night group! This recurring event is a lovely time to find community and dig into some hard questions together. Hope to see you there!',
                meetingPlace: '1595 Pearl St, Denver, CO 80203',
                time: '7:00 PM',
                contact: 'Tommy Madden (408-355-0639)',
                rsvpBy: null
            }];
        case 'August 26':
            return [{
                title: 'Paradise Cove Day Trip!',
                description: 'How would you like to experience paradise? With a bit of hiking and a quick two hour drive made fun with laughter and camaraderie, Paradise Cove is the perfect place for you to cliff jump, relax, and rejuvenate your senses!',
                meetingPlace: '2021 Samuel Drive, Denver, CO 80221',
                time: '9:30 AM',
                contact: 'Anna Hallinan (918-894-3391)',
                rsvpBy: dayjs('August 24')
            }];
        case 'August 27':
            return [{
                title: 'Wash Park Day',
                description: 'Let\'s head down south for a fun park day at Wash Park! Spikeball encouraged!',
                meetingPlace: 'Wash Park',
                time: '1:00 PM',
                contact: 'Tommy Madden (408-355-0639)',
                rsvpBy: null
            }];
        case 'August 31':
            return [{
                title: 'Young Adults Group!',
                description: 'As always, we have our Thursday night group! This recurring event is a lovely time to find community and dig into some hard questions together. Hope to see you there!',
                meetingPlace: '1595 Pearl St, Denver, CO 80203',
                time: '7:00 PM',
                contact: 'Tommy Madden (408-355-0639)',
                rsvpBy: null
            }];
        case 'September 2':
            return [{
                title: 'South Table Hike',
                description: 'There\'s a wonderful hike in Golden called the South Table hike!',
                meetingPlace: '16741 Golden Hills Road, Golden, CO 80401',
                time: '1:00 PM',
                contact: 'Anna Hallinan (918-894-3391)',
                rsvpBy: dayjs('September 2  9:00 AM')
            }];
        default:
            return [];
    }
//    title: 'Board Game Night',
};