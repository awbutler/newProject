import { useEffect } from "react"
import {useNavigate} from 'react-router-dom'
import {useSelector} from 'react-redux'
import RestaurantForm from "../components/RestaurantForm"

function Dashboard() {

  const navigate = useNavigate()

  const {user} = useSelector((state) => state.auth)

  useEffect(() => {
    if(!user){
      navigate('/login')
    }
  }, [user, navigate])
  return (
    <>
      <section className="heading">
        <h1>Welcome {user && user.name}</h1>
        <p>Restaurant Dashboard</p>
      </section>

      <RestaurantForm />
    </>
  )
}

export default Dashboard