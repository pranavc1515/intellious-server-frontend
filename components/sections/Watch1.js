import Link from "next/link"
import VideoPopup from "../elements/VideoPopup"

export default function Watch1() {
    return (
        <>
            <div className="watch-version01 zindex2 position-relative">
                {/* Inline "background" image */}
                <div className="watch-bg">
                    <img
                        src="/assets/img/team/watch-bg01.png"
                        alt="Watch background"
                    />
                </div>

                <div className="container">
                    <div className="watch-content d-center">
                        {/* <VideoPopup style={3} /> */}
                    </div>
                </div>
            </div>
        </>
    );
}
