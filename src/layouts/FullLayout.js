import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { Card, Container } from "reactstrap";
import Cards from "../views/ui/Cards";

const FullLayout = () => {
  return (
    <main>
      {/********header**********/}
      <Header />
      <div className="pageWrapper d-lg-flex">
        {/********Sidebar**********/}
        <aside className="sidebarArea shadow" id="sidebarArea">
          <Sidebar />
        </aside>
        {/********Content Area**********/}
      
        
        <div className="contentArea me-5" style={{ backgroundColor: '#f2f7f8'}}>
          {/********Middle Content**********/}
          <Container className="p-5" fluid>
            <Cards/>
          </Container>
         
        </div>
        
        

        

      




      </div>
    </main>
  );
};

export default FullLayout;
