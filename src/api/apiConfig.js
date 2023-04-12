const apiConfig = {
    apiKey: '339ba15c431eed2c2b87b8fad0c5814a',
    api_url: (city, apiKey) => `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`,
    apiHours_url: (city, apiKey) => `https://pro.openweathermap.org/data/2.5/forecast/hourly?q=${city}&appid=${apiKey}`,
}

export default apiConfig