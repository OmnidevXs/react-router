import { useState } from 'react';
import ProfileContent from '../components/profile';
import menuData from '../data/menuData.json';

export default function Root() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [openMenu, setOpenMenu] = useState(null);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const toggleMenu = (menu) => {
        setOpenMenu(openMenu === menu ? null : menu); // Toggle the open menu
    };

    return (
        <>
            <aside className="sidebar">
                <div className="profile">
                    <ProfileContent />
                </div>
                <ul className="top-menu">
                    {menuData.map((menu) => (
                        <li key={menu.id}>
                            <div className="iocn-link" onClick={() => toggleMenu(menu.id)}>
                                <a href="#">
                                    <i className={menu.icon}></i>
                                    <span className="top-menu-style">{menu.title}</span>
                                </a>
                                <i
                                    className={`bx bxs-chevron-down arrow ${
                                        openMenu === menu.id ? 'rotate' : ''
                                    }`}
                                ></i>
                            </div>
                            {openMenu === menu.id && (
                                <ul className="sub-menu">
                                    {menu.subMenu.map((subItem) => (
                                        <li key={subItem.id}>
                                            <a
                                                href="#"
                                                className="sidebar-link"
                                                data-book={subItem.dataBook}
                                            >
                                                {subItem.label}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>
            </aside>
        </>
    );
}
