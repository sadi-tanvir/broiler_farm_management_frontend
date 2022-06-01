import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom"
import InfoTableHeader from '../re-usable-component/InfoTableHeader'
import InfoTableRow from "../re-usable-component/InfoTableRow"
import medicineImg from "../image/Medicine.jpg"
import MedicineUpdateModal from "./MedicineUpdateModal"
import Button from '../re-usable-component/Button'
import MedicineAddModal from "./MedicineAddModal"
import Swal from "sweetalert2"
import { useSelector, useDispatch } from "react-redux"
import {
    BUY_MEDICINE,
    MEDICINE_UPDATE_ID,
    MEDICINE_UPDATE_ID_2,
    MEDICINE_UPDATE_NAME,
    MEDICINE_UPDATE_QUANTITY,
    MEDICINE_UPDATE_COMPANY,
    MEDICINE_UPDATE_GROUP,
    MEDICINE_UPDATE_PRICE,
    MEDICINE_UPDATE_DATE,
} from "../../redux/actions/types"
import OverView from '../re-usable-component/OverView'
import OverviewRow from "../re-usable-component/OverViewRow"
import axios from "axios"
import { apiBaseUrl } from "../Utils/constant"



const MedicineManagement = () => {

    // redux
    const dispatch = useDispatch()
    const { buyMedicine, isAuthenticated } = useSelector(state => state.loginReducer)
    const { _id, id2, name, quantity, company, group, price, date } = useSelector(state => state.medicineReducer)


    // state
    const [searchMedicine, setSearchMedicine] = useState("")
    const [outputMedicine, setOutputMedicine] = useState([])

    // history
    const navigate = useNavigate()


    // total medicine item
    const medicineItemArr = buyMedicine.map(medicine => {
        return medicine.quantity
    })
    const totalMedicineItem = medicineItemArr.reduce((pre, curr) => pre + curr, 0)

    // total medicine cost
    const medicinePriceArr = buyMedicine.map(medicine => {
        return medicine.quantity * medicine.price
    })
    const totalMedicinePrice = medicinePriceArr.reduce((pre, curr) => pre + curr, 0)


    // delete medicine
    const deleteMedicine = (id) => {
        Swal.fire({ title: 'Are you sure?', icon: 'warning', showCancelButton: true, confirmButtonColor: '#3085d6', cancelButtonColor: '#d33', confirmButtonText: 'Yes, delete it!' }).then((result) => {
            if (result.isConfirmed) {
                // delete function
                axios.put(`${apiBaseUrl}/medicine-delete/${id}`)
                    .then(res => {
                        // add to redux & localStorage
                        dispatch({ type: BUY_MEDICINE, payload: res.data.buyMedicine })
                        localStorage.setItem('buyMedicine', JSON.stringify(res.data.buyMedicine))
                    }).catch(error => {
                        console.log(error.response);
                    })
            }
        })
    }

    // set medicine update input value
    const setUpdateInputValue = (medicine) => {
        dispatch({ type: MEDICINE_UPDATE_ID, payload: medicine._id })
        dispatch({ type: MEDICINE_UPDATE_ID_2, payload: medicine.id2 })
        dispatch({ type: MEDICINE_UPDATE_NAME, payload: medicine.name })
        dispatch({ type: MEDICINE_UPDATE_QUANTITY, payload: medicine.quantity })
        dispatch({ type: MEDICINE_UPDATE_COMPANY, payload: medicine.company })
        dispatch({ type: MEDICINE_UPDATE_GROUP, payload: medicine.group })
        dispatch({ type: MEDICINE_UPDATE_PRICE, payload: medicine.price })
        dispatch({ type: MEDICINE_UPDATE_DATE, payload: medicine.date })
    }

    // medicine update
    const medicineUpdate = (item_id) => {
        axios.put(`${apiBaseUrl}/medicine-update/${item_id}`, {
            _id,
            id2,
            name,
            quantity: parseInt(quantity),
            company,
            group,
            price: parseInt(price),
            date
        }).then(res => {
            // add to redux & localStorage
            dispatch({ type: BUY_MEDICINE, payload: res.data.buyMedicine })
            localStorage.setItem('buyMedicine', JSON.stringify(res.data.buyMedicine))
        }).catch(error => {
            console.log(error.response);
        })
    }


    // medicine search filter
    useEffect(() => {
        const filterVal = buyMedicine.filter(medicine => {
            if (searchMedicine === '') {
                return medicine
            } else if (
                medicine.name.toLowerCase().includes(searchMedicine.toLowerCase()) ||
                medicine.group.toLowerCase().includes(searchMedicine.toLowerCase()) ||
                medicine.company.toLowerCase().includes(searchMedicine.toLowerCase()) ||
                medicine.date.toLowerCase().includes(searchMedicine.toLowerCase())
            ) {
                return medicine
            }
        })

        setOutputMedicine(filterVal)
    }, [searchMedicine, buyMedicine])

    // redirect to login page
    useEffect(() => {
        if (!isAuthenticated) {
            navigate('/login')
        }
    }, [isAuthenticated, navigate])

    return (
        <>
            <div className="container-fluid py-4">
                {/* medicine overview */}
                <div className="row mb-4 mb-sm-0 d-flex align-items-center">
                    <div className="col-md-6">
                        <Button btnClass="btn bg-gradient-info animate__animated animate__fadeInBottomRight animate__slow" type="button" data-bs-toggle="modal" data-bs-target="#addMedicine">
                            <i className="fas fa-plus me-2"></i>
                            Add Item
                        </Button>
                        <MedicineAddModal />
                    </div>
                    <div className="col-md-6 animate__animated animate__fadeInBottomLeft animate__slow">
                        <OverView overviewHeader="Medicine Cost & Details" childrenDivClass="d-flex flex-row align-items-center overflow-auto">
                            <OverviewRow
                                title="Total Item"
                                titleColor="text-info text-gradient"
                                iconClass="fas fa-archive text-danger text-gradient"
                                quantity={`${totalMedicineItem} item`}
                                unitClass="text-secondary"
                            />

                            <OverviewRow
                                title="Total Cost"
                                titleColor="text-info text-gradient"
                                iconClass="fab fa-buffer text-danger text-gradient"
                                quantity={`${totalMedicinePrice} bdt`}
                                unitClass="text-secondary"
                            />
                        </OverView>
                    </div>
                </div>


                {/* table header */}
                <InfoTableHeader
                    header="Medicine Information"
                    col1="Medicine Name & Group"
                    col2="Company"
                    col3="Quantity"
                    col4="per pcs price"
                    col5="Date"
                    col6="Total Price"
                    onChange={(e) => setSearchMedicine(e.target.value)}
                >
                    {outputMedicine.map(medicine => {
                        return (
                            <>
                                {/* table row */}
                                <InfoTableRow
                                    img={medicineImg}
                                    col1={medicine.name}
                                    col1_2={medicine.group}
                                    col2={medicine.company}
                                    col3={`${medicine.quantity} pcs`}
                                    col4={`${medicine.price} bdt`}
                                    col5={medicine.date}
                                    col6={`${medicine.price * medicine.quantity} bdt`}
                                    col2_color="bg-gradient-info"
                                    col3_color="bg-gradient-danger"
                                    col4_color="bg-gradient-info"
                                    col5_color="bg-gradient-danger"
                                    col6_color="bg-gradient-info"
                                    modalId={medicine.id2}
                                    setUpdateInputValue={() => setUpdateInputValue(medicine)}
                                    deleteProduct={() => deleteMedicine(medicine._id)}
                                >

                                    {/* Feed Info update Modal */}
                                    <MedicineUpdateModal
                                        modalId={medicine.id2}
                                        medicineUpdateFunc={() => medicineUpdate(medicine.id2)}
                                    />

                                </InfoTableRow>
                            </>
                        )
                    })}
                </InfoTableHeader>
            </div>
        </>
    )
}

export default MedicineManagement
