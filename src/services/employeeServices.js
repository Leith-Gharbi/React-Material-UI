const KEYS = {
  employees: 'employees',
  employeeId: 'employeeId',
};
export const getDepartementCollection = [
  {
    id: '1',
    title: 'Development',
  },
  {
    id: '2',
    title: 'Marketing',
  },
  {
    id: '3',
    title: 'Accounting',
  },
  {
    id: '4',
    title: 'HR',
  },
];
export function generateEmployeeId() {
  if (localStorage.getItem(KEYS.employeeId) == null)
    localStorage.setItem(KEYS.employeeId, '0');

  var id = parseInt(localStorage.getItem(KEYS.employeeId));
  localStorage.setItem(KEYS.employeeId, (++id).toString());
  return id;
}

export function updateEmployee(data) {
  let employees = getAllEmployees();
  let recordIndex = employees.findIndex((x) => x.id == data.id);
  employees[recordIndex] = { ...data };
  localStorage.setItem(KEYS.employees, JSON.stringify(employees));
}

export function insertEmployee(data) {
  let employees = getAllEmployees();
  data['id'] = generateEmployeeId();
  employees.push(data);
  localStorage.setItem(KEYS.employees, JSON.stringify(employees));
}

export function getAllEmployees() {
  if (localStorage.getItem(KEYS.employees) == null)
    localStorage.setItem(KEYS.employees, JSON.stringify([]));
  let employees = JSON.parse(localStorage.getItem(KEYS.employees));
  // map departementId to departement title
  let departements = getDepartementCollection;
  return employees.map((x) => ({
    ...x,
    department: departements[x.departmentId - 1].title,
  }));
}
