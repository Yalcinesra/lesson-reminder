
import "bootstrap/dist/css/bootstrap.min.css";
import Orta from "./components/Orta";
import MyNavbar from "./components/MyNavbar";


const App = () => {
  return (
    <div>
    <MyNavbar/>
       <Orta
       id= "1"
    name= "HTML"
    hour= "10:00 am"
    image=
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpngGRjYX1ca7qAADU3K6eGLj7ShQE3L2otdzfryl_Y9Ht2QRoQKYQbsXd36XIxMbYOw0&usqp=CAU" 

      />

      <Orta
  
  
    id="2"
    name= "CSS"
    hour= " 11:15 am"
    image=
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png"
      />
  <Orta
  
    id= "3"
    name= "JAVASCRIPT"
    hour= "13:00 pm"
    image=
      "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
  
  />
  <Orta
    id= "4"
    name= "REACT"
    hour= "14:15 pm"
    image=
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
  />
  <Orta
  
    id= "5"
    name= "BOOTSTRAP"
    hour= "16:15 pm"
    image=
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/800px-Bootstrap_logo.svg.png"
  />
  <Orta
    id= "6"
    name= "MUI"
    hour= "16:15 pm"
    image= "https://mui.com/static/logo.png"
   /> 
       
        
    
       
      
    </div>
  )
}

export default App