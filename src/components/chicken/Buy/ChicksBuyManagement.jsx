import React, { memo, useEffect } from 'react'
import { useNavigate } from "react-router-dom"
import Button from "../../re-usable-component/Button"
import ChiksAddModal from "./ChiksBuyAddModal"
import InfoTableHeader from "../../re-usable-component/InfoTableHeader"
import InfoTableRow from "../../re-usable-component/InfoTableRow"
import chicksImg from "../../image/chicks.jpg"
import ChicksUpdateModal from "./ChicksBuyUpdateModal"
import { useSelector, useDispatch } from "react-redux"
import { apiBaseUrl } from "../../Utils/constant"
import axios from 'axios'
import Swal from "sweetalert2"
import {
    BUY_CHICKEN,
    CHICKS_UPDATE_ID,
    CHICKS_UPDATE_ID_2,
    CHICKS_UPDATE_COMPANY,
    CHICKS_UPDATE_QUANTITY,
    CHICKS_UPDATE_PRICE,
    CHICKS_UPDATE_DATE,
} from "../../../redux/actions/types"
import OverviewChicksBuy from "./OverviewChicksBuy"

const ChicksBuyManagement = () => {
    // redux
    const dispatch = useDispatch()
    const { buyChicken, isAuthenticated } = useSelector(state => state.loginReducer)


    // history
    const navigate = useNavigate()


    // set update input value
    const setUpdateInputValue = () => {
        dispatch({ type: CHICKS_UPDATE_ID, payload: buyChicken._id })
        dispatch({ type: CHICKS_UPDATE_ID_2, payload: buyChicken.id2 })
        dispatch({ type: CHICKS_UPDATE_COMPANY, payload: buyChicken.company })
        dispatch({ type: CHICKS_UPDATE_QUANTITY, payload: buyChicken.quantity })
        dispatch({ type: CHICKS_UPDATE_PRICE, payload: buyChicken.price })
        dispatch({ type: CHICKS_UPDATE_DATE, payload: buyChicken.date })
    }


    // delete chicks
    const deleteProduct = () => {
        Swal.fire({ title: 'Are you sure?', icon: 'warning', showCancelButton: true, confirmButtonColor: '#3085d6', cancelButtonColor: '#d33', confirmButtonText: 'Yes, delete it!' }).then((result) => {
            if (result.isConfirmed) {
                // delete function
                axios.put(`${apiBaseUrl}/chicks-delete`)
                    .then(res => {
                        // add to redux & localStorage
                        dispatch({ type: BUY_CHICKEN, payload: res.data.chicks })
                        localStorage.setItem('buyChicken', JSON.stringify(res.data.chicks))
                    }).catch(error => {
                        console.log(error.response);
                    })
            }
        })
    }




    // redirect to login page
    useEffect(() => {
        if (!isAuthenticated) {
            navigate('/login')
        }
    }, [isAuthenticated, navigate])

    return (
        <>
            <div className="container-fluid py-4">
                <div className="row">
                    {/* chicks buy details table */}
                    <div className="col-md-8 mt-3 mt-md-5">
                        <div>
                            <Button btnClass="btn bg-gradient-info" type="button" data-bs-toggle="modal" data-bs-target="#addChicks">
                                <i className="fas fa-plus me-2"></i>
                                Add Item
                            </Button>
                            <ChiksAddModal />
                        </div>
                        {/* table header */}
                        <InfoTableHeader
                            header="Chicks Management"
                            col1="Company Name"
                            col2="Quantity"
                            col3="Price"
                            col4="Date of Bringig"
                        >

                            {/* table row */}
                            {!buyChicken ? null :
                                <InfoTableRow
                                    img={chicksImg}
                                    col1={buyChicken.company}
                                    col2={buyChicken.quantity}
                                    col3={`${buyChicken.price} bdt`}
                                    col4={buyChicken.date}
                                    col2_color="bg-gradient-info"
                                    col3_color="bg-gradient-danger"
                                    col4_color="bg-gradient-info"
                                    modalId="chicksUpdate"
                                    setUpdateInputValue={setUpdateInputValue}
                                    deleteProduct={deleteProduct}
                                >

                                    {/* Chicks Info update Modal */}
                                    <ChicksUpdateModal />

                                </InfoTableRow>
                            }
                        </InfoTableHeader>
                    </div>


                    {/* overviewHeader summary when display bigger than small size */}
                    <OverviewChicksBuy
                        displayState="order-first order-md-last mb-4 mb-md-0"
                        buyChicken={buyChicken}
                    />
                </div>
            </div>
        </>
    )
}

export default memo(ChicksBuyManagement)
