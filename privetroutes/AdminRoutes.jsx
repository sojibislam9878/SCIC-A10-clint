import { Navigate } from 'react-router-dom'
import PropTypes from 'prop-types'
import useRole from '../hooks/useRole'
import Spinner from '../src/components/Spinner'
const AdminRoute = ({ children }) => {
  const [role, isLoading] = useRole()

  if (isLoading) return <Spinner></Spinner>
  if (role === 'admin') return children
  return <Navigate to='/' />
}

export default AdminRoute

AdminRoute.propTypes = {
  children: PropTypes.element,
}