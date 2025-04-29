import React from 'react'
import ProductReview from './ProductReview'

function ProductInformation() {
    return (
        <div className='px-4 md:px-[62px]'>
            <h3 className='text-[#ff6d1f] text-2xl font-bold mb-4'>Product Information</h3>
            <div className="flex flex-wrap justify-between items-center -mx-3">
                <div className="w-full sm:w-6/12 px-3">
                    <div className="border-2 p-3">
                        <h3 className='text-2xl font-bold mb-3'>Product Description</h3>
                        <hr />
                        <p className='mt-3'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis iusto possimus quia ducimus corrupti qui provident! Ducimus doloremque, autem quisquam tempore placeat labore error voluptas aliquid quas nulla corporis debitis animi voluptatibus architecto, optio esse, mollitia cumque. Ullam exercitationem aspernatur soluta natus hic. Animi, tempora ipsum vel aspernatur sit perferendis itaque corrupti repellat rerum velit autem nobis eligendi! Voluptatibus consectetur, veritatis quibusdam at voluptatum repellat aspernatur aliquam deleniti corrupti, sint facilis facere quaerat quam ea id cum. Deserunt accusantium ullam reiciendis quasi error quos iste aut numquam voluptatibus odit! Libero deserunt ipsa, vel alias mollitia nesciunt ipsum beatae incidunt expedita.</p>
                    </div>
                </div>
                <div className="w-full sm:w-6/12 px-3 mt-6 sm:mt-0">
                    <div className="border-2 p-3">
                        <h3 className='text-2xl font-bold mb-3'>Additional Information</h3>
                        <hr />
                        <p className='mt-3'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis iusto possimus quia ducimus corrupti qui provident! Ducimus doloremque, autem quisquam tempore placeat labore error voluptas aliquid quas nulla corporis debitis animi voluptatibus architecto, optio esse, mollitia cumque. Ullam exercitationem aspernatur soluta natus hic. Animi, tempora ipsum vel aspernatur sit perferendis itaque corrupti repellat rerum velit autem nobis eligendi! Voluptatibus consectetur, veritatis quibusdam at voluptatum repellat aspernatur aliquam deleniti corrupti, sint facilis facere quaerat quam ea id cum. Deserunt accusantium ullam reiciendis quasi error quos iste aut numquam voluptatibus odit! Libero deserunt ipsa, vel alias mollitia nesciunt ipsum beatae incidunt expedita.</p>
                    </div>
                </div>
                <div className="w-full px-3 mt-6">
                    <div className="border-2 p-3">
                        <ProductReview />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductInformation