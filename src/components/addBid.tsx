import { SyntheticEvent, useRef } from "react"

export const AddBid: React.FC = () => {
	const title = useRef<HTMLInputElement>(null)
	const description = useRef<HTMLInputElement>(null)

	const onFormHandler = (e: SyntheticEvent) => {
		e.preventDefault()
	}
	return (
		<div className='add-bid'>
			<form onSubmit={onFormHandler}>
				<h3>Add New Bid</h3>
				<input placeholder='title' ref={title} required />
				<input placeholder='description' ref={description} required />
				<button type='submit'>Add New Bid</button>
			</form>
		</div>
	)
}
