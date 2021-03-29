//react router dom
import { useHistory } from "react-router-dom"

//lstings card jsx
const ListingCard = ({
	pushToDetailRoute,
}: {
	pushToDetailRoute: () => void
}): JSX.Element => (
	<section className='listing-card' onClick={pushToDetailRoute}>
		<h3>Title</h3>
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, accusamus!
		</p>
		<h6>Price: {`1500$`}</h6>
	</section>
)

export const Listings = () => {
	const { push } = useHistory()

	const pushToDetailRoute = () => {
		push(`/detail/${123}`)
	}
	return (
		<div className='listings'>
			<section className='nav'>
				<h1>Listings</h1>
				<section className='right-side'>
					<select>
						<option value=''>Category</option>
						<option>First option</option>
						<option>First option</option>
						<option>First option</option>
					</select>
					<button>Add New Bid</button>
				</section>
			</section>
			<section className='listings-grid'>
				{Array(16)
					.fill(10)
					.map(_ => (
						<ListingCard pushToDetailRoute={pushToDetailRoute} />
					))}
			</section>
			<section className='pagination'>
				<button>Prev</button>
				<p>Count</p>
				<button>Next</button>
			</section>
		</div>
	)
}
