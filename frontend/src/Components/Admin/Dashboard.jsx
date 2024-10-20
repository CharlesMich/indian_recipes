import React from 'react'
import { Link } from 'react-router-dom'

export const Dashboard = () => {
  return (
    <>
    <Link to ={'/admin/dashboard/contributors'}><div>View Contributors</div></Link>
    <Link to={'/admin/dashboard/addcontributor'}><div>Add Contributors</div></Link>
    <div>update Contributors</div>
    <div>Delete Contributors</div>
    </>
  )
}
