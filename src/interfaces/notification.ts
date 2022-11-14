export interface Notification {
    roleId: string;
    img: string;
    name: string;
    description: string;
    message?: string;
    tag?: TagNotification;
    postedAt:string;
    status: NotificationStatusEnum;
    action?:ActionEnum;
    actionDetail?: { pictureUrl : string, href:string };
}

export interface TagNotification {
    type:string;
    text?:string;
    url?:string;
}

export enum NotificationStatusEnum {
    NOT_READ = 'not read',
    READ = 'read',
}

export enum ActionEnum {
    COMMENT_PICTURE = 'comment picture',
}

export enum TagNotificationEnum {
    LINK= 'link',
    NORMAL= 'normal',
}