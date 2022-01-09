import { useRouter } from 'next/router'
// import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'
import { AdminLayout } from '@/components/layout'
import { Box, Typography } from '@mui/material'
import { Header } from '@/components/common'

// const Header = dynamic(() => import('@/components/common/header'), { ssr: false })

export interface AboutPageProps {}

export default function AboutPage(props: AboutPageProps) {
	const [postList, setPostList] = useState([])
	const router = useRouter()

	const page = router.query?.page

	useEffect(() => {
		if (!page) return
		;(async () => {
			const response = await fetch(`https://js-post-api.herokuapp.com/api/posts?_page=${page}`)
			const data = await response.json()

			setPostList(data.data)
		})()
	}, [page])

	function handleNextClick() {
		router.push(
			{
				pathname: '/about',
				query: {
					page: (Number(page) || 1) + 1,
				},
			},
			undefined,
			// only fetch data on client
			// update on client, not call getStaticProps on server
			{ shallow: true }
		)
	}

	return (
		<Box>
			<Typography component="h1" variant="h3" color="primary.main">
				About Page
			</Typography>

			<Header />

			<ul className="post-list">
				{postList.map((post: any) => (
					<li key={post.id}>{post.title}</li>
				))}
			</ul>

			<button onClick={handleNextClick}>Next page</button>
		</Box>
	)
}

AboutPage.Layout = AdminLayout

export const getStaticProps = async () => {
	return {
		props: {},
	}
}
