import React, { useState, useEffect } from 'react';
import SearchForm from './componenets/Form.js';
import JobLists from './componenets/JobLists'
import axios from 'axios'


function App() {
  const [posts, setPosts] = useState([])
  const [description, setDescription] = useState('')
  const [location, setLocation] = useState('')


  //get data from github job API (fetching by description and location)
  const url = `http://127.0.0.1:5000/api/v1?location=${location}&job_title=${description}`
  const getPosts = async () => {
    await axios
      .get(url)
      .then((res) => {
        console.log(res)
        setPosts(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }
  useEffect(() => {
    getPosts()
  }, [])


  //description input handle
  const handleDescriptionChange = (e) => {
    setDescription(e.target.value)
  }

  //location input handle
  const handleLocationChange = (e) => {
    setLocation(e.target.value)
  }

  //submit button handle
  const onSubmit = (e) => {
    e.preventDefault()
    //once the user enter input and clicks on button, update the the useEffect hooks
    getPosts()
  }

  return (
    <div>
      <SearchForm
        description={description}
        handleDescriptionChange={handleDescriptionChange}
        location={location}
        handleLocationChange={handleLocationChange}
        onSubmit={onSubmit}
      />
      {
        !!posts?.length &&
        posts.map((job) => <JobLists key={job[0]} job={job} />) //map through each job
      }

    </div>
  )
}
export default App
