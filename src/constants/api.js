//config
const HOST = 'http://localhost:8888';

//api
export const LOGIN = HOST + '/user/login';
export const GET_USER = HOST + '/employee/profile'; //get

export const GET_LEAVES = HOST + '/employee/leave';

export const GET_EMPLOYEE = HOST + '/employee/by-id';
export const GET_EMPLOYEES = HOST + '';

export const JOB_TITLES = HOST + '/job-title/view'; //get
export const PAY_GRADES = HOST + '/pay-grade/view'; //get


export const HR_AVAILABILITY = HOST + '/employee/hr'; //get
export const ORG_INSERT = HOST + '/organization-info/insert';
export const ORG_VIEW = HOST + '/organization-info/view';
export const ORG_DELETE = HOST + '/organization-info/delete';