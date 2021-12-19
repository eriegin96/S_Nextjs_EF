import useSWR from 'swr'

export interface StudentDetailProps {
	studentId: string
}

const MILLISECOND_PER_HOUR = 60 * 60 * 1000

export default function StudentDetail({ studentId }: StudentDetailProps) {
	const { data, error, mutate, isValidating } = useSWR(`/students/${studentId}`, {
		revalidateOnFocus: false,
		dedupingInterval: 2000,
	})

	function handleMutateClick() {
		// true: should revalidate
		mutate({ name: 'easy frontend' }, true)
	}

	return (
		<div>
			Name: {data?.name || '--'} <button onClick={handleMutateClick}>mutate</button>
		</div>
	)
}
