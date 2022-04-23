import axios from "axios"

export const COOK_DETAILS = "COOK_DETAILS";

export const cook_details = (payload)=>({type:COOK_DETAILS,payload})

export const GetCooks = ({page,rate}) =>(dispatch)=>
{
    let pg = page || 1;
    let rt = rate || 1;

    console.log(page)
    axios.get(`https://hire-a-cook.herokuapp.com/cook?page=${pg}&rate=${rt}`)
    .then(({data})=>{
        dispatch(cook_details(data))
    })
}

export const GetCuisinesCooks = ({cuisines}) =>(dispatch)=>
{
    let arr;
    axios.get(`https://hire-a-cook.herokuapp.com/cook?size=10`)
    .then(({data})=>{

      arr = data.filter((el)=>{ return el.cuisines.includes(`${cuisines} Indian`)})
      dispatch(cook_details(arr))
    })
}

export const GetCatCooks = ({cat}) =>(dispatch)=>
{
    let arr;
    axios.get(`https://hire-a-cook.herokuapp.com/cook?size=10`)
    .then(({data})=>{

      arr = data.filter((el)=>{ return el.categories.includes(cat)})
      dispatch(cook_details(arr))
    })
    
}