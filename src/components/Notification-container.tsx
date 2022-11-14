import { ActionEnum, Notification, NotificationStatusEnum, TagNotificationEnum } from "../interfaces/notification";
import NotificationCard from "./notificacion-card";

const NotificationContainer = () => {
    const notificaciones: Notification[] = [
        {
            roleId: 'card-user-mark',
            img:'./img/avatar-mark-webber.webp',
            name:'Mark Webber',
            description: 'reacted to your recent post',
            tag: { type: TagNotificationEnum.NORMAL, text:'My first tournament today! cacca', },
            postedAt: '1m ago',
            status: NotificationStatusEnum.NOT_READ
        },
        {
            roleId: 'card-user-angela',
            img:'./img/avatar-angela-gray.webp',
            name:'Angela Gray',
            description: 'followed you',
            tag: { type: TagNotificationEnum.NORMAL },
            postedAt: '5m ago',
            status: NotificationStatusEnum.NOT_READ
        },
        {
            roleId: 'card-user-jacob',
            img:'./img/avatar-jacob-thompson.webp',
            name:'Jacob Thompson',
            description: 'has joined your group',
            tag: { type: TagNotificationEnum.LINK, text:'Chess Club' },
            postedAt: '1 day ago',
            status: NotificationStatusEnum.NOT_READ
        },
        {
            roleId: 'card-user-rizky',
            img:'./img/avatar-rizky-hasanuddin.webp',
            name:'Rizky Hasanuddin',
            description: 'sent you a private message',
            message: `Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and
            I'm already having lots of fun and improving my game.`,
            postedAt: '1 day ago',
            status: NotificationStatusEnum.READ
        },
        {
            roleId: 'card-user-kimberly',
            img:'./img/avatar-kimberly-smith.webp',
            name:'Kimberly Smith',
            description: 'commented on your picture',
            postedAt: '1 week ago',
            status: NotificationStatusEnum.READ,
            action: ActionEnum.COMMENT_PICTURE,
            actionDetail: {
                pictureUrl: './img/image-chess.webp',
                href:''
            }
        },
        {
            roleId: 'card-user-nathan',
            img:'./img/avatar-nathan-peterson.webp',
            name:'Nathan Peterson',
            description: 'reacted to your recent post',
            tag: {type: TagNotificationEnum.NORMAL, text:'5 end-game strategies to increase your win rate'},
            postedAt: '2 weeks ago',
            status: NotificationStatusEnum.READ
        },
        {
            roleId: 'card-user-anna',
            img:'./img/avatar-anna-kim.webp',
            name:'Anna Kim',
            description: 'left the group',
            tag: {type: TagNotificationEnum.LINK, text:'Chess Club'},
            postedAt: '2 weeks ago',
            status: NotificationStatusEnum.READ,
        },
    ];

    return (
        <div role="cards-container" className="flex flex-col gap-3">
            {notificaciones.map((notificacion, index)=>(<NotificationCard key={index} {...notificacion}/>))}
        </div>
     );
}

export default NotificationContainer;