import { Box, Button, Container, Stack, Typography } from '@mui/material'
import Image from 'next/image'
import avatar from '@/images/avatar.jpeg'

export function HeroSection() {
	return (
		<Box component="section" pt={18} pb={9}>
			<Container>
				<Stack spacing={8} direction="row" alignItems="flex-start">
					<Box>
						<Typography component="h1" variant="h3" fontWeight="bold" mb={5}>
							Hi, I am John, <br />
							Creative Technologist
						</Typography>

						<Typography mb={5}>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum similique recusandae
							asperiores ab corporis et officiis amet odit optio iste distinctio perferendis.
						</Typography>

						<Button variant="contained" size="large">
							Download Resume
						</Button>
					</Box>

					<Box
						sx={{
							minWidth: '240px',
							boxShadow: '-5px 13px',
							color: 'secondary.light',
						}}
					>
						<Image src={avatar} layout="responsive" alt="avatar" />
					</Box>
				</Stack>
			</Container>
		</Box>
	)
}
