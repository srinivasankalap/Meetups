import { useRouter } from 'next/router';
import NewMeetupForm from '../../components/meetups/NewMeetupForm';
import Head from 'next/head';


function NewMeetupPage(){
    const router=useRouter();
    async function addMeetup(enteredData){
        const response =await fetch('/api/new-meetup',{
            method: 'POST',
            body: JSON.stringify(enteredData),
            headers:{
                'Content-Type': 'application/json'
            }
        });

        const data=await response.json();
        console.log(data);
        router.push('/');
    }

    return (<>
    <Head>
        <title>Create a new Meetup</title>
        <meta name='description' content='Add your own meetups...'/>
    </Head>
    <NewMeetupForm onAddMeetup={addMeetup}/></>)
}

export default NewMeetupPage;