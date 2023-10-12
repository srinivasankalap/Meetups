import NewMeetupForm from '../../components/meetups/NewMeetupForm';


function NewMeetupPage(){
    function addMeetup(enteredData){
        console.log(enteredData);
    }

    return <NewMeetupForm onAddMeetup={addMeetup}/>
}

export default NewMeetupPage;