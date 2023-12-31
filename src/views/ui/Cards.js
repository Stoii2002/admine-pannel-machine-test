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

      <div class="btn-container">
    <i class="fa fa-sun-o" aria-hidden="true"></i>
      <label class="switch btn-color-mode-switch">
            <input type="checkbox" name="color_mode" id="color_mode" value="1"/>
            <label for="color_mode" data-on="Annual" data-off="Monthly" class="btn-color-mode-switch-inner"></label>
        </label>
      <i class="fa fa-moon-o" aria-hidden="true"></i>
      
  </div>
                  

        <Col md="6" lg="4">
          <Card body>
            <CardTitle tag="h5"><b>Basic</b></CardTitle>
            <p className="lneth">$89.99/mon</p>
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
            <a href="" className="expo">EXPLORE FEATURES</a>
               
            
          </Card>
        </Col>
        <Col md="6" lg="4">
          <Card body>
            <CardTitle tag="h5"><b>Standard</b></CardTitle>
            <p className="lneth">$199.99/mon</p>
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
            <a href="" className="expo">EXPLORE FEATURES</a>
          </Card>
        </Col>
        <Col md="6" lg="4">
          <Card body>
            <CardTitle tag="h5"><b>Premium</b></CardTitle>
            <p className="lneth">$399.99/mon</p>
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
            <a href="" className="expo">EXPLORE FEATURES</a>
          </Card>
        </Col>
      </Row>


      <Row>
      <Col md="6" lg="6">
            
          <Card body>
          <Row>
          <Col md="6" lg="6">
            <Button color="btn btn-success" className="bttnnns">Get Started</Button>
            <CardTitle tag="h5"><b>Free Starter</b></CardTitle>
            <p>The quickest and easiest way to try protocols with basic functionalities</p>
            <div>
              <Button color="btn btn-success">Get Started</Button>
            </div>
          </Col>
            
          <Col md="6" lg="6">
            <CardText>
            <p>What You Will Get:</p>
            <p><FontAwesomeIcon className="pe-2" icon={faContactBook} /> upto 8 users</p>
              <p><FontAwesomeIcon className="pe-2" icon={faCloudArrowDown} />upto 3gb storage</p>
              <p><FontAwesomeIcon className="pe-2" icon={faMailBulk} />Email support</p>
              <p><FontAwesomeIcon className="pe-2" icon={faCheck} />Basic of documents,Task Flow,Voting,Accounting,Banking,Nots,Investor,Director And team managenent included</p>
            </CardText>
          </Col>
          </Row>
          </Card>
          
        </Col>

        <Col md="6" lg="6">
          <Card body>
          <Row>
          <Col md="6" lg="6">
            <Button color="btn btn-warning" className="bttnnns">Get Started</Button>
            <CardTitle tag="h5"><b>Enterprise Plan</b></CardTitle>
            <p>The quickest and easiest way to try protocols with basic functionalities</p>
            <div>
              <Button color="btn btn-warning">Get Started</Button>
            </div>
           </Col>
            
           <Col md="6" lg="6" className="p-5">
            <CardText>
            <p>What You Will Get:</p>
            <p><FontAwesomeIcon className="pe-2" icon={faContactBook} /> morethan 75 users users</p>
            <p><FontAwesomeIcon className="pe-2" icon={faCheck} />Customisation Of other features</p>
              
            </CardText>
          </Col>
          </Row>
          </Card>
          <a href="" className="flnk">Some unique features are provided as added-ones with inividual plans for each features</a>
        </Col>
      </Row>
      
    </div>
  );
};

export default Cards;
