import moment from 'moment';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Col, Container, Row, Spinner } from 'reactstrap';
import {
	Button,
	Dropdown,
	Form,
	Icon,
	Input,
	TextArea,
} from 'semantic-ui-react';
import { questionCreate } from '../../Store/ActionCreators/question';
import {
	sectionFetch,
	sectionUpdate,
} from '../../Store/ActionCreators/section';
import Question from './Question';

function Section(props) {
	const { id, index } = props;
	const [quesList, setQuesList] = useState([]);
	const [details, setDetails] = useState({});
	const [loading, setLoading] = useState(false);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(sectionFetch(id)).then(res => {
			setQuesList(res.question_sequence);
			setDetails(res);
		});
	}, [dispatch]);

	const addQuestion = () => {
		setLoading(true);
		const data = {
			section_id: id,
			created_by: 2,
			updated_by: 2,
			statement: 'Question',
			qtype: 'LP',
		};
		dispatch(questionCreate(data)).then(res => {
			setQuesList([...quesList, res?.id]);
			setLoading(false);
		});
	};

	const updateSection = () => {
		const data = {
			heading: details.heading,
			description: details.description,
		};
		dispatch(sectionUpdate({ id, data }));
	};

	return (
		<Container>
			<Row className="p-4 mb-4 rounded_lg  bg-white">
				<Col>
					<h1 className="section_name d-inline-block pr-4">Section {index}</h1>

					<Dropdown
						className="float-right"
						item
						direction="left"
						icon={<Icon name="ellipsis vertical" size="large" />}
						simple>
						<Dropdown.Menu>
							<Dropdown.Item onClick={props.remove}>
								<Icon name="trash" />
								Delete
							</Dropdown.Item>
							<Dropdown.Item disabled>
								<Icon name="copy outline" />
								Duplicate
							</Dropdown.Item>
						</Dropdown.Menu>
					</Dropdown>
					<small className="float-right text-muted">
						{details.created_on ? (
							<>Created {moment(details.created_on).fromNow()}</>
						) : (
							<Spinner size="sm" />
						)}
					</small>
				</Col>
				<Col xs={12}>
					<Form>
						<Form.Field>
							<label>Heading</label>
							<Input
								defaultValue={details.heading}
								onChange={e =>
									setDetails({ ...details, heading: e.target.value })
								}
								onKeyUp={updateSection}
							/>
						</Form.Field>
						<Form.Field>
							<label>Description</label>
							<TextArea
								defaultValue={details.description}
								onChange={e =>
									setDetails({ ...details, description: e.target.value })
								}
								onKeyUp={updateSection}
							/>
						</Form.Field>
					</Form>
				</Col>
			</Row>

			<Row className="p-4 mb-4 rounded_lg  bg-white">
				<Col>
					{quesList &&
						quesList.map((quesid, i) => (
							<div>
								<Question id={quesid} index={i + 1} />
							</div>
						))}
				</Col>
				<Col xs={12}>
					<Button floated="right" onClick={addQuestion} disabled={loading}>
						{loading ? (
							<Spinner />
						) : (
							<>
								<Icon name="plus" />
								Add Question
							</>
						)}
					</Button>
				</Col>
			</Row>
		</Container>
	);
}

export default Section;
