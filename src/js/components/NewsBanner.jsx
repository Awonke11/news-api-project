import "../../scss/components/banner.scss";
import { useEffect, useState } from "react";
import { convertDateFormat } from "./utils";
import { ThreeDots } from "react-loader-spinner";

export default function NewsBanner({topic}) {
    const [showBanner, setShowBanner] = useState(false);
    const [bannerData, setBannerData] = useState({})
    
    useEffect(() => {
        setShowBanner(false)
        const fetchHeadline = async () => {
            try {
                const apiKey = import.meta.env.VITE_REACT_APP_API_KEY;
                const getHeadline = await fetch(`https://newsapi.org/v2/everything?q=${topic}&apiKey=${apiKey}&pageSize=1&sortBy=popularity`);
                const returnedData = await getHeadline.json()
                setBannerData(returnedData?.articles[0])
                setShowBanner(true)
            } catch (e) {
                setShowBanner(false)
            }
        }

        fetchHeadline()
    }, [topic])

    return (
        <>
            {
                showBanner ?
                <section className="banner">
                    <div
                        style={{
                            backgroundImage: `url(${bannerData?.urlToImage})`
                        }}
                        className="bannerImage"
                    ></div>
                    <div className="bannerContent">
                        <div className="bannerContentInfo">
                            <span className="bannerContentInfoText">TOPIC</span>
                            <h1 className="bannerContentInfoTitle">{bannerData?.title}</h1>
                            <p className="bannerContentInfoDescription">{bannerData?.description}</p>
                            <a
                                href={bannerData?.url}
                                className="bannerContentInfoButton"
                            >Read more</a>
                        </div>
                        <span className="bannerContentDate">{convertDateFormat(bannerData?.publishedAt)}</span>
                    </div>
                </section> :
                <section className="bannerLoader">
                    <div className="bannerLoaderImage"></div>
                    <div className="bannerLoaderDisplay">
                    <ThreeDots 
                        height="50" 
                        width="50" 
                        radius="5"
                        color="#000000"
                        visible={true}
                    />
                    </div>
                    <div className="bannerLoaderText">Get your lastest news headlines from the best news website. Follows us on every platform to stay up to date with the current trends and news updates.S</div>
                    <span className="bannerLoaderButton">Read more</span>
                </section>
            }
        
        </>
    )
}