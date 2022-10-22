import '../../App.css'
import Avatar from '../../basic/components/Avatar';
import Profile from '../../basic/components/Profile';

function AppProfile() {
  const handleClick = (event) => {
    console.log(event);
    alert("button is clicked!!");
  }
  const profileArr = [{img : "https://plus.unsplash.com/premium_photo-1663050629719-83e16832a804?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80",
                      name : "black kim", job : "BE Developer", state : "new"},
                      {img :"https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1085&q=80", 
                      name : "holly molly", job : "FE Developer", state : "old"},
                      {img : "https://images.unsplash.com/photo-1657000521605-559d5e227280?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
                      name : "Bob kyu", job :"Designer", state : "old"}];
  return(
    <> 
      <button onClick={handleClick}>Button</button>
      
      <Avatar img={profileArr[0].img} state="new"/>
      {   
          profileArr.map((item) => {
            return <Profile img = {item.img}
            name= {item.name} title={item.job} state={item.state}/>
          })
          

      }
      
      
    </>
  );
    
}

export default AppProfile;
