import MeetupList from "../components/meetups/MeetupList";
import { MongoClient } from "mongodb";

const DUMMY = [
  {
    id: "m1",
    title: "A first meetup",
    image:
      "https://www.hyderabadtourism.travel/images/popular/places-near-hyderabad/best-tourist-places-to-visit-near-hyderabad-header.jpg",
    address: "Some address",
    description: "This is a first meetup",
  },
  {
    id: "m2",
    title: "A second meetup",
    image:
      "https://www.thomascook.in/blog/wp-content/uploads/2017/11/2.-vatican-city--e1521255022971.jpg",
    address: "Male address",
    description: "This is a second meetup",
  },
  {
    id: "m3",
    title: "A third meetup",
    image:
      "https://i0.wp.com/blog.bambatravel.com/wp-content/uploads/2018/05/shutterstock_407161462-Santorini.jpg?w=1024&ssl=1",
    address: "Bali address",
    description: "This is a third meetup",
  },
];

function HomePage(props) {
  return <MeetupList meetups={props.meetups} />;
}

// export async function getServerSideProps(context){
//     const req=context.req;
//     const res=context.res;
//     return {
//         props:{
//             meetups: DUMMY
//         }
//     }
// }
export async function getStaticProps() {
  const client = await MongoClient.connect(
    "mongodb+srv://First:Cnu7997563693@cluster0.fgvz9og.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();
  const meetupsCollection = db.collection("meetups");
  const meetups= await meetupsCollection.find().toArray();
  client.close();
  return {
    props: {
      meetups: meetups.map(meetup=>({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString()
      })),
    },
    revalidate: 1,
  };
}

export default HomePage;
