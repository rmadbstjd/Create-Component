export default function Profile({img,name,title,state}) {

    return <div className="profile">
        <img
        className="photo"
        src={img}
        alt='avatayr'/>
        { state === "new"
          ?<span className="newBtn">New</span>
          :null
        }
        <h1>{name}</h1>
        <p>{title}</p>
    </div>
}
