export const EVENT_MARKER_POSITION_SET = "EVENT_MARKER_POSITION_SET";

export const markerPositionCreated = (event) => ({
  type: EVENT_MARKER_POSITION_SET,
  payload: event,
});

export const eventMarkerPosition = (lat, lng) => {
  return (dispatch, getState) => {
    const markerPosition = { lat: lat, lng: lng };
    console.log("what is markerPosition", markerPosition);
    dispatch(markerPositionCreated(markerPosition));
  };
};
