import { Bookmark } from 'lucide-react';

const Card = (props) => {
  return (
     <div >
     
     <div className="card">
        <div>
                <div className="top">
               <img src= {props.brandLogo}alt="logo" />
               <button>Save <Bookmark size={16}/></button>
             </div>
             <div className="center">
              <h3>{props.company }  <span>{props.date}</span></h3>
              <h2>{props.post}</h2>
              <div className="tags">
               <h4>{props.tag1}</h4>
               <h4>{props.tag2}</h4>
              </div>
             </div>
             </div>
             <div className="bottom">
               <div>
                 <h3>{props.pay}</h3>
                 <p>{props.location}</p>
               </div>
               <button>Apply now</button>
             </div>
           </div>
    </div>
  )
}

export default Card
