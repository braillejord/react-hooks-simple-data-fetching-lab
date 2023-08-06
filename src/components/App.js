// create your App component here
import React, { useState, useEffect } from "react";

function App() {
    const [newImage, setNewImage] = useState()

    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/image/random')
            .then(r => r.json())
            .then(data => setNewImage(data.message))
    }, [])

    if (!newImage) {
        return (
            <p>Loading...</p>
        )
    }

    return (
        <img src={newImage} alt={"A Random Dog"} />
    )

}

export default App;