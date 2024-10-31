// import { useState } from 'react'

import { Col, Row } from "react-bootstrap";
import "./App.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/container";
import{ Header} from "./Header";


function App() {
  // const [count, setCount] = useState(0)

  const data = [
    {
      title: "Title 1",
      description: "Description 1",
    },
    {
      title: "Title 2",
      description: "Description 2",
    },
    {
      title: "Title 3",
      description: "Description 3",
    },
    {
      title: "Title 4",
      description: "Description 4",
    },
    {
      title: "Title 1",
      description: "Description 4",
    },
    {
      title: "Title 2",
      description: "Description 4",
    },
    {
      title: "Title 3",
      description: "Description 4",
    },
    {
      title: "Title 4",
      description: "Description 4",
    },
    {
      title: "Title 1",
      description: "Description 4",
    },
    {
      title: "Title 2",
      description: "Description 4",
    },
    {
      title: "Title 3",
      description: "Description 4",
    },
    {
      title: "Title 4",
      description: "Description 4",
    },
  ];
//  let headerinfo={
//   name:"hammad",
//   email:"dfghjkl;"
//  }
  return (
    <>
      {/* <h3 className='text-center'>hammad</h3> */}
      <Header email="hs23@gamil.com" phone="12345678" adress="ward no 2 bwp">
      
          </Header>
      <div className="main">
        
        {/* <Header headerinfo={headerinfo} cname="w3 school"/> */}
        {/* <Container fluid>
          <Row>
            {data.map((index) => (
              <Col key={index}>
                <Card style={{ width: "18rem" }}>
                  <Card.Img variant="top" src="holder.js/100px180" />
                  <Card.Body>
                    <Card.Title>{index.title}</Card.Title>
                    <Card.Text>{index.description}</Card.Text>

                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container> */}
        <Container>
          <Row>
            {data.map((v,i)=>{
return(
  <Productitems pitems={v}/>
)
            })}
       
           
          </Row>
        </Container>
      </div>
      
    </>
  );
}

export default App;
 
 
 function Productitems({pitems}) {
   return (
     <div>
      <div className = " col-lg-3 mb-4"  >
      <Card style={{ width: "18rem",text:"center" }}>
                  <Card.Img  variant="top" src="holder.js/100px180" />
                  <Card.Body >
                    <Card.Title >{pitems.title}</Card.Title>
                    <Card.Text>{pitems.text}
Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est repellendus laborum officiis quisquam voluptates eius reiciendis voluptatibus iure eaque repellat?
                    </Card.Text>

                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
                
      </div>
     </div>
   )
 }
 
 
 
//  export default Productitems
 
 