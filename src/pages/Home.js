import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Box, Button, Container, Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import DeleteModal from '../components/DeleteModal';
import Loading from '../components/Loading';
import { deletePostStart, getPostStart } from '../redux/actions/posts';

export default function Home() {
	const dispatch = useDispatch();
	const history = useHistory();

	useEffect(() => {
		dispatch(getPostStart());
	}, []);

	const posts = useSelector((state) => state?.posts?.data_list) ?? [];
	const pending = useSelector((state) => state?.posts?.pending);

	const newestPost = useSelector((state) => state?.posts?.data_post) ?? {};

	//add Newest to the first index in  posts
	if (JSON.stringify(newestPost) !== '{}') {
		posts.unshift(posts.splice(-1, 1)[0]);
	}

	const [itemData, setItemData] = useState(null);
	const [deleteModal, setDeleteModal] = useState(false);

	const showDeleteModal = (id) => {
		setItemData({ id });
		setDeleteModal(!deleteModal);
	};

	const handleDelete = () => {
		dispatch(deletePostStart(itemData.id));
		setDeleteModal(!deleteModal);
	};

	const directToEdit = (id) => {
		history.push(`/post/edit/${id}`);
	};

	return (
		<Container>
			<Box
				sx={{
					display: 'flex',
					justifyContent: 'space-between',
					margin: '3rem 0',
				}}
			>
				<Typography variant='h4'>Data Post</Typography>
				<Link to='/post/new' style={{ textDecoration: 'none' }}>
					<Button variant='contained' startIcon={<AddIcon />}>
						Add Post
					</Button>
				</Link>
			</Box>
			<TableContainer component={Paper}>
				<Table sx={{ minWidth: 650 }} aria-label='simple table'>
					<TableHead>
						<TableRow>
							<TableCell>No</TableCell>
							<TableCell>Title</TableCell>
							<TableCell>Body</TableCell>
							<TableCell>User ID</TableCell>
							<TableCell>Action</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{posts.map((post, index) => (
							<TableRow
								key={post.id}
								sx={{
									'&:last-child td, &:last-child th': {
										border: 0,
									},
								}}
							>
								<TableCell component='th' scope='row'>
									{index + 1}
								</TableCell>
								<TableCell component='th' scope='row'>
									{post.title}
								</TableCell>
								<TableCell>{post.body}</TableCell>
								<TableCell>{post.userId}</TableCell>
								<TableCell>
									<Box sx={{ display: 'flex' }}>
										<IconButton
											aria-label='edit'
											onClick={() =>
												directToEdit(post.id)
											}
										>
											<EditIcon />
										</IconButton>
										<IconButton
											aria-label='delete'
											onClick={() =>
												showDeleteModal(post.id)
											}
											color='error'
										>
											<DeleteIcon />
										</IconButton>
									</Box>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>

			{/* MODAL */}
			<DeleteModal
				show={deleteModal}
				handleClose={showDeleteModal}
				handleDelete={handleDelete}
			/>
			{/* MODAL */}

			{/* Backdrop */}
			<Loading show={pending} />
		</Container>
	);
}
