import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useDispatch, useSelector } from 'react-redux';
import { GetCooks,GetCuisinesCooks,GetCatCooks} from '../Redux/Cook_Details/actions'

const divstyles = { 
  margin:"auto",
  marginTop:"2%",
  marginBottom:"4%",
  width:"40%",
  display:"flex",
  justifyContent:"space-around",
}

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export const Cooks = () => {

  const [page,setPage] = React.useState(1)
  const [rate,setRate] = React.useState(1)
  const [cat,setCat] = React.useState("Veg")
  const [cuisines,setCuisines] = React.useState("South")

  const [expanded, setExpanded] = React.useState(false);

  const {cookDetails} = useSelector((store)=>{return store.details})
  const dispatch = useDispatch()
  
  React.useEffect(()=>{
    dispatch(GetCuisinesCooks({cuisines}))
  },[cuisines])

  React.useEffect(()=>{
    dispatch(GetCatCooks({cat}))
  },[cat])

  React.useEffect(()=>{
    dispatch(GetCooks({page,rate}))
  },[page,rate])

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return <>
   <div style={{border:"1px solid transparent",height:100,background:"#da1e37",marginBottom:"4%",width:"100%"}}>
    <div style={divstyles}>
          <Button style={{background:"#4895ef",fontWeight:900}} 
          variant="contained" onClick={()=>{setRate(rate==1?-1:1)}}> ₹ Rate {rate==1?"Asc":"Desc"}</Button>
          <Button style={{background:"#49a942",fontWeight:900}} 
          variant="contained" onClick={()=>{setCat(cat=="Veg"?"Non-Veg":"Veg")}}>{cat}</Button>
          <Button style={{background:"#fca311",fontWeight:900}} 
          variant="contained" onClick={()=>{setCuisines(cuisines == "South"?"North":"South")}}>{cuisines} Indian</Button>
      </div>
   </div>
   <div style={{display:"flex",flexWrap:"wrap",gap:30,justifyContent:"space-evenly",width:'80%',margin:"auto"}}>
      {cookDetails?.map((info,index)=>(
        <Card key={index} sx={{ width: 320,background:"#f08080"}}>
          <CardHeader/>
          <CardMedia style={{border:"1px solid gray",borderRadius:"50%",width:"65%",margin:'auto'}}
            component="img"
            height="184"
            image={info?.images}
            alt="Chef Pic"
          />
          <CardContent style={{color:"white"}}>
          <Typography variant="h5" color="InfoText">
              {info?.name}
            </Typography>
            
          </CardContent>
          <CardActions disableSpacing>
          <Button style={{background:"#7fc8f8",fontWeight:900,marginLeft:"40%"}} variant="contained">Book</Button>
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </ExpandMore>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent style={{textAlign:"left"}} >
              <Typography>
                <b>Name</b> : {info?.name}
              </Typography>
              <Typography>
                <b>Experience</b> : {info?.experience} Years
              </Typography>
              <Typography>
                <b>Categories</b> : {info?.categories[0]}, {info?.categories[1]}
              </Typography>
              <Typography>
              <b>Cuisines</b> : {info?.cuisines[0]}, {info?.cuisines[1]}
              </Typography>
              <Typography>
              <b>Rating</b> : {info?.rating}⭐
              </Typography>
              <Typography>
                <b>Rate</b> :  ₹ {info?.rate}/- Per Visit
              </Typography>
              <Typography>
                <b>Reviews</b> : {info?.reviews.map((el,index)=>(
                  <div key={index}>{index+1}) {el}</div>
                ))}
              </Typography>
            </CardContent>
          </Collapse>
        </Card>))}
        </div>
      <div style={{margin:"auto",marginTop:"5%", marginBottom:"4%",width:400,display:"flex",justifyContent:"space-around"}}>
        <Button disabled={page==1} style={{background:page==1?"red":"blue",fontWeight:900,color:"white"}} 
          variant="contained" onClick={()=>{setPage(page-1)}} >Prev Page</Button>
        <Button disabled={page==2} style={{background:page==2?"red":"green",fontWeight:900,color:"white"}} 
        variant="contained" onClick={()=>{setPage(page+1)}}>Next Page</Button>
      </div>
  </>
}
 