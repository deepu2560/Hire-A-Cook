import { useDispatch,useSelector  } from "react-redux"
import { useEffect } from "react"
import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import { fontSize } from "@mui/system";
import AnimatedText from 'react-animated-text-content';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Button from '@mui/material/Button';



const imgarr = [{url:"https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aW5kaWFuJTIwZm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"},{url:"https://images.unsplash.com/photo-1507048331197-7d4ac70811cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"},{url:"https://media.istockphoto.com/photos/smiling-woman-cutting-zucchini-picture-id838310992?k=20&m=838310992&s=612x612&w=0&h=n48Tp71wTO84wrLIht7Lvk8m2e3KkUXJs_9D3eVxGLk="}]
export const Home = () => {
  const login = useSelector((state)=>state.login.loading)
  console.log(login)
  // useEffect(()=>{
  //   console.log(login)
  // },[]
    return (
    <div >
      <Animatedtext/>
        <Slideshow/>
        <h1 style={{marginTop:"5%"}}>PLANS</h1>
        <ActionAreaCard/>
    </div>
  )
}






const Slideshow = () => {
  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);
  const delay = 2000
  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === imgarr.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="slide-container" style={{margin:"auto",width:1000,height:500,marginTop:40}} >
      <Fade>
        {imgarr.map((fadeImage, index) => (
          <div className="each-fade" key={index}>
            <div className="image-container" >
              <img src={fadeImage.url}  style={{height:500,width:1000}}/>
            </div>
          </div>
        ))}
      </Fade>
    </div>
  )
}

const Animatedtext = ()=>{
  return (
    <>
    <AnimatedText
    type="words" // animate words or chars
    animation={{
      x: '200px',
      y: '-20px',
      scale: 1.1,
      ease: 'ease-in-out',
    }}
    animationType="float"
    interval={0.06}
    duration={0.4}
    tag="h1"
    className="animated-paragraph"
    includeWhiteSpaces
    threshold={0.1}
    rootMargin="20%"
  >
    TIRED OF TAKEAWAY?
  </AnimatedText>
  <AnimatedText
    type="words" // animate words or chars
    animation={{
      x: '200px',
      y: '-20px',
      scale: 1.1,
      ease: 'ease-in-out',
    }}
    animationType="float"
    interval={0.08}
    duration={2}
    tag="h1"
    className="animated-paragraph"
    includeWhiteSpaces
    threshold={0.1}
    rootMargin="20%"
  >
    GET FOOD PREPARED AT YOUR HOME!
  </AnimatedText>
    </>
  )
}

const subarr = [{title:"1 MONTH PLAN",url:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Samosachutney.jpg/420px-Samosachutney.jpg"},{title:"3 MONTHS PLANS",url:"https://t3.ftcdn.net/jpg/03/62/02/26/240_F_362022640_fZ6UM0JycJlFDdBiR1pYlNddKfdGvYwR.jpg"},{title:"6 MONTHS PLANS",url:"https://static.toiimg.com/photo/61915645.cms?width=500&resizemode=4&imgsize=98470"},{title:"12 MONTHS PLANS",url:"https://b.zmtcdn.com/data/pictures/1/18431401/d36eadd20f1413d039e95c64bac407e9.jpg"}]
const ActionAreaCard = ()=>{
  return (
    <div className={"planscontainer"}>
    {subarr.map((item)=>
      <Card sx={{ width: "22%" ,marginLeft:2,marginTop:3,marginRight:2,backgroundColor:"#F90716",boxShadow:"rgba(0, 0, 0, 0.24) 0px 3px 8px"}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={item.url}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" sx={{fontWeight:"bold",color:"white"}}>
            {item.title}
          </Typography>
        </CardContent>
      </CardActionArea>
      {/* <Button variant="contained" sx={{width:260}}>Subscribe</Button> */}
    </Card>
    )}
    </div>    
  );
}

