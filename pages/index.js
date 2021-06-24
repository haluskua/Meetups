import MeetupList from "../components/meetups/MeetupList";
import { useEffect, useState } from "react";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A first Meetup",
    image:
      "https://cdn.pixabay.com/photo/2017/06/29/21/18/motorcycles-2456247_960_720.jpg",
    address: "some address 5, 123 Some City",
    description: "This is a first meetup!",
  },
  {
    id: "m1",
    title: "A second Meetup",
    image:
      "https://cdn.pixabay.com/photo/2014/01/13/04/17/meetup-243206_960_720.jpg",
    address: "some address 5, 123 Some City",
    description: "This is a second meetup!",
  },
];

function HomePage(props) {
  return <MeetupList meetups={props.meetups} />;
}

//Runs on the server after deployment
export async function getServerSideProps(context) {
  const req = context.req;
  const res = context.res;
  // fetch data from an API
  //RUNS ONLY ON SERVER
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
  };
}

//-------------------
// code executed during build process...
// export async function getStaticProps() {
//   // fetch data from an API...
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//     revalidate: 1,
//   };
// }
//-----------------

export default HomePage;
