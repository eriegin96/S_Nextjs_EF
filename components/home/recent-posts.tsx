import { Box, Container, Stack, Typography, Link as MuiLink } from '@mui/material'
import Link from 'next/link'
import { PostCard } from '.'

export function RecentPosts() {
	return (
		<Box component="section" bgcolor="secondary.light" pt={2} pb={4}>
			<Container>
				<Stack
					direction="row"
					mb={2}
					justifyContent={{ xs: 'center', md: 'space-between' }}
					alignItems="center"
				>
					<Typography variant="h5">Recent Posts</Typography>

					<Link href="/blog" passHref>
						<MuiLink sx={{ display: { xs: 'none', md: 'inline-block' } }}>View all</MuiLink>
					</Link>
				</Stack>

				<Stack
					direction={{ xs: 'column', md: 'row' }}
					spacing={3}
					sx={{
						'& > div': {
							width: {
								xs: '100%',
								md: '50%',
							},
						},
					}}
				>
					<Box>
						<PostCard />
					</Box>

					<Box>
						<PostCard />
					</Box>
				</Stack>
			</Container>
		</Box>
	)
}
