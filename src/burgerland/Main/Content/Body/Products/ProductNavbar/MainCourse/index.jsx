import react from "react"

const MainCourses = () => {


    return (
        {
            products.map((product, index) => (
                <>
                    <div className="flex bg-white flex-col justify-start shadow-md rounded-2xl  max-w-[190px] h-[280px] overflow-hidden mb-2">
                        <div className="products-container">
                            <div key={index} className="product-card">
                                <div className="flex flex-col items-center justify-center p-6">
                                    <h1 className="capitalize font-bold">{product.name}</h1>
                                    <span className="font-thin">{product.weight}</span>
                                    <p className="text-xs font-thin text-center">
                                        Folan folan, Felan felan, Filan filan
                                    </p>
                                </div>
                                <div className="flex items-center justify-between px-6 gap-5">
                                    <div className="flex justify-center items-center">
                                        <span className="text-[20px]">${product.price}</span>
                                    </div>
                                    <div className="flex justify-center items-center border rounded">
                                        <span className="p-1 cursor-pointer">
                                            <IoMdEye size={20} />
                                        </span>
                                    </div>
                                    <div className="flex justify-center items-center border rounded">
                                        <span className="p-1 cursor-pointer">
                                            <IoIosSettings size={20} />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )).filter((product) => (
                <>
                    <div className="flex bg-white flex-col justify-start shadow-md rounded-2xl  max-w-[190px] h-[280px] overflow-hidden mb-2">
                        <div className="products-container">
                            <div key={index} className="product-card">
                                <div className="flex flex-col items-center justify-center p-6">
                                    <h1 className="capitalize font-bold">{product.name}</h1>
                                    <span className="font-thin">{product.weight}</span>
                                    <p className="text-xs font-thin text-center">
                                        Folan folan, Felan felan, Filan filan
                                    </p>
                                </div>
                                <div className="flex items-center justify-between px-6 gap-5">
                                    <div className="flex justify-center items-center">
                                        <span className="text-[20px]">${product.price}</span>
                                    </div>
                                    <div className="flex justify-center items-center border rounded">
                                        <span className="p-1 cursor-pointer">
                                            <IoMdEye size={20} />
                                        </span>
                                    </div>
                                    <div className="flex justify-center items-center border rounded">
                                        <span className="p-1 cursor-pointer">
                                            <IoIosSettings size={20} />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            ))
        }
    )
}

export default MainCourses