import axios from 'axios';
import { React, useEffect, useState } from 'react';

Weather.propTypes = {

};

function Weather(props) {
    const [title, setTitle] = useState("");

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(async () => {
        console.log("Run effect")
        let reponse = await axios({
            method: 'post',
            url: "https://reacthook-hoidanit-backend.herokuapp.com/get-data-by-url",
            data: { url: 'https://www.metaweather.com/api/location/1236594' }
        });
        setTimeout(() => {
            setTitle(reponse.data.title)
        }, 0)
    }, [title]);
    return (
        <div>
            {title}
        </div>
    );
}

export default Weather;