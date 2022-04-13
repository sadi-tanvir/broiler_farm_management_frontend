import React from 'react';
import OverView from '../../re-usable-component/OverView'
import OverviewRow from "../../re-usable-component/OverViewRow"


const OverviewFeedFinish = ({displayState,finishFeed,totalFinishFeed,totalGrowerFinish,totalStarterFinish }) => {
    return (
        <>
            <div className={`col-md-4 ${displayState}`}>
                <OverView overviewHeader="Finished Feed Summary">
                    {!finishFeed ? null :
                        <>
                            <OverviewRow
                                title="Total Feed Finished"
                                titleColor="text-info text-gradient"
                                iconClass="fas fa-dove text-danger text-gradient"
                                quantity={`${totalFinishFeed} Bag`}
                                unitClass="text-secondry"
                            />
                            <OverviewRow
                                title="Grower Feed Finished"
                                titleColor="text-info text-gradient"
                                iconClass="ni ni-cart text-danger text-gradient"
                                quantity={`${totalGrowerFinish} Bag`}
                                unitClass="text-secondry"
                            />

                            <OverviewRow
                                title="Starter Feed Finished"
                                titleColor="text-info text-gradient"
                                iconClass="fas fa-stethoscope text-danger text-gradient"
                                quantity={`${totalStarterFinish} Bag`}
                                unitClass="text-secondry"
                            />
                        </>
                    }
                </OverView>
            </div>
        </>
    );
};

export default OverviewFeedFinish;
