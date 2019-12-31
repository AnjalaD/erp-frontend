//config
const HOST = 'http://localhost:8888';

//supervisor
export const SUPER_EMPLOYEES = HOST + '/supervisor/subs';
export const SUPER_GET_LEAVES = HOST + '/supervisor/sub-leaves';
export const SUPER_APPROVE_LEAVE = HOST + '/supervisor/subs';
export const SUPER_REJECT_LEAVE = HOST + '/supervisor/subs';


//guest
export const LOGIN = HOST + '/user/login';
export const GET_USER = HOST + '/employee/profile';

//level2
export const LEAVES_SUMMERY = HOST + '/leave/taken';
export const APPLY_LEAVE = HOST + '/leave/apply';
export const LEAVES_HISTORY = HOST + '/leave/history';

export const EMPLOYEE_BY_ID = HOST + '/employee/view';
export const FILTER_EMPLOYEES = HOST + '/report/filter';
export const LEAVE_REPORT = HOST + '/report/leave-by-dept';
export const EMP_FORM_FIELDS = HOST + '/employee/form-attributes';

export const EDIT_EMP_BASIC_INFO = HOST + '/employee/basic';
export const EDIT_EMP_CUSTOM = HOST + '/employee/custom';
export const EDIT_EMP_EMAILS = HOST + '/employee/email';
export const EDIT_EMP_CONTACTS = HOST + '/employee/contact';
export const EDIT_EMP_DEPENDENTS = HOST + '/employee/dependent';
export const EDIT_EMP_EMG_CONTACTS = HOST + '/employee/emergency';

//level3
export const NEW_EMPLOYEE = '/employee/add';

export const JOB_TITLES = HOST + '/job-title/view';
export const JOB_TITLES_ADD = HOST + '/job-title/add';
export const PAY_GRADES = HOST + '/pay-grade/view';
export const PAY_GRADES_ADD = HOST + '/pay-grade/add';
export const LEAVE_LIMITS = HOST + '/leave/limits';
export const LEAVE_LIMITS_ADD = HOST + '/leave/limit';
export const LEAVE_TYPES = HOST + '/leave/type';
export const FORM_FIELDS = HOST + '/form-field/view';
export const FORM_FIELDS_ADD = HOST + '/form-field/add';
export const DEPARTMENTS = HOST + '/department/view';
export const DEPARTMENTS_ADD = HOST + '/department/add';
export const CUSTOM_FIELDS = HOST + '/custom/view';
export const CUSTOM_FIELDS_ADD = HOST + '/custom/add';
export const EMP_STATUS = HOST + '/employment-status/view';
export const EMP_STATUS_ADD = HOST + '/employment-status/add';

//admin
export const HR_AVAILABILITY = HOST + '/employee/hr';
export const ORG_INSERT = HOST + '/organization-info/insert';
export const ORG_VIEW = HOST + '/organization-info/view';
export const ORG_DELETE = HOST + '/organization-info/delete';