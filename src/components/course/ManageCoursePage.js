import React,{PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseForm from './CourseForm';

class ManageCoursesPage extends React.Component{
  constructor(props,context){
    super(props,context);
    this.state ={
      course: Object.assign({}, this.props.course),
      errors:{}
    };
    this.updateCourseState = this.updateCourseState.bind(this);
    this.saveCourse = this.saveCourse.bind(this);
  }

  //this function will run when the runtime thinks there has been an udpate
  //props change, this will run
  componentsWillRecieveProps(nextProps){
    if(this.proprs.course.id != nextProps.course.id){
      //Need to populate the form when course is loaded directly
      this.setState({couse: Object.assign({},nextProps.course)});
    }
  }

  //update the state
  updateCourseState(event){
    const field = event.target.name;
    let course= this.state.course;
    course[field] = event.target.value;
    return this.setState({cource:course});
  }

  saveCourse(event){
    event.preventDefault();
    this.props.actions.saveCourse(this.state.course);
    this.context.router.push('/courses');
  }

  render(){
    return(
        <CourseForm
          allAuthors={this.props.authors}
          course={this.state.course}
          errors={this.state.errors}
          onChange= {this.updateCourseState}
          onSave={this.saveCourse}
          />
    );
  }

}

ManageCoursesPage.propTypes ={
  course:PropTypes.object.isRequired,
  authors:PropTypes.array.isRequired,
  actions:PropTypes.object.isRequired
};

//Get react Route cotext so this.context.router is avaliable
ManageCoursesPage.contextTypes={
  router:PropTypes.object
};

function getCourseById(courses,id){
  const course = courses.filter(course=> course.id==id);
  if(course) return course[0];
  return null;
}

//initialisation of the component
//Transformation hooks are delt with in here
//ownProps second param gets the contexts own props
function mapStateToProps(state,ownProps){
  const courseId = ownProps.params.id; // from the path /course/:id as defined in the router.js
  let course ={
    id:'',
    watchHref:'',
    title:'',
    authorId:'',
    length:'',
    category:''
  };

  if(courseId){
    course = getCourseById(state.courses,courseId);
  }

  const authorsFormattedForDropDown = state.authors.map( author=>{
    return {
      value:author.id,
      text:author.firstName+' '+ author.lastName
    };
  });

  return{
    course:course,
    authors : authorsFormattedForDropDown
  };
}

function mapDispatchToProps(dispatch){
  return{
    actions:bindActionCreators(courseActions,dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursesPage);
