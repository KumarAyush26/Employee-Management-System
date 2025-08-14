import React, { useContext,useState, useEffect } from 'react'
import Login from './components/Auth/login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { AuthContext } from './context/AuthProvider'

const App = () => {

  const[user,setUser] = useState(null)
  const [loggedInUserData, setloggedInUserData] = useState(null)
  const [userData,setuserData] =useContext(AuthContext)
  

  useEffect(() => {
    const loggedInUserData = localStorage.getItem("loggedInUser")
    if(loggedInUserData)
    {
      const userData = JSON.parse(loggedInUserData);
      setUser(userData.role)
      setloggedInUserData(userData.data);
    }
  }, []);
  


  const handleLogin = (email,password)=> {
    if(email == 'admin@me.com' && password == '123'){
      setUser('admin')
      localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}))
    }
    else if(userData){
      const employee = userData.find(emp => emp.email === email && emp.password === password);
      if(employee) {
        setUser('employee');
        setloggedInUserData(employee);
        localStorage.setItem('loggedInUser',JSON.stringify({role:'employee',data: employee}));
      }
    }
    else {
      alert('Invalid credentials');
  }
}
const data = useContext(AuthContext)
 

  return (
    <>
    {!user ?<Login handleLogin={handleLogin}/> : ''}
    {user == 'admin'? <AdminDashboard changeUser={setUser}/> : (user== 'employee' ? <EmployeeDashboard changeUser={setUser} data={loggedInUserData} /> : '')}
    </>
  )
}

export default App