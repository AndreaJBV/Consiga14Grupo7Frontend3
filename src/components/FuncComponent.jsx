import React, { useEffect, useState } from 'react';

const FuncComponent = () => {
    const [pizza, setPizza] = useState('Pizza doble');
    const [cancelOrder, setCancelOrder] = useState(false);

    useEffect(() => {
        console.log('Tu pizza fue ordenada');
        setTimeout(() => {
            setPizza('Mozarella');
        }, 2000);
        return () => {
            console.log('Tu pizza está lista');
        };
    }, []);

    useEffect(() => {
        console.log('Se está preparando la pizza');
        if (cancelOrder) {
            setPizza('');
            alert('Pedido cancelado');
        }
    }, [cancelOrder]);

    console.log('Se renderiza');

    return (
        <div>
            <h1>Su pedido:</h1>
            <h3>{pizza}</h3>
            <button onClick={() => setCancelOrder(!cancelOrder)}>{cancelOrder ? 'Hacer pedido'  : 'Cancelar pedido' }</button>
        </div>
    );
};

export default FuncComponent;