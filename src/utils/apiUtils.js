export const getAllDestinations = async () => {
    const url = "http://localhost:8080/destinations";
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

export const getRandomDestination = async () => {
    const url = "http://localhost:8080/destination/random";
    const response = await fetch(url);
    const data = await response.json();
    return data;
}