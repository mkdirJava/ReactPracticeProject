import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import * as courseActions from '../../actions/courseActions';
import {bindActionCreators} from 'redux';

class CoursesPage extends React.Component{
  constructor(props,context){
    super(props,context);
    this.state={
      course:{
        title:""
      }
    };
    // put the bind events on the class and not on the element being clicked
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onClickSave = this.onClickSave.bind(this);
  }

  onTitleChange(event){

    const course = this.state.course;
    course.title = event.target.value;
    this.setState({course:course});
  }

  onClickSave(){
    this.props.actions.createCourse(this.state.course);
  }

  courseRow(course,index){
    return <div key={index}>{course.title}</div>;
  }

  render(){
    debugger;
    return(
      <div className="jumbotron">
        <h1> Courses</h1>
        {this.props.courses.map(this.courseRow)}

        <h2> Add Course </h2>
        <input
          type="text"
          onChange={this.onTitleChange}
          value={this.state.course.title}
        />

        <input
          type="submit"
          value="Save"
          onClick={this.onClickSave}
        />

      </div>
    );
  }
}

CoursesPage.propTypes={
  actions: PropTypes.object.isRequired,
  courses: PropTypes.array.isRequired
};


// from the reducer which gets it from the store
function mapStateToProps(state,ownProps){
  debugger;
  return{
    courses: state.courses
  };
}

// Update the components handler to the dispatch you need the createCourse as a placeholder to link to dispatch
// The use of bindActionCreators go through actions and wrapp in dispatch
function mapDispatchToProps(dispatch){
  return{
    actions: bindActionCreators(courseActions,dispatch)
  };
}

//The two parathesis, the first method connect returns another method which is called with CoursePage
// if you do not have the second param of the connect then the component gets a dispatch property,
// this.props.dispatch << allows actions.
// if you have the second param, it is a function that updates the component handlers
export default connect(mapStateToProps,mapDispatchToProps)(CoursesPage);
