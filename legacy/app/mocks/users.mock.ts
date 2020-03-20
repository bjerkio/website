import { UserInterface } from '../interfaces/user.interface';
import userInfo from './user-info';

export const UsersMock: UserInterface[] = [
    {
        id: 0,
        img: 'assets/images/Sjøstrøm.jpg',
        name: 'Bjørn Niklas Sjøstrøm',
        role: [
            'Strategic Advisor',
            'CEO',
            'Partner'
        ],
        info: userInfo,
        email: 'bns@bjerk.io',
        phone: '+47 90 58 66 16'
    },
    {
        id: 1,
        img: 'assets/images/user.jpg',
        name: 'Simen A. W. Olsen',
        role: [
            'Technology Advisor',
            'CTO',
            'Partner'
        ],
        info: userInfo,
        email: 'so@bjerk.io',
        phone: '+47 95 30 80 87'
    },
    {
        id: 2,
        img: 'assets/images/Jordanger.jpg',
        name: 'Anita Jordanger',
        role: [
            'Marketing Advisor',
            'CMO',
            'Partner'
        ],
        info: userInfo,
        email: 'aj@bjerk.io',
        phone: '+47 41 36 74 07‬'
    },
    {
        id: 3,
        img: 'https://api.adorable.io/avatars/500/blue-kenneth-l-hansen.png',
        name: 'Kenneth Lisborg Hansen',
        role: [
            'Business Advisor Trainee'
        ],
        info: userInfo,
        email: 'kh@bjerk.io',
        phone: '+47 93 87 81 09'
    },
    {
        id: 4,
        img: 'https://api.adorable.io/avatars/500/cbs.png',
        name: 'Christopher Buaas Schrøder',
        role: [
            'Developer Trainee'
        ],
        info: userInfo,
        email: 'cbs@bjerk.io',
        phone: '+47 99 79 11 43'
    },
];
