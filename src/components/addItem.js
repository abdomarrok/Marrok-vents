import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { ItemContext } from "../context/itemContext";

const AddItem = () => {
    let history = useHistory();
    const { addItem } = useContext(ItemContext);

    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const [quantity, setQuantity] = useState(0);
    const [stateChanged, setStateChanged] = useState(false);

    const add = (e) => {
        e.preventDefault();
        let item = { name, price, quantity };
        addItem(item);
        setStateChanged(!stateChanged);
        history.replace("/");
    };

    return (
        <div>
            <h4 className='text-center mb-3' style={{ color: "rgb(199, 125, 15)" }}>
                Ajoter
            </h4>
            <form onSubmit={add}>
                <div className='form-group'>
                    <label>Name</label>
                    <input
                        type='text'
                        className='form-control'
                        placeholder='Article'
                        onChange={(e) => setName(e.target.value)}
                        autoFocus
                    />
                </div>
                <div className='form-group'>
                    <label>Prix</label>
                    <input
                        type='number'
                        className='form-control'
                        placeholder='Unitie'
                        onChange={(e) => setPrice(e.target.value)}
                        step='0.01'
                        min='0'
                    />
                </div>
                <div className='form-group'>
                    <label>Quantitie</label>
                    <input
                        type='number'
                        className='form-control'
                        placeholder='Quantitie'
                        onChange={(e) => setQuantity(e.target.value)}
                        min='0'
                    />
                </div>
                <button
                    type='submit'
                    className='btn'
                    style={{ backgroundColor: "rgb(199, 125, 15)" }}
                >
                    <h6 className='mt-2'>Ajoter</h6>
                </button>
            </form>
        </div>
    );
};

export default AddItem;
