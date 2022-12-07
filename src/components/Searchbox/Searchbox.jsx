import "./Searchbox.scss";

const Searchbox = ({handleInput, searchValue}) => {

    return (
        <form className="searchbox">
            <input 
                type="text"
                className="searchbox__input"
                placeholder="Search By Location..." 
                onInput={handleInput}
                value={searchValue}
                />
        </form>
    )
}

export default Searchbox;