import TsNotice from "../../common/components/controls/TsNotice.jsx";
import TsVideo from "../../common/components/controls/TsVideo.jsx";
import {getTranslations} from "../../common/utils/translations.js";

function Dashboard() {
    const tsteamImage = tsteam_settings.assets_path;
    const translations = getTranslations();
    return (
        <div className="min-h-fit flex">
            {/* Main Content */}
            <div className="flex-1">
                <TsNotice
                    heading={'Unlock Ts Team Pro with an Exclusive Discount!'}
                    description={'Take your experience to the next level with Ts Team Pro Version. For a limited time, we’re offering an exclusive early bird discount—don’t miss out!'}
                    label={translations.grabYourDiscount}
                    ctalink={'https://themespell.com/ts-team-member/'}
                />
                <div className="mt-8 tsteam__global--border w-full">
                    <TsVideo
                        light={`${tsteamImage}/img/tsteam_dashboard_video_cover.jpg`}
                        width="1160px"
                        height="650px"
                        url='https://www.youtube.com/watch?v=DCMKZ5AWrPc'
                    />
                </div>


                <div className="flex justify-between items-center gap-6 mt-8">
                    <div className="bg-white p-12 pt-8 tsteam__global--border h-96">
                        <div>
                            <h2 className="text-3xl font-bold">Enhance Your TS Team Member Plugin</h2>
                            <p className="text-base mt-4">Maximize the potential of your TS Team Member WordPress plugin with our curated resources.</p>
                        </div>

                        <div className="grid grid-cols-3 gap-6 mt-4">
                            <div className="tsteam__dasboard--card tsteam__global--border">
                                <h4 className="text-xl">{translations.documentations}</h4>
                                <p className="mt-4 mb-4">Dive into detailed guides and tutorials to set up and customize your TS Team Member plugin.</p>
                                <a href="https://themespell.com/docs/">Check Here</a>
                            </div>

                            <div className="tsteam__dasboard--card tsteam__global--border">
                                <h4 className="text-xl">{translations.helpAndSupport}</h4>
                                <p className="mt-4 mb-4">Need assistance? Our dedicated support team is here to help you troubleshoot issues.</p>
                                <a href="https://wordpress.org/support/plugin/ts-team-member/">Check Here</a>
                            </div>

                            <div className="tsteam__dasboard--card tsteam__global--border">
                                <h4 className="text-xl">{translations.videoGuide}</h4>
                                <p className="mt-4 mb-4">Watch easy-to-follow video tutorials to master the TS Team Member plugin.</p>
                                <a href="https://www.youtube.com/watch?v=DCMKZ5AWrPc&list=PLPdGHlpHY56CjRlUbd6vwtF45HC3vl5-D">Check Here</a>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white h-96 tsteam__global--border p-6 flex flex-col justify-center items-center">
                        <img src={`${tsteamImage}/img/tsteam_pro_badge.svg`} className=""/>
                        <h2 className="mt-4 text-xl">{translations.upgradeToPro}</h2>
                        <p className="mt-4 mb-4 text-center">Exciting new features and updates are on the way! Stay tuned for
                            enhancements that will make your TS Team Member plugin even more powerful.</p>
                        <a className="tsteam-button btn btn-primary" href="https://themespell.com/ts-product/ts-team-member/">Grab Discount</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
