import { ActionEnum, Notification, NotificationStatusEnum, TagNotificationEnum } from "../interfaces/notification";

const NotificationCard = ({roleId, img, name, description, message, postedAt, tag, status, action, actionDetail }:Notification) => {
    return (
        <div role={roleId} className={`flex gap-4 p-5 rounded-md items-start
        ${status == NotificationStatusEnum.NOT_READ && 'bg-very_light_grayish_blue'} hover:bg-light_grayish_blue_1`}>
              <img src={img} alt="mark" className="w-10"/>
              <div className="flex justify-between w-full gap-3">
                <div className="text-slate-400 text-sm">
                  <div className="flex items-center gap-2">
                    <div>
                      <span className="text-slate-900 font-bold cursor-pointer hover:text-primary_blue">{name}</span> {description}&nbsp;
                      {tag && <a className={`${tag.type === TagNotificationEnum.LINK ? 'text-primary_blue': 'text-slate-600'}  font-bold
                      hover:text-primary_blue`}
                      href={tag?.url ?? ''}>&nbsp;{tag?.text}</a>}
                    </div>
                    { status === NotificationStatusEnum.NOT_READ &&
                      <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                    }
                  </div>
                  <div>{postedAt}</div>
                  {message &&
                    <div className="p-5 border mt-4 cursor-pointer active:bg-blue-200">
                          <p>{message}</p>
                    </div>
                  }
                </div>
                { action == ActionEnum.COMMENT_PICTURE &&
                  <div className="flex justify-end">
                    <a href={actionDetail?.href}>
                      <img src={actionDetail?.pictureUrl} alt="mark" className="w-20 lg:w-10 rounded-md"/>
                    </a>
                  </div>
                }
              </div>
        </div>
     );
}

export default NotificationCard;