import React from 'react';

import { FaBook } from "react-icons/fa6";
import { IoIosListBox } from "react-icons/io";
import { FaHistory } from "react-icons/fa";
import { ImProfile } from 'react-icons/im';
import { MdAdminPanelSettings } from 'react-icons/md';

const links=[{
    text:"profile",
    path:".",
    icon:<ImProfile/>
},
{
    text:"admin",
    path:"admin",
    icon:<MdAdminPanelSettings/>
},
{
    text:"issueReturn",
    path:"issueReturn",
    icon:<FaBook/>
},
{
    text:"wishlist",
    path:"wishlist",
    icon:<IoIosListBox/>
},
{
    text:"history",
    path:"history",
    icon:<FaHistory/>
}
]

export default links