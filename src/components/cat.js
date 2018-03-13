import React from "react";

/*
AddAddressComponent.defaultProps = {
  cityList: [],
  provinceList: [],
}
*/
var URL = "https://images.unsplash.com/photo-1511876849877-f8d0d953d2e0?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a005647cf42ef9a8c66e1aed85ccc5ec&auto=format&fit=crop&w=500&q=60";
class Cat extends React.Component {
    
    
    handleClick(){
        var regex = /(<([^>]+)>)/ig;
        var body = this.props.quote;
        var result = body.replace(regex, "");
        alert(result);
    }
    
    
    render(){ 
        
    return (
        
        <div>
            <img onClick={this.handleClick.bind(this)} alt="cat_photo"src={this.props.pic}/>
            
        </div>
        );
    }
}


Cat.defaultProps= {
    pic: URL
}

export default Cat;