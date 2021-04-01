import React, { useRef } from "react"
import { useEffect, useState } from "react"
import { useParams, useHistory } from "react-router-dom"
import axios from "../utils/axios"
import { listingsUrl } from "../utils/utils"
import { Bids } from "./bids"

const Comments = () => (
	<section className='comment'>
		<p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
	</section>
)

interface Listing {
	title: string
	price: number
	description: string
	createdAt: string
}

export const Detail: React.FC = () => {
	let params = useParams()
	const { push } = useHistory()
	const [listing, setListing] = useState<Listing | null>(null)

	const commentRef = useRef<HTMLInputElement>(null)

	let { id }: any = params
	useEffect(() => {
		const apiUrl = `${listingsUrl}/${id}`
		axios
			.get(apiUrl)
			.then(response => {
				setListing(response.data.data)
			})
			.catch(err => {
				alert(err.message)
			})
	}, [id])

	//add comment form submit handler
	const onFormSubmitAddCommentHandler = (e: React.SyntheticEvent) => {
		e.preventDefault()

		const newComment = commentRef?.current?.value

		console.log({ newComment })
	}

	return (
		<div className='detail'>
			<h1>Lisitng Detail</h1>{" "}
			<section className='right-side-btn'>
				<button onClick={() => push(`/addbid/${id}`)}>Add New Bid</button>
			</section>
			<section className='listing-detail'>
				<h2>Title: {listing?.title}</h2>
				<p>Description: {listing?.description}</p>
				<h6>Price: {listing?.price}</h6>
			</section>
			<Bids />
			<h2>Comments</h2>
			<section className='comments'>
				{Array(5)
					.fill(0)
					.map(_ => (
						<Comments />
					))}
			</section>
			<form onSubmit={onFormSubmitAddCommentHandler}>
				<section className='add-comment'>
					<input type='text' required ref={commentRef} />
					<button type='submit'>Add</button>
				</section>
			</form>
		</div>
	)
}
