//config
const HOST = 'http://localhost:8888';

//api
export const LOGIN = HOST + '/user/login';
export const GET_USER = HOST + '/employee/profile'; //get

export const EMPLOYEE_BY_ID = HOST + '/employee/view';
export const ALL_EMPLOYEES = HOST + '';

export const LEAVES_SUMMERY = HOST + '/leave/taken';
export const APPLY_LEAVE = HOST + '/leave/apply';
export const LEAVES_HISTORY = HOST + '/leave/history';

export const EMP_FORM_FIELDS = HOST + '/employee/form-attributes';

export const JOB_TITLES = HOST + '/job-title/view'; //get
export const PAY_GRADES = HOST + '/pay-grade/view'; //get
export const LEAVE_LIMITS = HOST + '/leave-limit/view'; //get
export const LEAVE_TYPES = HOST + '/leave-type/view'; //get
export const FORM_FIELDS = HOST + '/form-field/view'; //get

export const HR_AVAILABILITY = HOST + '/employee/hr'; //get
export const ORG_INSERT = HOST + '/organization-info/insert';
export const ORG_VIEW = HOST + '/organization-info/view';
export const ORG_DELETE = HOST + '/organization-info/delete';