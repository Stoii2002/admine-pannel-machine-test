import { Button, Nav, NavItem } from "reactstrap";
import { Link, useLocation } from "react-router-dom";
import user1 from "../assets/images/users/user4.jpg";
import probg from "../assets/images/bg/download.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faCloud, faCloudArrowDown, faContactBook, faMailBulk, faMailForward, faPowerOff } from '@fortawesome/free-solid-svg-icons';

const navigation = [
  {
    title: "Dashboard",
    href: "/starter",
    icon: "bi bi-speedometer2",
  },
  {
    title: "Perks",
    
    icon: "bi bi-bell",
  },
  {
    title: "Adons",
    
    icon: "bi bi-patch-check",
  },
  {
    title: "FAQ",
   
    icon: "bi bi-hdd-stack",
  },
  {
    title: "Supports",
    
    icon: "bi bi-card-text",
  },
 
 
];

const Sidebar = () => {
  const showMobilemenu = () => {
    document.getElementById("sidebarArea").classList.toggle("showSidebar");
  };
  let location = useLocation();

  return (
    <div>
      <div className="p-3 immg">
      <div>
        <div className="p-3 immg">
          <img src={user1} alt="user" width="50" className="rounded-circle" />
          
        </div>
        <p><b>Ram Mohan</b></p>
        
        
      </div>
      <p style={{ textDecoration: 'underline' ,marginTop:'0px',lineHeight:'0px'}}>ram@gmail.com</p>
      </div>
      <hr/>
      <div className="p-1">
        <Nav vertical className="sidebarNav">
          {navigation.map((navi, index) => (
            <NavItem key={index} className="sidenav-bg">
              <Link
                to={navi.href}
                className={
                  location.pathname === navi.href
                    ? "active nav-link py-3"
                    : "nav-link text-secondary py-3"
                }
              >
                <i className={navi.icon}></i>
                <span className="ms-3 d-inline-block">{navi.title}</span>
              </Link>
            </NavItem>
          ))}
         
        </Nav>
      </div>
      <div className="botm"><a href="">LogOut<FontAwesomeIcon className="ps-2" icon={faPowerOff} /></a></div>
    </div>
  );
};

export default Sidebar;
