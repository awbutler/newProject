import { useState } from "react"
import {  useDispatch } from "react-redux"
import {createRestaurant} from '../features/restaurants/restaurantSlice'

function ResaturantForm() {
    const [text, setText] = useState('')
    const [rating, setRating] = useState('')
    const [review, setReview] = useState('')

    const dispatch = useDispatch()

    const onSubmit = e => {
        e.preventDefault()

        dispatch(createRestaurant({text,rating,review}))
        setText('')
        setRating('')
        setReview('')
    }
  
    return (
    <section className="form">
        <form onSubmit={onSubmit}>
            <div className="form-group">
                <label htmlFor="text">Restaurant</label>
                <input type="text" name="text" id="text" value= {text} onChange={(e)=> setText(e.target.value)}/>
                <label htmlFor="rating">Rating</label>
                <input type="text" name="rating" id="rating" value= {rating} onChange={(e)=> setRating(e.target.value)}/>
                <label htmlFor="review">Review</label>
                <input type="text" name="review" id="review" value= {review} onChange={(e)=> setReview(e.target.value)}/>
            </div>
            <div className="form-group">
                <button className="btn btn-block" type="submit">
                    Add Restaurant
                </button>
            </div>
        </form>
    </section>
  )
}

export default ResaturantForm