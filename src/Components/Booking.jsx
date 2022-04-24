import React from "react";
import { Button } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SetUserBooking } from "../Redux/Booking/action";
import "../Styles/Booking.css";
import { useNavigate, Navigate, useParams } from "react-router-dom";

const selectStyle = {
  width: "90%",
  margin: "auto",
  marginTop: "1%",
  marginBottom: "2%",
};

const labelStyle = {
  marginLeft: "5%",
  marginTop: "2%",
  fontSize: 18,
};

export const Booking = () => {
  const [cook, setCook] = useState({});
  const [category, setCategory] = useState("");
  const [members, setMembers] = useState(1);
  const [visits, setVisits] = useState(1);
  const [packageset, setPackage] = useState(1);
  const dispatch = useDispatch();
  const booking = useSelector((state) => state.booking);
  const isAuth = useSelector((store) => store.login.isAuthenticated);
  const navigate = useNavigate();
  const { id } = useParams();
  console.log(id);

  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  const handlememberChange = (event) => {
    setMembers(event.target.value);
  };

  const handlevisitsChange = (event) => {
    setVisits(event.target.value);
  };

  const handlepackageChange = (e) => {
    setPackage(e.target.value);
  };

  const getCook = () => {
    axios
      .get(`https://hire-a-cook.herokuapp.com/cook/${id}`)
      .then((res) => {
        console.log(res.data);
        setCook({ ...res.data });
      })
      .catch((error) => {
        console.log("error is", error);
      });
  };

  useEffect(() => {
    getCook();
  }, []);

  const handleCheckout = () => {
    const finalPrice = cook.rate * members * visits * packageset;
    const bookingDetails = {
      name: cook.name,
      price: finalPrice,
      cookId: cook._id,
      members: members,
      visits: visits,
      package: packageset,
    };
    dispatch(SetUserBooking(bookingDetails));
    console.log(booking);
    navigate("/checkout");
  };

  if (isAuth === false) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="booking">
      <div className="cont1">
        <div className="cont2">
          <div className="image_div">
            <img
              height="100%"
              width="100%"
              className="image_class"
              src={cook.images}
              alt="cookimage"
            />
          </div>
          <h3>{cook.name}</h3>
          <h4>Experinece : {cook.experience} years</h4>
          <h4>{cook.categories ? cook.categories.join(" & ") : ""}</h4>
          <h4>{cook.cuisines ? cook.cuisines.join(" & ") : ""}</h4>

          <p>Ratings{cook.rating}</p>
        </div>
        <div className="cont3">
          <InputLabel style={labelStyle} id="demo-simple-select-label">
            Category
          </InputLabel>
          <Select
            style={selectStyle}
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            value={category}
            label="Age"
            onChange={handleChange}
          >
            {cook.categories
              ? cook.categories.map((el) => {
                  return (
                    <MenuItem value={el} key={el}>
                      {el}
                    </MenuItem>
                  );
                })
              : ""}
          </Select>
          {/* non veg  */}
          <InputLabel style={labelStyle} id="demo-simple-select-label">
            No. of Persons
          </InputLabel>
          <Select
            style={selectStyle}
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            value={members}
            label="Age"
            onChange={handlememberChange}
          >
            <MenuItem value={1}>1</MenuItem>
            <MenuItem value={2}>2</MenuItem>
            <MenuItem value={3}>3</MenuItem>
            <MenuItem value={4}>4</MenuItem>
            <MenuItem value={5}>5</MenuItem>
          </Select>
          {/* no of family */}
          <br />
          <InputLabel style={labelStyle} id="demo-simple-select-label">
            No. of Visits Per Day
          </InputLabel>
          <Select
            style={selectStyle}
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            value={visits}
            label="Age"
            onChange={handlevisitsChange}
          >
            <MenuItem value={1}>1</MenuItem>
            <MenuItem value={2}>2</MenuItem>
            <MenuItem value={3}>3</MenuItem>
          </Select>
          <br />
          <InputLabel style={labelStyle} id="demo-simple-select-label">
            Select Subscription
          </InputLabel>
          <Select
            style={selectStyle}
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            value={packageset}
            label="Package"
            onChange={handlepackageChange}
          >
            <MenuItem value={1}>1 Month</MenuItem>
            <MenuItem value={3}>3 Months</MenuItem>
            <MenuItem value={6}>6 Months</MenuItem>
            <MenuItem value={12}>12 Months</MenuItem>
          </Select>
          <br />
          <div className="cont4">
            <div>
              Final Price <b>₹{cook.rate * packageset * members * visits}</b>
            </div>
            <div style={{ width: "90%", marginTop: "5%" }}>
              <Button
                sx={{ padding: "5px" }}
                className="checkout_button"
                onClick={handleCheckout}
              >
                Checkout
              </Button>
            </div>
          </div>

          {/* times per day */}
          {/*  */}
        </div>
      </div>
    </div>
  );
};
