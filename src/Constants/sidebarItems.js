import {ReactComponent as DashboardSvg} from "../Assets/nav/nav-home.svg";
import {ReactComponent as StudentsSvg} from "../Assets/nav/nav-user.svg";


export const SidebarItems  = [
    {
        id:1,
        name:`Dashboard`,
        link:`/`,
        icon:<DashboardSvg/>
    },
    {
        id:2,
        name:`Students`,
        link:`/Login`,
        icon:<StudentsSvg/>
    },


]