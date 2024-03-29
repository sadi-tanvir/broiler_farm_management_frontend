import React, { memo, useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom"
import Button from "../../re-usable-component/Button"
import FeedFinishAddModal from "./FeedFinishAddModal"
import InfoTableHeader from "../../re-usable-component/InfoTableHeader"
import InfoTableRow from "../../re-usable-component/InfoTableRow"
import chicksImg from "../../image/chicks.jpg"
import FeedFinishUpdateModal from "./FeedFinishUpdateModal"
import { useSelector, useDispatch } from "react-redux"
import { apiBaseUrl } from "../../Utils/constant"
import axios from 'axios'
import Swal from "sweetalert2"
import {
    FINISH_FEED,
    FEED_FINISH_UPDATE_ID,
    FEED_FINISH_UPDATE_ID_2,
    FEED_FINISH_UPDATE_NAME,
    FEED_FINISH_UPDATE_CATEGORY,
    FEED_FINISH_UPDATE_BAG,
    FEED_FINISH_UPDATE_DATE
} from "../../../redux/actions/types"
import OverviewFeedFinish from "./OverviewFeedFinish"



const FeedFinishManagement = () => {
    // redux
    const dispatch = useDispatch()
    const { finishFeed, isAuthenticated } = useSelector(state => state.loginReducer)
    const { _id, id2, name, category, bag, date } = useSelector(state => state.feedFinishReducer)

    // state
    const [search, setSearch] = useState("")
    const [output, setOutput] = useState([])

    // history
    const navigate = useNavigate()

    // total Finish Feed
    const totalFinishArr = finishFeed.map(feed => {
        return feed.bag
    })
    const totalFinishFeed = totalFinishArr.reduce((pre, curr) => pre + curr, 0)

    // total Grower feed finish
    const GrowerFinishFeed = finishFeed.filter(feed => {
        return feed.category === 'GROWER'
    })
    const AllGrowerFinishArr = GrowerFinishFeed.map(feed => {
        return feed.bag
    })
    const totalGrowerFinish = AllGrowerFinishArr.reduce((pre, curr) => pre + curr, 0)

    // total Starter feed finish
    const StarterFinishFeed = finishFeed.filter(feed => {
        return feed.category === 'STARTER'
    })
    const AllStarterFinishArr = StarterFinishFeed.map(feed => {
        return feed.bag
    })
    const totalStarterFinish = AllStarterFinishArr.reduce((pre, curr) => pre + curr, 0)



    // set update input value
    const setUpdateInputValue = (feed) => {
        dispatch({ type: FEED_FINISH_UPDATE_ID, payload: feed._id })
        dispatch({ type: FEED_FINISH_UPDATE_ID_2, payload: feed.id2 })
        dispatch({ type: FEED_FINISH_UPDATE_NAME, payload: feed.name })
        dispatch({ type: FEED_FINISH_UPDATE_CATEGORY, payload: feed.category })
        dispatch({ type: FEED_FINISH_UPDATE_BAG, payload: feed.bag })
        dispatch({ type: FEED_FINISH_UPDATE_DATE, payload: feed.date })
    }


    // delete Finish Feed
    const deleteProduct = (itemId) => {
        Swal.fire({ title: 'Are you sure?', icon: 'warning', showCancelButton: true, confirmButtonColor: '#3085d6', cancelButtonColor: '#d33', confirmButtonText: 'Yes, delete it!' }).then((result) => {
            if (result.isConfirmed) {
                // delete function
                axios.put(`${apiBaseUrl}/feed-finish-delete/${itemId}`)
                    .then(res => {
                        // add to redux & localStorage
                        dispatch({ type: FINISH_FEED, payload: res.data.finishFeed })
                        localStorage.setItem('finishFeed', JSON.stringify(res.data.finishFeed))
                    }).catch(error => {
                        console.log(error.response);
                    })
            }
        })
    }


    // Finish Feed update
    const feedFinishUpdate = (itemId) => {
        axios.put(`${apiBaseUrl}/feed-finish-update/${itemId}`, {
            _id, id2, name, category, bag: parseInt(bag), date
        }).then(res => {
            // add to redux & localStorage
            dispatch({ type: FINISH_FEED, payload: res.data.finishFeed })
            localStorage.setItem('finishFeed', JSON.stringify(res.data.finishFeed))
        })
    }


    // search filter Finish Feed
    useEffect(() => {
        const filterVal = finishFeed.filter(val => {
            if (search === '') {
                return val
            } else if (
                val.name.toLowerCase().includes(search.toLowerCase()) ||
                val.category.toLowerCase().includes(search.toLowerCase()) ||
                val.bag.toString().includes(search.toLowerCase()) ||
                val.date.toLowerCase().includes(search.toLowerCase())
            ) {
                return val
            }
        })

        setOutput(filterVal)
    }, [search, finishFeed])

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
                    {/* Feed details table */}
                    <div className="col-md-8 mt-md-3">
                        <div>
                            <Button btnClass="btn bg-gradient-info animate__animated animate__backInRight animate__slow" type="button" data-bs-toggle="modal" data-bs-target="#finishFeed">
                                <i className="fas fa-plus me-2"></i>
                                Add Item
                            </Button>
                            <FeedFinishAddModal />
                        </div>
                        {/* table header */}
                        <InfoTableHeader
                            header="Finish Feed Management"
                            col1="Name"
                            col2="Category"
                            col3="Quantity"
                            col4="Date"
                            onChange={(e) => setSearch(e.target.value)}
                        >

                            {/* table row */}
                            {output.map(feed => {
                                return (
                                    <>
                                        <InfoTableRow
                                            img={chicksImg}
                                            col1={feed.name}
                                            col2={feed.category}
                                            col3={feed.bag}
                                            col4={feed.date}
                                            col2_color="bg-gradient-info"
                                            col3_color="bg-gradient-danger"
                                            col4_color="bg-gradient-info"
                                            modalId={feed.id2}
                                            setUpdateInputValue={() => setUpdateInputValue(feed)}
                                            deleteProduct={() => deleteProduct(feed._id)}
                                        >

                                            {/* Finish Feed update Modal */}
                                            <FeedFinishUpdateModal
                                                modalId={feed.id2}
                                                FeedFinishUpdate={() => feedFinishUpdate(feed.id2)}
                                            />

                                        </InfoTableRow>
                                    </>
                                )
                            })}
                        </InfoTableHeader>
                    </div>


                    {/* overview summary */}
                    <OverviewFeedFinish
                        displayState="order-first order-md-last mb-4 mb-md-0 animate__animated animate__backInDown animate__slow"
                        finishFeed={finishFeed}
                        totalFinishFeed={totalFinishFeed}
                        totalGrowerFinish={totalGrowerFinish}
                        totalStarterFinish={totalStarterFinish}
                    />
                </div>
            </div>
        </>
    )
}

export default memo(FeedFinishManagement)
