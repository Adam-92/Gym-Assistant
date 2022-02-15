import './app_style.css';
import { useSelector, useDispatch } from "react-redux"
import { bindActionCreators } from "redux"
import { actionCreators }  from '../state/index'
import Login from './login/Login'

function App() {
/*   const stateAccount = useSelector( (state) => state.account ) 
     const dispatch = useDispatch()
     const { depositMoney, withdrawMoney } = bindActionCreators(actionCreators, dispatch)
*/
  return (
    <main className="main-container">
     <Login />
    </main>
  );
}

export default App;
