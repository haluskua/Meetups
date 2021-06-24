import { Fragment } from "react";
import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails() {
  return (
    <Fragment>
      <MeetupDetail
        image="https://cdn.pixabay.com/photo/2017/06/29/21/18/motorcycles-2456247_960_720.jpg"
        title="First Meetup"
        address="Some Street 3, Some City"
        description="This is just the first meetup"
      />
    </Fragment>
  );
}

export default MeetupDetails;
