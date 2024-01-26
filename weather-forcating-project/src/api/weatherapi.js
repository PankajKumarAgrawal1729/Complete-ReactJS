const url = "https://api.weatherapi.com/v1/current.json?key=b276e10e76964cf1a12105844231412&q="
export const getWeatherData = async (city) =>{
    const response = await fetch(`${url}${city}&aqi=yes`, {
        method: "Get"
    });
    return await response.json();
}

export const getWeatherDataForLocation = async (lat, log) =>{
    const response = await fetch(`${url}${lat},${log}&aqi=yes`, {
        method: "Get"
    });
    return await response.json();
}