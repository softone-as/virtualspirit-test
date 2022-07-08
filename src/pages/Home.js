import { Container, Button } from '@mui/material';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';

import { PostsService } from '../services/PostsService';
import DeleteModal from '../components/DeleteModal';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPostStart } from '../redux/actions/posts';
import FormModal from '../components/FormModal';

export default function Home() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getPostStart());
	}, []);

	//bug: post id not retrieved
	const newestPost = useSelector((state) => state?.posts?.data_post) ?? {};

	const posts = useSelector((state) => state?.posts?.data_list) ?? [];
	//add Newest to the posts
	if (Object.keys(newestPost).length !== 0) posts.unshift(newestPost);

	const [itemData, setItemData] = useState(null);
	const [deleteModal, setDeleteModal] = useState(false);
	const [formModal, setFormModal] = useState(false);

	const showDeleteModal = (id) => {
		setItemData({ id });
		setDeleteModal(!deleteModal);
	};

	const showFormModal = () => {
		setFormModal(!formModal);
	};

	const handleDelete = () => {
		PostsService.deleteData(itemData.id);
	};

	const handleEdit = (post) => {
		console.log('🚀 ~ file: Home.js ~ line 25 ~ handleEdit ~ post', post);
	};

	return (
		<Container>
			<div className='header'>
				<h3>Data Post</h3>
				<Button
					variant='contained'
					startIcon={<AddIcon />}
					onClick={showFormModal}
				>
					Add Post
				</Button>
			</div>
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
									<IconButton
										aria-label='edit'
										onClick={() => handleEdit(post)}
									>
										<EditIcon />
									</IconButton>
									<IconButton
										aria-label='delete'
										onClick={() => showDeleteModal(post.id)}
										color='error'
									>
										<DeleteIcon />
									</IconButton>
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

			<FormModal show={formModal} handleClose={showFormModal} />
			{/* MODAL */}
		</Container>
	);
}
