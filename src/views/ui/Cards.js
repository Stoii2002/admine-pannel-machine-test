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


const BlogData = [
  {
    
    title: "Basic",
    subtitle: "2 comments, 1 Like",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    btnbg: "primary",
  },
  {
    
    title: "Standard",
    subtitle: "2 comments, 1 Like",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    btnbg: "primary",
  },
  {
   
    title: "Premium",
    subtitle: "2 comments, 1 Like",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    btnbg: "primary",
  },
  
];

const Cards = () => {
  return (
    <div>
    
      <Row>
      <h5 className="mb-3"><b>Choose a plan that's just right for you !</b></h5>
        <Col md="6" lg="4">
          <Card body>
            <CardTitle tag="h5"><b>Basic</b></CardTitle>
            <p>$89.99/mon</p>
            <p>$9.99/mon</p>
            <div>
              <Button color="light-warning">Get Started</Button>
            </div>
            <hr/>
            <CardText>
              <p>What You Will Get:</p>
            </CardText>
            
          </Card>
        </Col>
        <Col md="6" lg="4">
          <Card body>
            <CardTitle tag="h5"><b>Standard</b></CardTitle>
            <p>$199.99/mon</p>
            <p>$99.99/mon</p>
            <div>
              <Button color="light-danger">Get Started</Button>
            </div>
            <hr/>
            <CardText>
            <p>What You Will Get:</p>
            </CardText>
            
          </Card>
        </Col>
        <Col md="6" lg="4">
          <Card body>
            <CardTitle tag="h5"><b>Premium</b></CardTitle>
            <p>$399.99/mon</p>
            <p>$199.99/mon</p>
            <div>
              <Button color="light-success">Get Started</Button>
            </div>
            <hr/>
            <CardText>
            <p>What You Will Get:</p>
            </CardText>
            
          </Card>
        </Col>
      </Row>
      
    </div>
  );
};

export default Cards;
