import React from 'react'
import './index.css'
import {USER_LINK} from '../Components/Links'
const mockData=[
  {
  
    name:"Naruto",
    comment:"Dattebayo!",
    reply:[{
      name:"Sakura Haruno",
      comment:"Such a Loser,You're!",
      reply:[]
      },
      
      {
        name:"Sasuke Uchiha",
        comment:"What both useless doing here?",
        reply:[
          {
            name:"Sakura Haruno",
            comment:"Sasuke Kun!",
            reply:[]
            }
        ]
        },
        
    
        {
          name:"Kakashi Hatake",
          comment:"Guys, I'm waiting in academy.",
          reply:[
            {
              name:"Might Guy",
              comment:"Exactly Where you're? Time for rival task",
              reply:[]
              }
          ]
          }]
    },

{
  name:"Monkey D Luffy",
  comment:"Kaizoku wa ore wa nara",
  reply:[]
  },
  
  {
    name:"Zoro ",
    comment:"Is this NetFlix?",
    reply:[
      {
        name:"Monkey D Luffy",
        comment:"Get a Compass Atleast..",
        reply:[]
        }
    ]
    },
    

    {
      name:"Gon Freece",
      comment:"I don't want my legs cut-off but I don't want to surrender either.",
      reply:[
        {
    name:"Eren Yeager",
    comment:"Tatakai......",
    reply:[]
          }
      ]
      },
      {
        name:"Akshay Saini",
        comment:"Time,Tide and Javascript waits for none..",
        reply:[]
        },
        {
          name:"Sahil",
          comment:"The Best time to start learn coding was yesterday and the second the best time is none.",
          reply:[]
          }
]



const Comment=({data})=>{
 const {name,comment}=data;


 return(
   <div className="endcomment">
     <img src={USER_LINK} alt="user" height="40px"/>
     <div>
       <h3>{name}</h3>
       <p>{comment}</p>
     </div>


   </div>
 )
}

const Commentlist=({comments})=>{
  return comments.map((comment,index)=>
  
  <div  key={index}><Comment
  data={comment}/>
  <div className="replies"> 
    <Commentlist comments={comment.reply}/>
  </div>
  
  </div>)
}










const CommentContainer = () => {






  return (
    <div className="container">
      <h3 className="subheading">Comments:</h3>
    <Commentlist
   comments={mockData}/>
    </div>
  )
}

export default CommentContainer
