import { Col, Container, Row } from 'reactstrap';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { sectionFetch } from '../../Store/ActionCreators/section';
import Question from './Question';

function Section(props) {
	const { index } = props;
	const [quesList, setQuesList] = useState([]);
	const [details, setDetails] = useState({});
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(sectionFetch(props.id)).then(res => {
			setQuesList(res.question_sequence);
			setDetails(res);
		});
	}, [dispatch]);
	return (
		<Container fluid className=" p-4 mb-4 rounded_lg  bg-white">
			<Row>
				<Col>
					<h2 className="section_name d-inline-block pr-4">Section {index}</h2>
					<h3>{details.heading}</h3>
					<p className="text-justify text-muted">{details.description}</p>
					<hr />
					{quesList &&
						quesList.map((ques, i) => (
							<div>
								<Question id={ques} index={i + 1} />
								<br/>
							</div>
						))}
				</Col>
			</Row>
		</Container>
	);
}

export default Section;
