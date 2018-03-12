import React from "react";
import "./catcontainer.css";
import Cat from "./cat.js";
import {Grid} from "react-bootstrap";
import {Row} from "react-bootstrap";
import {Col} from "react-bootstrap";

class CatContainer extends React.Component {
    
    
    
    render(){
        var URL = "https://images.unsplash.com/photo-1511876849877-f8d0d953d2e0?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a005647cf42ef9a8c66e1aed85ccc5ec&auto=format&fit=crop&w=500&q=60";
        var column=<Col sm={4}><Cat pic={URL}/></Col>;
        var columnList=[column,column,column];
        return (
            <div className="mainWrapper catContainer">
                <Grid>
                    <Row>
                        {columnList}
                    </Row>
                    
                    <Row>
                        {columnList}
                    </Row>
                    
                    <Row>
                        {columnList}
                    </Row>
                
                </Grid>
            </div>
            
            
            );
    }
}

export default CatContainer;