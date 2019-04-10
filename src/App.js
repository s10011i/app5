import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header';
import Home from './components/home';

class App extends Component{
    constructor(){
        super();
        this.state={
            homeLink:'Header',
            //homeMounted:true
        };
    }
   
    onGreet(){
        alert('Hello broo');
    }
    onChangeLinkName(newName){
        this.setState({
            homeLink:newName
        });
    }
    // onChangeHomeMounted(){
    //   this.setState({
    //     homeMounted:!this.state.homeMounted
    //   });
    // }
    
    render(){
      let homeCmp="";
      if(this.state.homeMounted){
        homeCmp =( 
        <Home
          name={"juli"}
          age={23}
          init={0}
          greet={this.onGreet}
          changeLink={this.onChangeLinkName.bind(this)}
          initialLinkName={this.state.homeLink}
        />
        );
      }
        return (
          <div className="container">
            <div className="row">
              <div className="col-xs-10 col-xs-offset-1">
                <Header homeLink={this.state.homeLink} />
              </div>
            </div>

            <div className="row">
              <div className="col-xs-10 col-xs-offset-1">
                <Home
                  name={"juli"}
                  age={23}
                  init={0}
                  greet={this.onGreet}
                  changeLink={this.onChangeLinkName.bind(this)}
                  initialLinkName={this.state.homeLink}
                />
              </div>
            </div>
            {/* <div className="row">
              <div className="col-xs-10 col-xs-offset-1">
                <button
                  onClick={this.onChangeHomeMounted.bind(this)}
                  className="btn btn-primary"
                >
                  (Un)Mount Home Comp{" "}
                </button>
              </div>
            </div> */}
          </div>
        );
    }
}
export default App;