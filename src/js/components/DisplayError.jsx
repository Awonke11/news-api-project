import { MdError } from "react-icons/md";
import "../../scss/components/error.scss";

export default function DisplayError({message}) {
    return (
        <section className="error">
            <h1 className="errorTitle">Oops!</h1>
            <div className="errorContent">
                <MdError className="errorContentIcon" /> 
                <span className="errorContentText">{message}</span>
            </div>
        </section>
    )
}