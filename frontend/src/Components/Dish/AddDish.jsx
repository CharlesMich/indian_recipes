import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { fetchAddDish } from '../../Store/dish'
import { fetchAllCuisines } from '../../Store/cuisine'
import {fetchAllStates} from '../../Store/state'

export const AddDish = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const states = useSelector(state => Object.values(state.myStates))
  const constributors = useSelector(state => state.contributor)
  const mealType = useSelector(state => state.meal)
  const cuisines = useSelector(state => Object.values(state.cuisines))
  const sessionUser = useSelector(state => state.session.user)

  const [name, setName] = useState('')
  const [subname, setSubname] = useState('')
  const [englishname, setEnglishname] = useState('')
  const [img, setImg] = useState("")
  const [servingSize, setServingSize] = useState('')
  const [cuisineId, setCuisineId] = useState('')
  const [stateId, setStateId] = useState('')
  const [contributorId, setContributorId] = useState('')
  const [mealId, setMealId] = useState('')
  const [notes, setNotes] = useState('')
  const [status, setStatus] = useState('')
  const [validationErrors, setValidationErrors] = useState({})
  const [hasSubmitted, setHasSubmitted] = useState(false)
  const [imageLoading, setImageLoading] = useState(false);

  console.log(stateId, cuisineId)

  useEffect(()=> {
    dispatch(fetchAllCuisines())
  }, [])

  useEffect(()=> {
    dispatch(fetchAllStates())
  }, [])

  const handleCancel = () => {
    navigate('/admin/dashboard')
}

  const handleSubmit = async (e) => {
    e.preventDefault()

    const formData = new FormData
    formData.append("name", name)
    formData.append("subname", subname)
    formData.append("englishname", englishname)
    formData.append("img", img)
    formData.append("serving_size", servingSize)
    formData.append("cuisine_id", cuisineId)
    formData.append("state_id", stateId)
    formData.append("contributor_id", contributorId)
    formData.append("meal_id", mealId)
    formData.append("notes", notes)
    formData.append("status", status)


    setHasSubmitted(true)
    if (Object.keys(validationErrors).length > 0) return;

    const newDish = await dispatch(fetchAddDish(formData))
      .catch(async (res) => {
        const data = await res.json()
        if (data && data.errors) {
          setValidationErrors(data.errors)
        }
      });
    if (newDish) {
      setImageLoading(false)
      navigate('/admin/dashboard')
    }

  }
    return (
      <div className="flex flex-col min-h-screen">
        <div className="max-container1 my-20">
          <form onSubmit={handleSubmit} className="bg-white border border-gray-300 rouded p-5">
            <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
              <div>This form is used to enter new dishes to the website</div>
              <div className="sm:col-span-2">
                <span><label type="text" htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">Name</label></span><span className="text-coral-red">{hasSubmitted && validationErrors.name && `${validationErrors.name}`}</span>
                <input type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="eg: Chicken Korma" required value={name} onChange={(e) => setName(e.target.value)}/> 
              </div>

              <div className="sm:col-span-2">
                <span><label htmlFor="subname" className="block mb-2 text-sm font-medium text-gray-900">Subname</label></span><span className="text-coral-red">{hasSubmitted && validationErrors.name && `${validationErrors.name}`}</span>
                <input type="text" name="subname" id="subname" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="eg: Chicken Korma" required value={subname} onChange={(e) => setSubname(e.target.value)}/> 
              </div>

              <div className="sm:col-span-2">
                <span><label htmlFor="englishname" className="block mb-2 text-sm font-medium text-gray-900">English Name</label></span><span className="text-coral-red">{hasSubmitted && validationErrors.name && `${validationErrors.name}`}</span>
                <input type="text" name="englishname" id="englishname" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="eg: Chicken Korma" required value={englishname} onChange={(e) => setEnglishname(e.target.value)}/> 
              </div>

              <div className="sm:col-span-2">
                <span><label htmlFor="serving_size" className="block mb-2 text-sm font-medium text-gray-900">Serving Size</label></span><span className="text-coral-red">{hasSubmitted && validationErrors.name && `${validationErrors.name}`}</span>
                <input type="text" name="serving_size" id="serving_size" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="eg: Chicken Korma" required value={servingSize} onChange={(e) => setServingSize(e.target.value)}/> 
              </div>

              <div className="sm:col-span-2">
              <span><label htmlFor="cuisine_id" className="block mb-2 text-sm font-medium text-gray-900">Cuisine</label></span><span className="text-coral-red">{hasSubmitted && validationErrors.cuisineId && `${validationErrors.cuisineId}`}</span>
              <select name = "avatar" id = "avatar" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" value={cuisineId} required onChange={(e) => setCuisineId(e.target.value)}>
                        <option value={0}>None</option>
                        {cuisines.map(item=> (
                          <option value={item.id}>{item.name}</option>
                        ))}

                      </select>
              </div>

              <div className="sm:col-span-2">
                <span><label htmlFor="state_id" className="block mb-2 text-sm font-medium text-gray-900">State</label></span><span className="text-coral-red">{hasSubmitted && validationErrors.stateId && `${validationErrors.stateId}`}</span>
                <select name = "state" id = "state" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" value={stateId} required onChange={(e) => setStateId(e.target.value)}>
                        <option value={0}>None</option>
                        {states.map(item=> (
                          <option value={item.id}>{item.name}</option>
                        ))}

                      </select>
              </div>

              <div className="sm:col-span-2">
                <span><label htmlFor="contributor_id" className="block mb-2 text-sm font-medium text-gray-900">Contributor</label></span><span className="text-coral-red">{hasSubmitted && validationErrors.name && `${validationErrors.name}`}</span>
                <input type="text" name="contributor_id" id="contributor_id" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="eg: Chicken Korma" required value={contributorId} onChange={(e) => setContributorId(e.target.value)}/> 
              </div>

              <div className="sm:col-span-2">
                <span><label htmlFor="meal_id" className="block mb-2 text-sm font-medium text-gray-900">Meal Type</label></span><span className="text-coral-red">{hasSubmitted && validationErrors.name && `${validationErrors.name}`}</span>
                <input type="text" name="meal_id" id="meal_id" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="eg: Chicken Korma" required value={mealId} onChange={(e) => setMealId(e.target.value)}/> 
              </div>

              <div className="sm:col-span-2">
                <span><label htmlFor="notes" className="block mb-2 text-sm font-medium text-gray-900">Notes</label></span><span className="text-coral-red">{hasSubmitted && validationErrors.name && `${validationErrors.name}`}</span>
                <input type="text" name="notes" id="notes" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="eg: Chicken Korma" required value={notes} onChange={(e) => setNotes(e.target.value)}/> 
              </div>

              <div className="sm:col-span-2">
                <span><label htmlFor="status" className="block mb-2 text-sm font-medium text-gray-900">Status</label></span><span className="text-coral-red">{hasSubmitted && validationErrors.name && `${validationErrors.name}`}</span>
                <input type="text" name="status" id="status" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="eg: Chicken Korma" required value={status} onChange={(e) => setStatus(e.target.value)}/> 
              </div>

              <div className="sm:col-span-2">
                <span><label htmlFor="img" className="block mb-2 text-sm font-medium text-gray-900">Upload file (Add an image of the dish fully garnished and ready to be served)</label></span><span className="text-coral-red">{hasSubmitted && validationErrors.img && `${validationErrors.img}`}</span>
                <input type="file" name="img" id="img" accept=".jpg, .jpeg, .png, .webp" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="eg: Chicken Korma" required  onChange={(e) => setImg(e.target.files[0])}/> 
              </div>
              <button type="submit" className="w-full items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-gray-900 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800">
                        Add Catagory
                    </button>
                    <button
                    onClick={handleCancel}
                     className="w-full items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-coral-red rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800">Cancel</button>    
                     {(imageLoading)&& <p>Loading...</p>}

            </div>

          </form>
        </div>
      </div>
    )
  }
