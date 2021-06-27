import Head from "next/Head";
import { Fragment } from "react";
import MeetupList from "../components/meetups/MeetupList";

import { MongoClient } from "mongodb";

function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>React Meetups</title>
        <meta
          name="description"
          content="Browse a huge list of highly active React meetups"
        />
      </Head>
      <MeetupList meetups={props.meetups} />;
    </Fragment>
  );
}

export async function getStaticProps() {
  //fetch data from and API
  // establishing connection
  const client = await MongoClient.connect(
    "mongodb+srv://ompa:tAMplYbZrNcq4LAc@cluster0.pjpgz.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find().toArray();

  client.close();

  //Runs on the server after deployment
  // export async function getServerSideProps(context) {
  //   const req = context.req;
  //   const res = context.res;
  // fetch data from an API
  //RUNS ONLY ON SERVER

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.title,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 1,
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
