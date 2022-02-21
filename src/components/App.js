import './app_style.css';
import { useSelector, useDispatch } from "react-redux"
import { bindActionCreators } from "redux"
import { actionCreators }  from '../state/index'
import RegisterPage from '../pages/register-page/RegisterPage'
import LoginPage from '../pages/login-page/LoginPage'
import HomePage from '../pages/home-page/HomePage'

function App() {
/*   const stateAccount = useSelector( (state) => state.account ) 
     const dispatch = useDispatch()
     const { depositMoney, withdrawMoney } = bindActionCreators(actionCreators, dispatch)
*/
  return (
    <HomePage />

/*    <LoginPage /> 
   <RegisterPage/> */



  );
}

export default App;
