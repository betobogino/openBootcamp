import { useState, useEffect } from "react";

const ComponentFunction = () => {
    const [date, setDate] = useState({
        fecha: new Date(),
        edad: 0,
        nombre: 'Martín',
        apellidos: 'San José'
    });

    useEffect(() => {
        const timerID = setInterval (
            () => tick(), 1000
        );

        return () => {
            clearInterval (timerID);
        };
    }, []);

    const tick = () => {
        setDate((prevState) => {
            let edad = prevState.edad +1;
            return {
                ...prevState,
                fecha: new Date(),
                edad
            }
        });
    }

    return (
        <div>
            <div>
                <h2>
                    Hora Actual:
                    {date.fecha.toLocaleTimeString()}
                </h2>
                <h3>{date.nombre} {date.apellidos}</h3>
                <h1>Edad: {date.edad}</h1>
            </div>
        </div>
    );
}

export default ComponentFunction;
