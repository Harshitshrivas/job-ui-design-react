import React from 'react'
import Card from './components/Card'
import './index.css'
const App = () => {
  const jobOpenings = [
  {
    brandLogo: "https://logo.clearbit.com/google.com",
    companyName: "Google",
    datePosted: "10 days ago",
    post: "Software Engineer",
    tag1: "Full-time",
    tag2: "Mid-level",
    pay: "$70/hr",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/amazon.com",
    companyName: "Amazon",
    datePosted: "3 weeks ago",
    post: "Backend Developer",
    tag1: "Full-time",
    tag2: "Senior",
    pay: "$85/hr",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/meta.com",
    companyName: "Meta",
    datePosted: "5 days ago",
    post: "Frontend Engineer",
    tag1: "Contract",
    tag2: "Junior",
    pay: "$60/hr",
    location: "London, UK"
  },
  {
    brandLogo: "https://logo.clearbit.com/apple.com",
    companyName: "Apple",
    datePosted: "1 week ago",
    post: "iOS Developer",
    tag1: "Full-time",
    tag2: "Mid-level",
    pay: "$75/hr",
    location: "Cupertino, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/netflix.com",
    companyName: "Netflix",
    datePosted: "2 weeks ago",
    post: "Data Engineer",
    tag1: "Full-time",
    tag2: "Senior",
    pay: "$90/hr",
    location: "Los Gatos, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/microsoft.com",
    companyName: "Microsoft",
    datePosted: "4 days ago",
    post: "Cloud Solutions Architect",
    tag1: "Full-time",
    tag2: "Senior",
    pay: "$95/hr",
    location: "Seattle, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/openai.com",
    companyName: "OpenAI",
    datePosted: "6 days ago",
    post: "AI Research Engineer",
    tag1: "Full-time",
    tag2: "Senior",
    pay: "$120/hr",
    location: "San Francisco, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/nvidia.com",
    companyName: "NVIDIA",
    datePosted: "1 week ago",
    post: "Machine Learning Engineer",
    tag1: "Full-time",
    tag2: "Mid-level",
    pay: "$100/hr",
    location: "Pune, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/tesla.com",
    companyName: "Tesla",
    datePosted: "3 days ago",
    post: "Software Developer",
    tag1: "Full-time",
    tag2: "Junior",
    pay: "$65/hr",
    location: "Berlin, Germany"
  },
  {
    brandLogo: "data:image/jpeg;base64,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",
    companyName: "Adobe",
    datePosted: "2 weeks ago",
    post: "UI/UX Designer",
    tag1: "Part-time",
    tag2: "Mid-level",
    pay: "$55/hr",
    location: "Noida, India"
  }
];

  return (
    <div className='parent'>
    {jobOpenings.map(function(elem , idx){

      return <div key={idx}>
        <Card company = {elem.companyName} date = {elem.datePosted} post={elem.post} tag1={elem.tag1} tag2={elem.tag2} pay={elem.pay} location={elem.location} brandLogo={elem.brandLogo}  
      />
      </div>
    })}

    </div>
  )
}

export default App