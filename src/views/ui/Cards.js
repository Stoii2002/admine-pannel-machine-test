import {
  Card,
  
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardGroup,
  Button,
  Row,
  Col,
} from "reactstrap";
import Blog from "../../components/dashboard/Blog";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faCloud, faCloudArrowDown, faContactBook, faMailBulk, faMailForward } from '@fortawesome/free-solid-svg-icons';


const Cards = () => {
  return (
    <div>
    
      <Row>
      <h5 className="mb-3"><b>Choose a plan that's just right for you !</b></h5>
        <Col md="6" lg="4">
          <Card body>
            <CardTitle tag="h5"><b>Basic</b></CardTitle>
            <p>$89.99/mon</p>
            <p className="fsize">$9.99/mon</p>
            
            <div>
              <Button color="light-warning">Get Started</Button>
            </div>
            <hr/>
            <CardText>
              <p>What You Will Get:</p>
              <p><FontAwesomeIcon className="pe-2" icon={faContactBook} /> upto 25 users</p>
              <p><FontAwesomeIcon className="pe-2" icon={faCloudArrowDown} />upto 25gb storage</p>
              <p><FontAwesomeIcon className="pe-2" icon={faMailBulk} />Email support</p>
            </CardText>
            
          </Card>
        </Col>
        <Col md="6" lg="4">
          <Card body>
            <CardTitle tag="h5"><b>Standard</b></CardTitle>
            <p>$199.99/mon</p>
            <p className="fsize">$99.99/mon</p>
            <div>
              <Button color="light-danger">Get Started</Button>
            </div>
            <hr/>
            <CardText>
            <p>What You Will Get:</p>
            <p><FontAwesomeIcon className="pe-2" icon={faContactBook} /> upto 50 users</p>
              <p><FontAwesomeIcon className="pe-2" icon={faCloudArrowDown} />upto 60gb storage</p>
              <p><FontAwesomeIcon className="pe-2" icon={faMailBulk} />Email+chat support</p>
            
            </CardText>
            
          </Card>
        </Col>
        <Col md="6" lg="4">
          <Card body>
            <CardTitle tag="h5"><b>Premium</b></CardTitle>
            <p>$399.99/mon</p>
            <p className="fsize">$199.99/mon</p>
            <div>
              <Button color="light-success">Get Started</Button>
            </div>
            <hr/>
            <CardText>
            <p>What You Will Get:</p>
            <p><FontAwesomeIcon className="pe-2" icon={faContactBook} /> upto 75 users</p>
              <p><FontAwesomeIcon className="pe-2" icon={faCloudArrowDown} />upto 100gb storage</p>
              <p><FontAwesomeIcon className="pe-2" icon={faMailBulk} />Email+chat+whatsapp support</p>
            </CardText>
            
          </Card>
        </Col>
      </Row>


      <div className="row">
          <div className="col-6">
            
          <Card body>
          <div className="row">
            <div className="col-6">
            <Button color="btn btn-success" className="bttnnns">Get Started</Button>
            <CardTitle tag="h5"><b>Free Starter</b></CardTitle>
            <p>The quickest and easiest way to try protocols with basic functionalities</p>
            <div>
              <Button color="btn btn-success">Get Started</Button>
            </div>
            </div>
            
            <div className="col-6">
            <CardText>
            <p>What You Will Get:</p>
            <p><FontAwesomeIcon className="pe-2" icon={faContactBook} /> upto 8 users</p>
              <p><FontAwesomeIcon className="pe-2" icon={faCloudArrowDown} />upto 3gb storage</p>
              <p><FontAwesomeIcon className="pe-2" icon={faMailBulk} />Email support</p>
              <p><FontAwesomeIcon className="pe-2" icon={faCheck} />Basic of documents,Task Flow,Voting,Accounting,Banking,Nots,Investor,Director And team managenent included</p>
            </CardText>
            </div>
            </div>
          </Card>
          
          </div>

          <div className="col-6">
          <Card body>
          <div className="row">
            <div className="col-6">
            <Button color="btn btn-warning" className="bttnnns">Get Started</Button>
            <CardTitle tag="h5"><b>Enterprise Plan</b></CardTitle>
            <p>The quickest and easiest way to try protocols with basic functionalities</p>
            <div>
              <Button color="btn btn-warning">Get Started</Button>
            </div>
            </div>
            
            <div className="col-6 mt-3 p-5">
            <CardText>
            <p>What You Will Get:</p>
            <p><FontAwesomeIcon className="pe-2" icon={faContactBook} /> morethan 75 users users</p>
            <p><FontAwesomeIcon className="pe-2" icon={faCheck} />Customisation Of other features</p>
              
            </CardText>
            </div>
            </div>
          </Card>
          </div>
      </div>
      
    </div>
  );
};

export default Cards;
