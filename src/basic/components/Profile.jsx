import Avatar from './Avatar';
export default function Profile({img,name,title,state}) {

    return <div className="profile">
        <Avatar img={img} state={state}/>
        <h1>{name}</h1>
        <p>{title}</p>
    </div>
}
