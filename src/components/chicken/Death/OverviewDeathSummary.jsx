import React from 'react';
import OverView from '../../re-usable-component/OverView'
import OverviewRow from "../../re-usable-component/OverViewRow"


const OverviewDeathSummary = ({ displayState, deathChickens, totalDeath, totalHitStroke, totalSick }) => {
    return (<>
        <div className={`col-md-4 ${displayState}`}>
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
    </>);
};

export default OverviewDeathSummary;
