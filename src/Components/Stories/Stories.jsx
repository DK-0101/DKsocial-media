import { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";
import "./Stories.scss";

const Stories = () => {

  const {currentUser} = useContext(AuthContext)

  const stories = [
    {
      id: 1,
      name: "Daykson Tavares",
      img: "https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
    },
    {
      id: 2,
      name: "Daykson Tavares",
      img: "https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
    },
    {
      id: 3,
      name: "Daykson Tavares",
      img: "https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
    },
    {
      id: 4,
      name: "Daykson Tavares",
      img: "https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
    },
  ];

  return (
    <div className='stories'>
       <div className="story">
          <img src={"/upload/" + currentUser.profilePic} alt="" />
          <span>{currentUser.name}</span>
          <button>+</button>
        </div>
      {stories.map(story => (
        <div className="story" key={story.id}>
          <img src={story.img} alt="" />
          <span>{story.name}</span>
        </div>
      ))}
    </div>
  )
}

export default Stories
