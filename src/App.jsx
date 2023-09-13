import React from 'react';
import './App.css';

function App() {
    const [lights, toggleLights] = React.useState(false);
    console.log(lights);

    return (
        <main className={lights ? "on" : "off"}>
            <section>
                <div className="dot"></div>
                <button
                    type="button"
                    onClick={() => toggleLights(!lights)}
                >
                    {lights ? "Turn off" : "Turn on"}
                </button>
            </section>
        </main>
    );
}

export default App;
