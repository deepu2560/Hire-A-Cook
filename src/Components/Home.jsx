import { useDispatch,useSelector  } from "react-redux"
import { useEffect } from "react"
const imgarr = [{url:"https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aW5kaWFuJTIwZm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"},{url:"https://images.unsplash.com/photo-1507048331197-7d4ac70811cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"},{url:"https://media.istockphoto.com/photos/smiling-woman-cutting-zucchini-picture-id838310992?k=20&m=838310992&s=612x612&w=0&h=n48Tp71wTO84wrLIht7Lvk8m2e3KkUXJs_9D3eVxGLk="}]
export const Home = () => {
  const login = useSelector((state)=>state.login.loading)
  console.log(login)
  // useEffect(()=>{
  //   console.log(login)
  // },[]
  const  displayslide = (imagearr)=>{
    let images = document.createElement("img")
    images.className = "imgslide"
    images.src = movarr[0].url
    document.querySelector("#cont").append(images)
    let i=1

    id = setInterval(function(){
        if(i== imagesarr.length){
            i=0
        }
        images.src = movarr[i].url
        document.querySelector(".box").append(images)

        i++
    },3000)
}
  return (
    <div>
      <div className="box">
        
      </div>
    </div>
  )
}
