import { SET_USER_BOOKING } from "./action";

const initState = {
  price: "",
  cookId: "",
  members: "",
  visits: "",
  package: "",
};

export const BookingReducer = (store = initState, { type, payload }) => {
  switch (type) {
    case SET_USER_BOOKING:
      return {
        ...store,
        price: payload.price,
        cookId: payload.cookId,
        members: payload.members,
        visits: payload.visits,
        package: payload.package,
      };

    default:
      return store;
  }
};
