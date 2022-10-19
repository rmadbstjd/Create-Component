export default function Avatar({img,state}) {

    return <div class="avatar">
        <img
        className="photo"
        src={img}
        alt='Avatar'/>
        {state==="new"?<span className='newBtn'>New</span>:null}
        
    </div>
}