import "./Form.scss";
import { useState } from "react";

const Form = ({defaultFormState, handleSubmitForm, formTitle }) => {

    const [destination, setDestination] = useState(defaultFormState);

    const handleValidation = e => {
        e.preventDefault();

        if (!Object.values(destination).some(value => !value)) {
            alert("Unable to upload your destination. All fields need to be completed.")
            return;
        }

        handleSubmitForm(destination);
    }



    return (
        <div className="form-container">
            <h1 className="form-container__title">{formTitle}</h1>
            <form className="form-container__form" onSubmit={handleValidation}>
            <input 
                    className="form-container__input"
                    type="text" 
                    placeholder="Your Name..."
                    onInput={e => setDestination({...destination, name: e.target.value})}
                    value={destination.name}
                />
                <input 
                    className="form-container__input"
                    type="text" 
                    placeholder="Country Name..."
                    onInput={e => setDestination({...destination, location: e.target.value})}
                    value={destination.location}
                />
                <input
                    className="form-container__input"
                    type="text" 
                    placeholder="Image Url..."
                    onInput={e => setDestination({...destination, image: e.target.value})}
                    value={destination.image} 
                />
                <input 
                    className="form-container__input"
                    type="text" 
                    placeholder="Cost of Travel.."
                    onInput={e => setDestination({...destination, cost: e.target.value})}
                    value={destination.cost}
                />
                <input 
                    className="form-container__input"
                    type="text" 
                    placeholder="City/Places to visit"
                    onInput={e => setDestination({...destination, visit: e.target.value})}
                    value={destination.visit}
                />
                <input 
                    className="form-container__input"
                    type="date" 
                    placeholder="Date visit from..."
                    onInput={e => setDestination({...destination, dateFrom: e.target.value})}
                    value={destination.dateFrom}
                />
                <input 
                    className="form-container__input"
                    type="date" 
                    placeholder="Date visit to..."
                    onInput={e => setDestination({...destination, dateTo: e.target.value})}
                    value={destination.dateTo}
                />
                <input
                    className="form-container__input comment"
                    type="text"
                    placeholder="Your comments..."
                    onInput={e => setDestination({...destination, comment: e.target.value})}
                    value={destination.comment}
                />
                <button className="form-container__button" type="submit">Submit your review</button>
            </form>
        </div>
    )

}

export default Form;