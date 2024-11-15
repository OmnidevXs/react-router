import { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';

import ProfileContent from '../components/profile';
import menuData from '../db/category.json'

export default function Root() {
    const [openMenu, setOpenMenu] = useState(null);

    const toggleMenu = (menu) => {
        setOpenMenu(openMenu === menu ? null : menu); // Toggle the open menu
    };

    return (
        <>
            <aside className="sidebar">
                <div className="profile"><ProfileContent /></div>

                <ul className="top-menu">
                    {menuData.map((menu) => (
                        <li key={menu.id}>
                            <div className="iocn-link" onClick={() => toggleMenu(menu.id)}>
                                <a href="#">
                                    <i className={menu.icon}></i>
                                    <span className="top-menu-style">{menu.title}</span>
                                </a>
                                <i
                                    className={`bx bxs-chevron-down arrow ${openMenu === menu.id ? 'rotate' : ''
                                        }`}
                                ></i>
                            </div>
                            {openMenu === menu.id && (
                                <ul className="sub-menu">
                                    {menu.subMenu.map((subItem) => (
                                        <li key={subItem.id}>
                                            <Link to={`/contacts/${subItem.dataBook}`} className="sidebar-link">
                                                {subItem.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>
            </aside>

            <div id="detail">
                <Outlet />
            </div>
        </>
    );
}