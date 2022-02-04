import React from 'react'
import TextInputField from "../re-usable-component/TextInputField"
import Modal from "../re-usable-component/Modal"
import classes from "../../styles/TextInput.module.css"



const OthersExpenseAddModal = () => {

    // handle change
    const handleChange = () => {

    }
    
    return (
        <>
            <form roles="form text-left">
                <Modal
                    modalId="othersExpense"
                    modalHeader="Add Chicken Information"
                    btnText="Add Information"
                    btnColor="bg-gradient-primary"
                >
                    <TextInputField
                        divClass="mb-3"
                        type="text"
                        inpClass={classes.modalInput}
                        placeholder="Category"
                        name="category"
                        onChange={handleChange}
                    // value={chicken.company}
                    />
                    <TextInputField
                        divClass="mb-3"
                        type="text"
                        inpClass={classes.modalInput}
                        placeholder="Name"
                        name="name"
                        onChange={handleChange}
                    // value={chicken.quantity}
                    />
                    <TextInputField
                        divClass="mb-3"
                        type="number"
                        inpClass={classes.modalInput}
                        placeholder="Price"
                        name="tk"
                        onChange={handleChange}
                    // value={chicken.price}
                    />
                    <TextInputField
                        divClass="mb-3"
                        type="text"
                        inpClass={classes.modalInput}
                        placeholder="Description"
                        name="description"
                        onChange={handleChange}
                    // value={chicken.price}
                    />
                </Modal>
            </form>
        </>
    )
}

export default OthersExpenseAddModal
