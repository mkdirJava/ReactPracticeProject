import * as types from "./actionTypes";
import CourseApi from "../api/mockCourseApi";
import  {beginAjaxCall,ajaxCallError} from './ajaxStatusActions';

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
    // simulate a ajax call
    dispatch(beginAjaxCall());

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
    // simulate a ajax call
    dispatch(beginAjaxCall());
    return CourseApi.saveCourse(course).then(savedCourse=>{
      course.id ? dispatch(updateCourseSuccess(savedCourse)) : dispatch(createdCourseSuccess(savedCourse));
    }).catch(error =>{
      // Can do save course error action here and do a page
      // Or handle the error on the page
      //dispatch(ajaxCallError(error));
      throw error;
    });
  };
}
