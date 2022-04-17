import React, { memo } from 'react'
import { useSelector } from "react-redux"

const FeedStatus = () => {

    // redux
    const { buyFeed, finishFeed } = useSelector(state => state.loginReducer)

    // total feed bag
    const feedBagCountArr = buyFeed.map(feed => {
        return feed.bag
    })
    const TotalFeedBag = feedBagCountArr.reduce((pre, curr) => pre + curr, 0)

    // total Finish Feed
    const finishFeedArr = finishFeed.map(feed => {
        return feed.bag
    })
    const totalFinishFeed = finishFeedArr.reduce((pre, curr) => pre + curr, 0)


    return (
        <>
            <h6 className="text-sm mb-0 text-uppercase font-weight-bolder">
                <span className={`badge badge-sm bg-gradient-info animate__animated animate__backInDown animate__slow`}>{`Total Feed ${TotalFeedBag}`}</span>
            </h6>
            <h6 className="text-sm mb-0 text-uppercase font-weight-bolder mt-2">
                <span className={`badge badge-sm bg-gradient-danger animate__animated animate__backInLeft animate__slow`}>{`Finish Feed ${totalFinishFeed}`}</span>
            </h6>
            <h6 className="text-sm mb-0 text-uppercase font-weight-bolder mt-2">
                <span className={`badge badge-sm bg-gradient-warning animate__animated animate__backInUp animate__slow`}>{`Available Feed ${TotalFeedBag - totalFinishFeed}`}</span>
            </h6>
        </>
    )
}

export default memo(FeedStatus)
