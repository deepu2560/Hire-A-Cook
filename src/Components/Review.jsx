import * as React from "react";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Grid from "@mui/material/Grid";
import { useSelector } from "react-redux";

export default function Review() {
  const products = [];
  const Cookname = useSelector((store) => store.booking);
  console.log(Cookname);
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Booking summary
      </Typography>
      <List disablePadding>
        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            Cook Name :{Cookname.name}
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Amount: {Cookname.price}
          </Typography>
          <Typography gutterBottom>No of members:{Cookname.members}</Typography>
          <Typography gutterBottom>No of visits: {Cookname.visits}</Typography>
          <Typography gutterBottom>
            Subscription Period: {Cookname.package} month
          </Typography>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
