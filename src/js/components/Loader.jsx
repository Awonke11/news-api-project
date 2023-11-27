import { ThreeDots } from "react-loader-spinner";
import "../../scss/components/loader.scss";

export default function Loader() {
    return (
        <div className="loader">
            <ThreeDots 
                height="60" 
                width="60" 
                radius="5"
                color="#000000"
                visible={true}
            />
        </div>
    )
}