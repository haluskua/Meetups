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

//page is RE-GENERATE for all URL/ID during build up
export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  //fetch data for a single meetup
  const meetupId = context.params.meetupId;
  console.log(meetupId);
  return {
    props: {
      meetupData: {
        image:
          "https://cdn.pixabay.com/photo/2017/06/29/21/18/motorcycles-2456247_960_720.jpg",
        id: meetupId,
        title: "First Meetup",
        address: "Some Street 5, Some City",
        description: "This is a first meetup",
      },
    },
  };
}
export default MeetupDetails;
