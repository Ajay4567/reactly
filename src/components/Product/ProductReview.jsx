import React, { useState } from 'react'

function ProductReview() {
    const [reviewPopup, setReviewPopup] = useState(false)
    const handleReviewPopup = () => {
        setReviewPopup((prev) => !prev);
    };
    return (
        <>
            <h3 className='text-2xl font-bold mb-3'>Customer Reviews</h3>
            <div className="md:flex justify-between items-center mb-3">
                <div className="sm:flex items-center gap-4">
                    <div className="flex items-center gap-2">
                        <img className='w-5 h-5' src="/images/star-image.png" alt="star_img" />
                        <img className='w-5 h-5' src="/images/star-image.png" alt="star_img" />
                        <img className='w-5 h-5' src="/images/star-image.png" alt="star_img" />
                        <img className='w-5 h-5' src="/images/star-image.png" alt="star_img" />
                        <img className='w-5 h-5' src="/images/star-image.png" alt="star_img" />
                    </div>
                    <p>Be the first to write a review</p>
                </div>
                <div className="flex gap-3 mt-4 md:mt-0">
                    <button onClick={handleReviewPopup} className='px-2 sm:px-3 py-1 border-2 border-black'>Write a review</button>
                    <button className='px-2 sm:px-3 py-1 border-2 border-black'>Ask a question</button>
                </div>
            </div>
            <hr />
            <div className={`shadow-2xl p-3 mt-3 ${reviewPopup ? "flex flex-wrap -mx-3" : "hidden"}`}>
                <div className="w-full md:w-6/12 px-3">
                    <img className='w-full h-full' src="/images/image1.jpg" alt="banner" />
                </div>
                <div className="w-full md:w-6/12 px-3 mt-4 md:mt-0">
                    <form>
                        <label className='flex flex-col font-semibold' htmlFor="name">
                            Name
                            <input required className='border-2 p-2 rounded-md outline-none mt-2' id='name' type="text" placeholder='Enter your name (public)' />
                        </label>
                        <label className='flex flex-col font-semibold mt-3' htmlFor="email">
                            Email
                            <input required className='border-2 p-2 rounded-md outline-none mt-2' id='email' type="email" placeholder='Enter your email (private)' />
                        </label>
                        <p className='font-semibold mt-3'>Rating</p>
                        <div className="flex items-center gap-3 mt-2">
                            <img className='w-5 h-5' src="/images/star-image.png" alt="star_img" />
                            <img className='w-5 h-5' src="/images/star-image.png" alt="star_img" />
                            <img className='w-5 h-5' src="/images/star-image.png" alt="star_img" />
                            <img className='w-5 h-5' src="/images/star-image.png" alt="star_img" />
                            <img className='w-5 h-5' src="/images/star-image.png" alt="star_img" />
                        </div>
                        <label className='flex flex-col font-semibold mt-3' htmlFor="review_title">
                            Review Title
                            <input required className='border-2 p-2 rounded-md outline-none mt-2' id='review_title' type="text" placeholder='Give your review title' />
                        </label>
                        <label className='flex flex-col font-semibold mt-3' htmlFor="review">
                            Review
                            <textarea className='border-2 p-2 rounded-md outline-none mt-2' id="review" placeholder='Write a comments here'></textarea>
                        </label>
                        <p className='mt-3'>How we use your data: We’ll only contact you about the review you left, and only if necessary. By submitting your review, you agree to Judge.me’s <span className='underline'>terms</span>, <span className='underline'>privacy</span> and <span className='underline'>content</span> policies.</p>
                        <button type='submit' className='bg-[#ff6d1f] text-white text-xl font-medium px-4 py-2 rounded-md mt-4'>Submit Review</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default ProductReview