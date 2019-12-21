//config
const HOST = 'http://localhost:8888';

//api
export const LOGIN = HOST + '/user/login';
export const GET_USER = HOST + '/employee/profile';

export const NEW_EMPLOYEE = '/employee/add';
export const EMPLOYEE_BY_ID = HOST + '/employee/view';
export const ALL_EMPLOYEES = HOST + '';

export const LEAVES_SUMMERY = HOST + '/leave/taken';
export const APPLY_LEAVE = HOST + '/leave/apply';
export const LEAVES_HISTORY = HOST + '/leave/history';

export const EMP_FORM_FIELDS = HOST + '/employee/form-attributes';

export const JOB_TITLES = HOST + '/job-title/view';
export const PAY_GRADES = HOST + '/pay-grade/view';
export const LEAVE_LIMITS = HOST + '/leave-limit/view';
export const LEAVE_TYPES = HOST + '/leave-type/view';
export const FORM_FIELDS = HOST + '/form-field/view';
export const DEPARTMENTS = HOST + '/department/view';

export const HR_AVAILABILITY = HOST + '/employee/hr';
export const ORG_INSERT = HOST + '/organization-info/insert';
export const ORG_VIEW = HOST + '/organization-info/view';
export const ORG_DELETE = HOST + '/organization-info/delete';