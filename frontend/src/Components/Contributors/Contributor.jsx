import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchContributor } from '../../Store/contributor'

export const Contributor = () => {
  const dispatch = useDispatch()

  const sessionUser = useSelector(state => state.session.user)
  const contributors = useSelector(state => Object.values(state.contributors))

  console.log(contributors)

  useEffect(() => {
    dispatch(fetchContributor())
  }, [dispatch])


  return (
    // <div>{contributors.map((item) => (
    //     <>
    //     <div>{item.name}</div>
    //     <div>{item.title}</div>
    //     <div>{item.company}</div>
    //     <div>{item.id}</div>
    //     <div>{item.img}</div>
    //     <div>{item.social}</div>
    //     <div>{item.website}</div>
    //     <div>{item.youtube}</div>



    //     </>
    // ))}</div>
    <div className="flex flex-col min-h-screen bg-gray-100">
      <div className="font-palenquin mt-10 max-container px-5 flex flex-col justify-start">

        <h1 className="text-left text-3xl text-center">Contributors</h1>
        {/* {vendors1.length > 0 && <p className="pt-5 pb-10  text-md text-center">Click on a business to view details or to leave a review</p>} */}
      </div>

      <div className="w-full max-w-5xl mx-auto">
        <div className="py-2 inline-block w-full md:px-6 lg:px-8  bg-gray-100">
          <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
            <table className='min-w-full divide-y divide-gray-100 '>

              <tbody className="divide-y divide-gray-200 bg-white">
                {contributors.map((item) => (
                  <tr key={item.name} className="cursor-pointer">

                    <td className="w-full sm:w-[30%] max-w-0 whitespace-nowrap text-sm text-gray-900  font-light  sm:max-w-none truncate pl-4 pr-3 py-4 sm:pl-6">
                      {item.name}
                    </td>
                    <td className="hidden sm:block w-full max-w-0 whitespace-nowrap text-sm text-gray-900  font-light  sm:max-w-none truncate pl-4 pr-3 py-4 sm:pl-6">
                      {item.name}
                    </td>
                    <td className=" text-sm text-gray-900 font-light  px-3 py-4 whitespace-nowrap">
                      {item.name}
                    </td>
                    <td className="hidden sm:block text-sm text-gray-900  py-4 pl-3 pr-4 sm:pr-6 font-light whitespace-nowrap text-right">
                      {/* <div className="flex flex-row items-center gap-1 justify-end"><span><img src={star} width={"12px"} alt=""/></span><span> ({Number(vendor.avgRating).toFixed(1) || 0}) </span></div> */}
                    </td>

                  </tr>
                  // </Link>

                ))}
              </tbody>
            </table>
          </div>
        </div>
        </div>
      </div>
      )
}
