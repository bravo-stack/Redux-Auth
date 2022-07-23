import { HomeLayout } from "./home.style"
import { useSelector, useDispatch } from "react-redux"
import { decrement, increment, reset, logIn, logOut } from "../../services/actions"

function Home() {
    // const counter = useSelector(state => state.counter)
    // const auth = useSelector(state=>state.auth)
    // const dispatch = useDispatch()
    const counter = useSelector(state=>state.counter)
    const auth = useSelector(state=>state.auth)
    const dispatch = useDispatch()



  return (

    <HomeLayout>
        <div className="cont">
            <p className="text">{counter}</p>
            <div className="container">
                <button
                  onClick={() => dispatch(increment())}>
                    +
                </button>
                <button
                  onClick={() => dispatch(decrement())}>
                    -
                </button>
            </div>

            <button className="login-btn" onClick={() => dispatch(logIn())}>logIn</button>

            <button className="logout-btn" onClick={() => dispatch(logOut())}>logOut</button>

            <button className="reset-btn" type="reset" onClick={() => dispatch(reset())}>reset</button>
        </div>

        {!auth&&"Logged Out"}
    </HomeLayout>
  )
}

export default Home