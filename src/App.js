import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Create from './Create';
import Edit from './Edit';
import Index1 from './Index1';
export class App extends Component {
  constructor(props) {
    super(props);
    this.onChangePersonName = this.onChangePersonName.bind(this);
    this.onChangeBusinessName = this.onChangeBusinessName.bind(this);
    this.onChangeGstNumber = this.onChangeGstNumber.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
        person_name: '',
        business_name: '',
        business_gst_number:''
    }
}
onChangePersonName(e) {
  this.setState({
    person_name: e.target.value
  });
}
onChangeBusinessName(e) {
  this.setState({
    business_name: e.target.value
  })  
}
onChangeGstNumber(e) {
  this.setState({
    business_gst_number: e.target.value
  })
}

onSubmit(e) {
  e.preventDefault();
  console.log(`The values are ${this.state.person_name}, ${this.state.business_name}, and ${this.state.business_gst_number}`)
  this.setState({
    person_name: '',
    business_name: '',
    business_gst_number: ''
  })
}
  render() {
    return (
      <Router>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link to={'/'} className="navbar-brand">React CRUD Example</Link>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
            <li className="nav-item">
                <Link to={'/'} className="nav-link">Home</Link>
              </li>
              <li className="nav-item">
                <Link to={'/create'} className="nav-link">Create</Link>
              </li>
              <li className="nav-item">
                <Link to ={'/index1'} className="nav-link">Index</Link>
              </li>
            </ul>
          </div>
        </nav> <br/>
        <h2>Welcome to React CRUD Tutorial</h2> <br/>
        <Switch>
            <Route exact path='/create' component={ Create } />
            <Route path='/edit/:id' component={ Edit } />
            <Route path='/index1' component={ Index1 } />
        </Switch>
      </div>
    </Router>
    );
  }
}

export default App
