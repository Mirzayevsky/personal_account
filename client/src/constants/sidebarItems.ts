import { IsidebarItems } from "src/interfaces/interface";
import {ReactComponent as ContactssSvg} from "../assets/sidebar/list.svg";

export const SidebarItems:IsidebarItems[] = [
    {
        id:1,
        name:`Contacts`,
        link:`/contacts`,
        Icon:ContactssSvg
    },
]