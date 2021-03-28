const Comments = () => (
	<section className='comment'>
		<p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
	</section>
)
export const Detail: React.FC = () => {
	return (
		<div className='detail'>
			<h1>Bid Detail</h1>
			<section className='listing-detail'>
				<h2>Title</h2>
				<p>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam
					quibusdam eveniet non odio soluta sequi mollitia temporibus, ipsum
					quidem velit pariatur molestias, quo ab eius omnis? Animi laborum
					veritatis sequi.
				</p>
				<h6>Price: {`1500$`}</h6>
			</section>
			<h2>Comments</h2>
			<section className='comments'>
				{Array(5)
					.fill(0)
					.map(_ => (
						<Comments />
					))}
			</section>
		</div>
	)
}
