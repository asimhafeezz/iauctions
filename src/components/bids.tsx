const Bid = (): JSX.Element => (
	<section className='bid'>
		<h6>{`${"Asim Hafeez"}`}</h6>
		<h6>{`${"1500"}$`}</h6>
	</section>
)

export const Bids: React.FC = () => {
	return (
		<div className='bids-container'>
			<h5>Bids</h5>
			<section className='bids'>
				{Array(10)
					.fill(0)
					.map(_ => (
						<Bid />
					))}
			</section>
		</div>
	)
}
