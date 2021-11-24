import React, { memo, useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom"
import InfoTableHeader from '../../re-usable-component/InfoTableHeader'
import classes from "../../../styles/Color.module.css"
import InfoTableRow from "../../re-usable-component/InfoTableRow"
import feedImg from "../../image/Feed.jpg"
import FeedUpdateModal from "./FeedBuyUpdateModal"
import Button from '../../re-usable-component/Button'
import FeedBuyAddModal from './FeedBuyAddModal'
import { useSelector, useDispatch } from "react-redux"
import OverView from '../../re-usable-component/OverView'
import OverviewRow from "../../re-usable-component/OverViewRow"
import { apiBaseUrl } from "../../Utils/constant"
import axios from 'axios'
import Swal from "sweetalert2"
import {
    BUY_FEED,
    FEED_UPDATE_ID,
    FEED_UPDATE_ID_2,
    FEED_UPDATE_NAME,
    FEED_UPDATE_CATEGORY,
    FEED_UPDATE_BAG,
    FEED_UPDATE_PRICE,
    FEED_UPDATE_DATE
} from "../../../redux/actions/types"


const FeedBuyManagement = () => {
    // redux
    const dispatch = useDispatch()
    const { buyFeed, isAuthenticated } = useSelector(state => state.loginReducer)
    const { _id, id2, name, category, bag, price, date } = useSelector(state => state.feedReducer)

    // state
    const [searchFeed, setSearchFeed] = useState("")
    const [feedOutput, setFeedOutput] = useState([])

    // history
    const navigate = useNavigate()

    // total feed bag
    const feedBagCountArr = buyFeed.map(feed => {
        return feed.bag
    })
    const TotalFeedBag = feedBagCountArr.reduce((pre, curr) => pre + curr, 0)

    // total feed amount 
    const feedAmountArray = buyFeed.map(feed => {
        return feed.price * feed.bag
    })
    const TotalFeedAmount = feedAmountArray.reduce((pre, curr) => pre + curr, 0)


    // feed item delete function
    const deleteProduct = (id) => {
        Swal.fire({ title: 'Are you sure?', icon: 'warning', showCancelButton: true, confirmButtonColor: '#3085d6', cancelButtonColor: '#d33', confirmButtonText: 'Yes, delete it!' }).then((result) => {
            if (result.isConfirmed) {
                // delete function
                axios.put(`${apiBaseUrl}/feed-delete/${id}`)
                    .then(res => {
                        // add to redux & localStorage
                        dispatch({ type: BUY_FEED, payload: res.data.buyFeed })
                        localStorage.setItem('buyFeed', JSON.stringify(res.data.buyFeed))
                    }).catch(error => {
                        console.log(error.response);
                    })
            }
        })

    }



    // set update input value
    const setUpdateInputValue = (feed) => {
        dispatch({ type: FEED_UPDATE_ID, payload: feed._id })
        dispatch({ type: FEED_UPDATE_ID_2, payload: feed.id2 })
        dispatch({ type: FEED_UPDATE_NAME, payload: feed.name })
        dispatch({ type: FEED_UPDATE_CATEGORY, payload: feed.category })
        dispatch({ type: FEED_UPDATE_BAG, payload: feed.bag })
        dispatch({ type: FEED_UPDATE_PRICE, payload: feed.price })
        dispatch({ type: FEED_UPDATE_DATE, payload: feed.date })
    }

    // feed item update
    const feedUpdate = (item_id) => {
        axios.put(`${apiBaseUrl}/feed-update/${item_id}`, {
            _id,
            id2,
            name,
            category,
            bag: parseInt(bag),
            price: parseInt(price),
            date
        }).then(res => {
            // add to redux & localStorage
            dispatch({ type: BUY_FEED, payload: res.data.buyFeed })
            localStorage.setItem('buyFeed', JSON.stringify(res.data.buyFeed))
        }).catch(error => {
            console.log(error.response);
        })
    }


    // feed search filter
    useEffect(() => {
        const filterVal = buyFeed.filter(feed => {
            if (searchFeed === '') {
                return feed
            } else if (
                feed.name.toLowerCase().includes(searchFeed.toLowerCase()) ||
                feed.category.toLowerCase().includes(searchFeed.toLowerCase()) ||
                feed.bag.toString().toLowerCase().includes(searchFeed.toLowerCase()) ||
                feed.price.toString().includes(searchFeed.toLowerCase()) ||
                feed.date.toLowerCase().includes(searchFeed.toLowerCase())
            ) {
                return feed
            }
        })

        setFeedOutput(filterVal)
    }, [searchFeed, buyFeed])

    // redirect to login page
    useEffect(() => {
        if (!isAuthenticated) {
            navigate('/login')
        }
    }, [isAuthenticated, navigate])

    return (
        <>
            <div className="container-fluid py-4">
                <div className="row mb-4 mb-sm-0">
                    <div className="col-md-6">
                        <Button btnClass="btn bg-gradient-info" type="button" data-bs-toggle="modal" data-bs-target="#addFeed">
                            <i className="fas fa-plus me-2"></i>
                            Add Item
                        </Button>
                        <FeedBuyAddModal />
                    </div>
                    <div className="col-md-6">
                        <OverView overviewHeader="Feed Cost & Details" childrenDivClass="d-flex flex-row align-items-center overflow-auto">
                            <OverviewRow
                                title="Total Feed"
                                titleColor="text-info text-gradient"
                                iconClass="fas fa-archive text-danger text-gradient"
                                quantity={`${TotalFeedBag} Bag`}
                            />

                            <OverviewRow
                                title="Total Cost"
                                titleColor="text-info text-gradient"
                                iconClass="fab fa-buffer text-danger text-gradient"
                                quantity={`${TotalFeedAmount} bdt`}
                            />
                        </OverView>
                    </div>
                </div>
                {/* table header */}
                <InfoTableHeader
                    header="Feed Information"
                    col1="Name"
                    col2="Category"
                    col3="Quantity"
                    col4="Per Bag Price"
                    col5="Date"
                    col6="Total Price"
                    onChange={(e) => setSearchFeed(e.target.value)}
                >

                    {/* table row */}
                    {feedOutput.map((feed) => {
                        return (
                            <>
                                <InfoTableRow
                                    img={feedImg}
                                    col1={feed.name}
                                    col2={feed.category}
                                    col3={`${feed.bag} bag`}
                                    col4={`${feed.price} bdt`}
                                    col5={feed.date}
                                    col6={`${feed.bag * feed.price} bdt`}
                                    col2_color="bg-gradient-info"
                                    col3_color="bg-gradient-danger"
                                    col4_color="bg-gradient-info"
                                    col5_color="bg-gradient-danger"
                                    col6_color="bg-gradient-info"
                                    modalId={feed.id2}
                                    setUpdateInputValue={() => setUpdateInputValue(feed)}
                                    deleteProduct={() => deleteProduct(feed._id)}
                                >

                                    {/* Feed Info update Modal */}
                                    <FeedUpdateModal
                                        modalId={feed.id2}
                                        feedUpdateFunc={() => feedUpdate(feed.id2)}
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

export default memo(FeedBuyManagement)
