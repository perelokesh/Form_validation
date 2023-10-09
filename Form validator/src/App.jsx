import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import UserForm from "./UserForm"


function App() {
  return (
    <div style={{backgroundColor:"#eeeeee",}}>
    <Router>
    <Routes>
      <Route path="/" element={<UserForm/>} />
      {/* <Route path="/users" exact component={UserList} /> */}
      {/* <Route path="/users/:id/edit" component={UserEdit} /> */}
      {/* Add more routes for editing and deleting users */}
    </Routes>
  </Router>
  </div>
  )
}

export default App
