import NewsComponent from "./NewsComponent";
import { TbHourglassEmpty } from "react-icons/tb";
import "../../scss/components/news.scss";

export default function DisplayNews({newsData}) {
    return (
        <div className="news">
            {
                (newsData.length != 0) ?
                <div className="newsData">
                    {newsData.map((data, index) => {
                        return (
                            <NewsComponent 
                                key={index}
                                data={data}
                            />
                        )
                    })}
                </div> :
                <div className="newsEmpty">
                    <TbHourglassEmpty className="newsEmptyIcon" />
                    <span className="newsEmptyText">No news found</span>
                </div>
            }
        </div>
    )
}