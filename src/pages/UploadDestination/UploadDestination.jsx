import Form from "../../components/Form/Form";
import "./UploadDestination.scss"; 

const UploadDestination = () => {

    const handleSubmitForm = async destination => {
        const res = await fetch( `http://localhost:8080/destination/`,
        {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(destination)
        });
        if (res.ok) {
            alert("Destination review has been added! Thank you for your contribution :)");
        } else {
            alert("Something went wrong");
        }
    };

    const defaultFormState = { 
        name: "", 
        location: "", 
        image: "", 
        cost: "", 
        visit: "", 
        dateFrom: "", 
        dateTo: "", 
        comment: "" 
    }


    return (
        <div className="uploadDestination">
            <Form defaultFormState={defaultFormState} handleSubmitForm={handleSubmitForm} formTitle="Upload Your Destination Travel" page="upload" />
        </div>
    )
}

export default UploadDestination;