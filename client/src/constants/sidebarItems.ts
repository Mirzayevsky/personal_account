import { SidebarItemsType } from "src/interfaces/interface";
import {ReactComponent as ContactssSvg} from "../assets/sidebar/list.svg";

export const SidebarItems:SidebarItemsType[] = [
    {
        id:1,
        name:`Contacts`,
        link:`/contacts`,
        Icon:ContactssSvg
    },

]