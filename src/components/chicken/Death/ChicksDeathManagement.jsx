import React, { memo, useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom"
import Button from "../../re-usable-component/Button"
import OverView from '../../re-usable-component/OverView'
import OverviewRow from "../../re-usable-component/OverViewRow"
import ChiksDeathAddModal from "./ChiksDeathAddModal"
import InfoTableHeader from "../../re-usable-component/InfoTableHeader"
import InfoTableRow from "../../re-usable-component/InfoTableRow"
import chicksImg from "../../image/chicks.jpg"
import ChicksDeathUpdateModal from "./ChicksDeathUpdateModal"
import { useSelector, useDispatch } from "react-redux"
import { apiBaseUrl } from "../../Utils/constant"
import axios from 'axios'
import Swal from "sweetalert2"
import {
    DEATH_CHICKENS,
    CHICKS_DEATH_UPDATE_ID,
    CHICKS_DEATH_UPDATE_ID_2,
    CHICKS_DEATH_UPDATE_REASON,
    CHICKS_DEATH_UPDATE_DATE,
    CHICKS_DEATH_UPDATE_TIME,
    CHICKS_DEATH_UPDATE_DEATH,
} from "../../../redux/actions/types"



const FeedFinishManagement = () => {
    // redux
    const dispatch = useDispatch()
    const { deathChickens, isAuthenticated } = useSelector(state => state.loginReducer)
    const { _id, id2, reason, date, time, death } = useSelector(state => state.chicksDeathReducer)

    // state
    const [search, setSearch] = useState("")
    const [output, setOutput] = useState([])


    // history
    const navigate = useNavigate()


    // total death of Chicks
    const totalDeathArr = deathChickens.map(chicks => {
        return chicks.death
    })
    const totalDeath = totalDeathArr.reduce((pre, curr) => pre + curr, 0)

    // hit stroke death
    const hitStroke = deathChickens.filter(chicks => {
        return chicks.reason === "HIT STROKE"
    })
    const hitStrokeArr = hitStroke.map(chicks => {
        return chicks.death
    })
    const totalHitStroke = hitStrokeArr.reduce((pre, curr) => pre + curr, 0)

    // Sick death
    const sick = deathChickens.filter(chicks => {
        return chicks.reason === "SICK"
    })
    const sickArr = sick.map(chicks => {
        return chicks.death
    })
    const totalSick = sickArr.reduce((pre, curr) => pre + curr, 0)



    // set update input value
    const setUpdateInputValue = (death) => {
        dispatch({ type: CHICKS_DEATH_UPDATE_ID, payload: death._id })
        dispatch({ type: CHICKS_DEATH_UPDATE_ID_2, payload: death.id2 })
        dispatch({ type: CHICKS_DEATH_UPDATE_REASON, payload: death.reason })
        dispatch({ type: CHICKS_DEATH_UPDATE_DATE, payload: death.date })
        dispatch({ type: CHICKS_DEATH_UPDATE_TIME, payload: death.time })
        dispatch({ type: CHICKS_DEATH_UPDATE_DEATH, payload: death.death })
    }


    // delete chicks
    const deleteProduct = (itemId) => {
        console.log(itemId);
        Swal.fire({ title: 'Are you sure?', icon: 'warning', showCancelButton: true, confirmButtonColor: '#3085d6', cancelButtonColor: '#d33', confirmButtonText: 'Yes, delete it!' }).then((result) => {
            if (result.isConfirmed) {
                // delete function
                axios.put(`${apiBaseUrl}/chicks-death-delete/${itemId}`)
                    .then(res => {
                        // add to redux & localStorage
                        dispatch({ type: DEATH_CHICKENS, payload: res.data.deathChicks })
                        localStorage.setItem('deathChickens', JSON.stringify(res.data.deathChicks))
                    }).catch(error => {
                        console.log(error.response);
                    })
            }
        })
    }


    // chicks death update
    const chicksDeathUpdate = (itemId) => {
        axios.put(`${apiBaseUrl}/chicks-death-update/${itemId}`, {
            _id,
            id2,
            reason,
            date,
            time,
            death: parseInt(death)
        }).then(res => {
            // add to redux & localStorage
            dispatch({ type: DEATH_CHICKENS, payload: res.data.deathChicks })
            localStorage.setItem('deathChickens', JSON.stringify(res.data.deathChicks))
        })
    }


    // search filter death chicks
    useEffect(() => {
        const filterVal = deathChickens.filter(val => {
            if (search === '') {
                return val
            } else if (
                val.reason.toLowerCase().includes(search.toLowerCase()) ||
                val.date.toLowerCase().includes(search.toLowerCase())
            ) {
                return val
            }
        })

        setOutput(filterVal)
    }, [search, deathChickens])


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
                    <div className="col-md-8">
                        <div>
                            <Button btnClass="btn bg-gradient-info" type="button" data-bs-toggle="modal" data-bs-target="#addChicks">
                                <i className="fas fa-plus me-2"></i>
                                Add Item
                            </Button>
                            <ChiksDeathAddModal />
                        </div>
                        {/* table header */}
                        <InfoTableHeader
                            header="chicks Death Management"
                            col1="Reason"
                            col4="Date"
                            col5="Time"
                            col6="Death"
                            onChange={(e) => setSearch(e.target.value)}
                        >

                            {/* table row */}
                            {output.map(death => {
                                return (
                                    <>
                                        <InfoTableRow
                                            img={chicksImg}
                                            col1={death.reason}
                                            col4={death.date}
                                            col5={death.time}
                                            col6={death.death}
                                            col4_color="bg-gradient-info"
                                            col5_color="bg-gradient-danger"
                                            col6_color="bg-gradient-info"
                                            modalId={death.id2}
                                            setUpdateInputValue={() => setUpdateInputValue(death)}
                                            deleteProduct={() => deleteProduct(death._id)}
                                        >

                                            {/* Chicks Info update Modal */}
                                            <ChicksDeathUpdateModal
                                                modalId={death.id2}
                                                ChicksDeathUpdate={() => chicksDeathUpdate(death.id2)}
                                            />

                                        </InfoTableRow>
                                    </>
                                )
                            })}
                        </InfoTableHeader>
                    </div>
                    <div className="col-md-4">
                        <OverView overviewHeader="Death Summary">
                            {!deathChickens ? null :
                                <>
                                    <OverviewRow
                                        title="Total Death"
                                        titleColor="text-info text-gradient"
                                        iconClass="fas fa-dove text-danger text-gradient"
                                        quantity={`${totalDeath} chicks`}
                                        unitClass="text-secondry"
                                    />
                                    <OverviewRow
                                        title="Hit Stroke"
                                        titleColor="text-info text-gradient"
                                        iconClass="ni ni-cart text-danger text-gradient"
                                        quantity={`${totalHitStroke} chicks`}
                                        unitClass="text-secondry"
                                    />

                                    <OverviewRow
                                        title="Sick"
                                        titleColor="text-info text-gradient"
                                        iconClass="fas fa-stethoscope text-danger text-gradient"
                                        quantity={`${totalSick} chicks`}
                                        unitClass="text-secondry"
                                    />
                                </>
                            }
                        </OverView>
                    </div>
                </div>
            </div>
        </>
    )
}

export default memo(FeedFinishManagement)
