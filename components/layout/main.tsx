import { LayoutProps } from '@/models/index'
import { Box, Container, Stack } from '@mui/material'
import Link from 'next/link'
import { Footer, Header } from '../common'

export function MainLayout({ children }: LayoutProps) {
	return (
		<Stack minHeight="100vh">
			<Header />

			<Box component="main" flexGrow={1}>
				<Link href="/">
					<a>Home</a>
				</Link>
				<Link href="/blog">
					<a>Blog</a>
				</Link>
				<Link href="/works">
					<a>Works</a>
				</Link>
				{children}
			</Box>

			<Footer />
		</Stack>
	)
}
