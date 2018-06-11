import * as types from "./actionTypes";
import CourseApi from "../api/mockCourseApi";
// This is an action
export function loadCoursesSuccess(courses){
  return{
    type: types.LOAD_COURSES_SUCCESS, courses
  };
}

export function createdCourseSuccess(course){
  return{type:types.CREATE_COURSE_SUCCESS,course};
}

export function updateCourseSuccess(course){
  return{type:types.UPDATE_COURSE_SUCCESS,course};
}

export function loadCourses(){
  return function(dispatch){
    //return a promise to do async
    return CourseApi.getAllCourses().then(courses=>{
      dispatch(loadCoursesSuccess(courses));
    }).catch(error =>{
      throw(error);
    });
  };
}

//getState you can access the reux store
export function saveCourse(course){
  return function(dispatch, getState){
    return CourseApi.saveCourse(course).then(savedCourse=>{
      course.id ? dispatch(updateCourseSuccess(savedCourse)) : dispatch(createdCourseSuccess(savedCourse));
    }).catch(error =>{
      throw (error);
    });
  };
}
