import { useSelector } from "react-redux";

const GalleryItem = ({ item }) => {
    const direction = useSelector((state) => state.direction);

    return (
        <div className="grid gap-4">
            <div className="relative">
                <img
                    className="h-full max-w-full rounded-lg"
                    src={item.cover}
                    alt=""
                />
                <div className="flex flex-col justify-between p-2 py-8 rounded-lg hover-resume-card">
                    <div className="">
                        <p className="text-white animate-slide-right" style={{ direction }}>
                            {item.desc}
                        </p>
                    </div>
                    <div style={{ direction }} className="relative w-full">
                        <div className="flex gap-4 animate-slide-left center">
                            <button className="github center">
                                github
                            </button>
                            <button className="github center">
                                github
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GalleryItem;
