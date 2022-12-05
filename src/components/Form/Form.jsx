import "./Form.scss";

const Form = () => {
    return (
        <div className="form-container">
            <h1 className="form-container__title">Upload Your Destination Travel</h1>
            <form className="form-container__form" onSubmit={""}>
            <input 
                    className="form-container__input"
                    type="text" 
                    placeholder="Your Name..."
                />
                <input 
                    className="form-container__input"
                    type="text" 
                    placeholder="Country Name..."
                />
                <input
                    className="form-container__input"
                    type="file" 
                    name="location image" 
                    accept="image/*" 
                />
                <input 
                    className="form-container__input"
                    type="text" 
                    placeholder="Cost of Travel.."
                />
                <input 
                    className="form-container__input"
                    type="text" 
                    placeholder="City/Places to visit"
                />
                <input 
                    className="form-container__input"
                    type="date" 
                    placeholder="Date visit from..."
                />
                <input 
                    className="form-container__input"
                    type="date" 
                    placeholder="Date visit to..."
                />
                <textArea
                    className="form-container__input comment"
                    row="4"
                    column="1"
                    placeholder="Your comments..."
                />
                <button className="form-container__button" type="submit">Submit your review</button>
            </form>
        </div>
    )

}

export default Form;