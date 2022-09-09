import React, { useContext } from "react";
import { ItemContext } from "../context/itemContext";
import { useHistory } from "react-router-dom";

const Home = () => {
    const { items, clearAll, getOneItem } = useContext(ItemContext);
    const history = useHistory();

    const toSellOrUpdate = (itemName) => {
        history.replace("/sellOrUpdate");
        getOneItem(itemName);
    };

    const emptyDb = () => {
        clearAll();
    };

    return (
        <div>
            <h4 className='text-center mb-3' style={{ color: "rgb(199, 125, 15)" }}>
                Vent de piece
            </h4>
            {/* <div className='search'>
        <input
          type='text'
          className='form-control'
          placeholder='Search Item'
          style={{ width: '60%' }}
        />
      </div> */}
            {items ? (
                <div class='table-responsive'>
                    <table class='table table-fixed'>
                        <thead>
                            <tr>
                                <th scope='col' class='col-2'>
                                    #
                                </th>
                                <th scope='col' class='col-4'>
                                    Nom
                                </th>
                                <th scope='col' class='col-3'>
                                    Prix (GHc)
                                </th>
                                <th scope='col' class='col-3'>
                                    Quantitie
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {items.map((item, i) => (
                                <tr key={i}>
                                    <td className='col-2'>{i + 1}</td>
                                    <td className='col-4'>
                                        {/* eslint-disable-next-line */}
                                        <a
                                            onClick={() => toSellOrUpdate(item.name)}
                                            style={{ color: "rgb(199, 125, 15)" }}
                                        >
                                            <h6 className='mt-1'>{item.name}</h6>
                                        </a>
                                    </td>
                                    <td className='col-3'>
                                        {/* eslint-disable-next-line */}
                                        <a onClick={() => toSellOrUpdate(item.name)}>
                                            <h6 className='mt-1'>{item.price}</h6>
                                        </a>
                                    </td>
                                    <td className='col-3'>
                                        {/* eslint-disable-next-line */}
                                        <a onClick={() => toSellOrUpdate(item.name)}>
                                            <h6 className='mt-1'>{item.quantity}</h6>
                                        </a>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                     {/*
                    <button
                        className='btn'
                        style={{ backgroundColor: "rgb(199, 125, 15)" }}
                        onClick={() => emptyDb()}
                    >
                       <h6 className='mt-2'>حذف الكل</h6>
                    </button>
                    */}
                </div>
            ) : (
                <div>لم تضف اي عنصر</div>
            )}
        </div>
    );
};

export default Home;
