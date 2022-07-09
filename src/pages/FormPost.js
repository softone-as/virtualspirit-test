import { Box, Container, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams, withRouter } from 'react-router-dom';
import Loading from '../components/Loading';
import { patchPostStart, postPostStart } from '../redux/actions/posts';

export default function FormPost() {
	const history = useHistory();
	const { id } = useParams();
	const dispatch = useDispatch();

	const postSelected = useSelector((state) =>
		state.posts.data_list.find((post) => post.id === 1)
	);
	const pending = useSelector((state) => state.posts.pending);

	const [post, setPost] = useState({
		title: '',
		body: '',
		userId: '',
	});

	useEffect(() => {
		if (id && postSelected) setPost(postSelected);
	}, [id, postSelected]);

	const handleInputChange = (event) => {
		const name = event.target.name;
		const newValue = event.target.value;
		setPost((post) => ({ ...post, [name]: newValue }));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (id) {
			Object.keys(post).forEach((key) => {
				if (post[key] === '') {
					delete post[key];
				}
			});
			dispatch(patchPostStart(id, post));
		} else {
			dispatch(postPostStart(post));
		}

		setPost({
			title: '',
			body: '',
			userId: '',
		});

		history.push('/');
	};

	return (
		<Container>
			<form onSubmit={handleSubmit}>
				<Typography variant='h4' align='center' mt={3}>
					{id ? `Edit Post Data` : `Add Post Data`}
				</Typography>
				<TextField
					margin='dense'
					id='title'
					name='title'
					label='Title'
					fullWidth
					variant='standard'
					onChange={handleInputChange}
					value={post.title}
				/>
				<TextField
					margin='dense'
					id='body'
					name='body'
					label='Description'
					fullWidth
					variant='standard'
					onChange={handleInputChange}
					value={post.body}
				/>
				<TextField
					margin='dense'
					id='userId'
					name='userId'
					label='User ID'
					fullWidth
					variant='standard'
					onChange={handleInputChange}
					value={post.userId}
				/>
				<Box
					sx={{
						display: 'flex',
						justifyContent: 'flex-end',
						margin: '3rem 0',
					}}
				>
					<Button onClick={() => history.push('/')}>Cancel</Button>
					<Button variant='contained' type='submit'>
						{id ? `Edit Post` : `Add Post`}
					</Button>
				</Box>
			</form>

			{/* Backdrop */}
			<Loading show={pending} />
		</Container>
	);
}

withRouter(FormPost);
