import React from "react";
import "./catcontainer.css";
import Cat from "./cat.js";
import {Grid} from "react-bootstrap";
import {Row} from "react-bootstrap";
import {Col} from "react-bootstrap";
import axios from 'axios';

//search term
var picRequest="https://api.unsplash.com/search/photos/?client_id=78fab231742cab6731a0e490e5fed31d513d0f4f28c75ae784c50eb48c6e139c&query=cat";
var quoteRequest="https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=9&callback=";


class CatContainer extends React.Component {
    constructor(props){
        super(props);
        this.state={
            Picdata:[],
            Quotedata:[]
        }
    }
    
    componentDidMount(){
        console.log("component mounted");
        axios.get(picRequest)
        .then(function (response) {
         //console.log(response.data.results);
          this.setState({Picdata:response.data.results})
          
         }.bind(this)); //need to add a bind(this) to the function in order to set state
         
         
         axios.get(quoteRequest)
        .then(function (response) {
         //console.log(response.data);
         this.setState({Quotedata:response.data});
          
         }.bind(this)); //
    
      //console.log(this.state.Picdata);
    }
    
    
    
    
    
    render(){
        var temp;
        var quotetemp;
        var column;
        var columnList=[];
        if(this.state.Picdata.length>0){ //--------->need to do this as this is async to make sure there's something in there
            //console.log("array is full");
            for(var i=0;i<this.state.Picdata.length-1;i++)
            {
              temp=this.state.Picdata[i].urls.small;
              quotetemp=this.state.Quotedata[i].content;
              //console.log(temp);
              column = <Col sm={4}><Cat key={i} pic={temp} quote={quotetemp} /></Col>;
              columnList.push(column);
            }
        }
        /*if(this.state.Quotedata.length>0){
            for(i=0;i<this.state.Quotedata.length;i++){
               quotetemp=this.state.Quotedata[i].content;
               column= <Col sm={4}><Cat quote={quotetemp} /></Col>;
               columnList.push(column);
            }
        }*/
        //var column=<Col sm={4}><Cat pic={temp} /></Col>;
        //var columnList=[column,column,column];
        return (
            <div className="mainWrapper catContainer">
                <Grid>
                    <Row>
                        {columnList}
                    </Row>
                    
                </Grid>
            </div>
            
            
            );
    }
}

export default CatContainer;


/*
<Row>
                        {columnList}
                    </Row>
                    
                    <Row>
                        {columnList}
                    </Row>

                    */