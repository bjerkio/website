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
        phone: '+47 90 90 90 90'
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
        phone: '+47 90 90 90 90'
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
        phone: '+47 90 90 90 90'
    },
    {
        id: 3,
        img: 'assets/images/Hansen.jpg',
        name: 'Kenneth Lisborg Hansen',
        role: [
            'Business Advisor Trainee'
        ],
        info: userInfo,
        email: 'kh@bjerk.io',
        phone: '+47 90 90 90 90'
    },
    {
        id: 4,
        img: 'assets/images/Schrøder.jpg',
        name: 'Christopher Buaas Schrøder',
        role: [
            'Developer Trainee'
        ],
        info: userInfo,
        email: 'cbs@bjerk.io',
        phone: '+47 90 90 90 90'
    },
];
