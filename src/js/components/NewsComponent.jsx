import "../../scss/components/newscomp.scss";
import { convertDateFormat } from "./utils";

export default function NewsComponent({data}) {
    return (
        <div className="newsComp">
            <div
                className="newsCompImage"
                style={{
                    backgroundImage: `url(${data?.urlToImage})`
                }}
            ></div>
            <div className="newsCompContent">
                <span className="newsCompContentTopic">TOPIC</span>
                <h1 className="newsCompContentTile">{data?.title}</h1>
                <span className="newsCompContentDate">{convertDateFormat(data?.publishedAt)}</span>
                <a 
                    href={data?.url}
                    className="newsCompContentButton"
                    target="_blank"
                >Read more</a>
            </div>
        </div>
    )
}