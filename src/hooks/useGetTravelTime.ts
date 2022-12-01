import {DISTANCE_MATRIX_KEY} from "@env";

import {useAppDispatch} from "../store";
import {setTravelTimeInfo} from "../store/slices/navSlice";


export const useGetTravelTime = () => {
  const dispatch = useAppDispatch();

  return async (origin: any, destination: any,) => {
    await fetch(`https://maps.googleapis.com/maps/api/distancematrix/json?units=metric&origins=${origin.description}&destinations=${destination.description}&key=${DISTANCE_MATRIX_KEY}`)
      .then((res) => res.json())
      .then((data) => {
        dispatch(setTravelTimeInfo(data.rows[0].elements[0]))
      })
  };
};