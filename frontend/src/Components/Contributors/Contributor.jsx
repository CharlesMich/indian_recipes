import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchContributor } from '../../Store/contributor'

export const Contributor = () => {
    const dispatch = useDispatch()

    const contributors = useSelector(state => Object.values(state.contributors))

    console.log(contributors)

  useEffect(()=> {
    dispatch(fetchContributor())
  }, [dispatch])
  return (
    <div>{contributors.map((item) => (
        <>
        <div>{item.name}</div>
        <div>{item.title}</div>
        <div>{item.company}</div>
        <div>{item.id}</div>
        <div>{item.img}</div>
        <div>{item.social}</div>
        <div>{item.website}</div>
        <div>{item.youtube}</div>



        </>
    ))}</div>
  )
}
