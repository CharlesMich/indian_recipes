import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { fetchAddContributor } from '../../Store/contributor'

export const AddContributor = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  let sessionUser = useSelector((state) => state.session.user);

  const [name, setName] = useState('')
  const [title, setTitle] = useState('')
  const [company, setCompany] = useState('')
  const [img, setImg] = useState('')
  const [website, setWebsite] = useState('')
  const [social, setSocial] = useState('')
  const [youtube, setYoutube] = useState('')
  const [email, setEmail] = useState('')
  const [validationErrors, setValidationErrors] = useState({})
  const [hasSubmitted, setHasSubmitted] = useState(false)

  useEffect(() => {
    const errors = {};
    if (name.length === 0) errors.name = "name is required"
    setValidationErrors(errors)
  }, [name])

  const handleCancel = () => {
    navigate('/admin/dashboard')
}

  const onSubmit = async (e) => {
    e.preventDefault();

    

    setHasSubmitted(true);
    if(Object.keys(validationErrors).length > 0) return;


    const newContributor = {
      name,
      title,
      company,
      img,
      website,
      social,
      youtube,
      email
    }

    const newCont = await dispatch(fetchAddContributor(newContributor))
    if(newCont) {
      navigate('/admin/dashboard')
    }

  }


  return (
    <div className="min-h-screen flex flex-col">
      <div className="max-container1 mt-20">
        <form onSubmit={onSubmit} className="bg-white border border-gray-300 rounded p-5">
          <div className="grid gap-4 sm:grid-cols-4 sm:gap-6" >
            <div className="sm:col-span-4">
              <span><label for="name" className="block mb-2 text-sm font-medium text-gray-900">name:</label></span><span className='text-coral-red'> {hasSubmitted && validationErrors.name && `${validationErrors.name}`}</span>
              <input type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="name" required value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="sm:col-span-4">
              <span><label for="title" className="block mb-2 text-sm font-medium text-gray-900">title:</label></span><span className='text-coral-red'> {hasSubmitted && validationErrors.title && `${validationErrors.title}`}</span>
              <input type="text" name="title" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="title" required value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div className="sm:col-span-4">
              <span><label for="company" className="block mb-2 text-sm font-medium text-gray-900">company:</label></span><span className='text-coral-red'> {hasSubmitted && validationErrors.company && `${validationErrors.company}`}</span>
              <input type="text" name="company" id="company" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="company" required value={company} onChange={(e) => setCompany(e.target.value)} />
            </div>
            <div className="sm:col-span-4">
              <span><label for="img" className="block mb-2 text-sm font-medium text-gray-900">img:</label></span><span className='text-coral-red'> {hasSubmitted && validationErrors.img && `${validationErrors.img}`}</span>
              <input type="text" name="img" id="img" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="img" required value={img} onChange={(e) => setImg(e.target.value)} />
            </div>
            <div className="sm:col-span-4">
              <span><label for="website" className="block mb-2 text-sm font-medium text-gray-900">website:</label></span><span className='text-coral-red'> {hasSubmitted && validationErrors.website && `${validationErrors.website}`}</span>
              <input type="text" name="website" id="website" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="website" required value={website} onChange={(e) => setWebsite(e.target.value)} />
            </div>
            <div className="sm:col-span-4">
              <span><label for="social" className="block mb-2 text-sm font-medium text-gray-900">social:</label></span><span className='text-coral-red'> {hasSubmitted && validationErrors.social && `${validationErrors.social}`}</span>
              <input type="text" name="social" id="social" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="social" required value={social} onChange={(e) => setSocial(e.target.value)} />
            </div>
            <div className="sm:col-span-4">
              <span><label for="youtube" className="block mb-2 text-sm font-medium text-gray-900">youtube:</label></span><span className='text-coral-red'> {hasSubmitted && validationErrors.youtube && `${validationErrors.youtube}`}</span>
              <input type="text" name="youtube" id="youtube" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="youtube" required value={youtube} onChange={(e) => setYoutube(e.target.value)} />
            </div>
            <div className="sm:col-span-4">
              <span><label for="email" className="block mb-2 text-sm font-medium text-gray-900">email:</label></span><span className='text-coral-red'> {hasSubmitted && validationErrors.email && `${validationErrors.email}`}</span>
              <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
          </div>
          <button type="submit" className="w-full items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-gray-900 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800">
                        Add Catagory
                    </button>
                    <button
                    onClick={handleCancel}
                     className="w-full items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-coral-red rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800">Cancel</button>    
        </form>
      </div>
    </div>
  )
}
