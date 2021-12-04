//Styling and animation
import styled from "styled-components";
import { motion } from "framer-motion";
import { pop } from "../animations";
//Redux
import { useDispatch } from "react-redux";
import { loadDetail } from "../actions/detailAction";
import { Link } from "react-router-dom";
import { smallImage } from "../util";

const Game = ({ name, released, image, id }) => {
	//Load Details
	const dispatch = useDispatch();
	const stringPathId = id.toString();
	const loadDetailHandler = () => {
		document.body.style.overflow = "hidden";
		dispatch(loadDetail(id));
	};

	return (
		<GameCard
			onClick={loadDetailHandler}
			layoutId={stringPathId}
			variants={pop}
			initial="hidden"
			animate="show"
		>
			<Link to={`/game/${id}`}>
				<h3>{name}</h3>
				<p>{released}</p>
				<motion.img
					layoutId={`image ${stringPathId}`}
					src={smallImage(image, 640)}
					alt={name}
				/>
			</Link>
		</GameCard>
	);
};

const GameCard = styled(motion.div)`
	min-height: 30vh;
	box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
	text-align: center;
	border-radius: 1rem;
	overflow: hidden;
	cursor: pointer;
	img {
		width: 100%;
		height: 40vh;
		object-fit: cover;
	}
`;
export default Game;
