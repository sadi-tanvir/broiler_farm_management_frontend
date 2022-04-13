import React from 'react';
import OverView from '../../re-usable-component/OverView'
import OverviewRow from "../../re-usable-component/OverViewRow"

const OverviewChicksBuy = ({ displayState, buyChicken }) => {
    return (
        <>
            <div className={`col-md-4 ${displayState}`}>
                <OverView overviewHeader="Chicks Summary">
                    {!buyChicken ? null :
                        <>
                            <OverviewRow
                                title="Total Chicks"
                                titleColor="text-info text-gradient"
                                iconClass="fas fa-dove text-danger text-gradient"
                                quantity={`${buyChicken.quantity} pcs`}
                            />
                            <OverviewRow
                                title="Unit Price"
                                titleColor="text-info text-gradient"
                                iconClass="ni ni-cart text-danger text-gradient"
                                quantity={`${buyChicken.price} bdt`}
                            />

                            <OverviewRow
                                title="Total Price"
                                titleColor="text-info text-gradient"
                                iconClass="fas fa-stethoscope text-danger text-gradient"
                                quantity={`${buyChicken.price * buyChicken.quantity} bdt`}
                            />
                        </>
                    }
                </OverView>
            </div>
        </>
    );
};

export default OverviewChicksBuy;
