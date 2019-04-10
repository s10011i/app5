import React, {Component} from 'react';

class Home extends Component{
    constructor(props){
        super();
        this.state={
            age:props.age,
            init:props.init,
            status:0,
            homeLink: props.initialLinkName,
           
        };
        setTimeout(() => {
            this.setState({
                status: 1
            });
        }, 3000);
     // console.log("Constructor...");
    }
    // componentWillMount(){
    //   console.log('component will mount');
    // }
    // componentDidMount(){
    //   console.log('component did mount');
    // }
    // componentWillReceiveProps(nextProps){
    //   console.log("component will recieve props",nextProps );
    // }
    // shouldComponentUpdate(nextProps,nextState){
    //   console.log("should compoent update", nextProps, nextState);
    // }
    // componentWillUpdate(nextProps,nextState){
    //   console.log("component will update",nextProps,nextState);
    // }
    // componentDidUpdate(prevProps,prevState){
    //   console.log("component did update",prevProps, prevState);
    // }
    // componentWillUnmount(){
    //   console.log("component will unmount");
    // }
    onMakeOlder(){
        this.setState({
            age: this.state.age += 3});
        
    }
    onInc(){
        this.setState({init:this.state.init+=1});
    }
    onDec() {
        this.setState({
        init: (this.state.init -= 1)
        });
                      
    }
    onChangeLink(){
      this.props.changeLink(this.state.homeLink);

    }
  onHandleChange(event){
    this.setState({
      homeLink:event.target.value
    });
  }
    render(){
        return (
          <div>
            <p>From Home</p>
            <p>
              ur name is <b>{this.props.name}</b>, and ur age is
              <b>{this.state.age}</b>
            </p>
            <p>Status: {this.state.status}</p>
            <hr />
            <button
              className="btn btn-primary"
              onClick={() => this.onMakeOlder()}
            >
              Make ME older
            </button>
            <hr />
            <button
              className="btn btn-primary"
              onClick={() => this.onInc()}
            >
              INC
            </button>
            <button
              className="btn btn-primary"
              onClick={() => this.onDec()}
            >
              DEC
            </button>
            <span>{this.state.init}</span>
            <hr />
            <button
              className="btn btn-primary"
              onClick={this.props.greet}
            >
              Greet
            </button>
            <hr />
            <input type="text" value={this.state.homeLink} 
            onChange={(event)=>this.onHandleChange(event)} />
            <button
              className="btn btn-primary"
              onClick={this.onChangeLink.bind(this)}
            >
              Change Header
            </button>
          </div>
        );
    }
}
export default Home;
//onClick={()=>this.onMakeOlder()}
//onClick = { this.onMakeOlder.bind(this) }
// Home.propTypes = {
//     name: React.PropTypes.string,
//     age: React.PropTypes.number,
//     users: React.PropTypes.object,
//     name_header: React.PropTypes.string
// };