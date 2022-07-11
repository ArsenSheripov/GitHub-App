import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import { getContributors, getCurrentRepo } from '../actions/repos';
import { useSelector } from "react-redux";
import './card.scss'

const Card = (props) => {
	const navigate = useNavigate();
	const { username, reponame } = useParams()
	const [repo, setRepo] = useState({ owner: {} })
	const [contributors, setContributors] = useState([])
	const isFetching = useSelector(state => state.repos.isFetching)

	useEffect(() => {
		getCurrentRepo(username, reponame, setRepo)
		getContributors(username, reponame, setContributors)
	}, [])

	if (isFetching) {
		return (
			<div className="fetching"></div>
		)
	} else {
		return (
			<div>
				<div className="main__card card">
					<div className="card__header">
						<img src={repo.owner.avatar_url} alt="avatar" width={300} height={300} />
						<button className="card__btn" onClick={() => navigate(-1)}>back</button>
					</div>
					<div className="card__body">
						<h2 className="card__name">{repo.name}</h2>
						<span className="card__star">{repo.stargazers_count}</span>
					</div>
				</div>
				<div className="contributors">
					<h2>Топ 10 главных контрбьютеров:</h2>
					{contributors.map((c, index) =>
						<div className="contributors__item" key={index}>{index + 1}. {c.login}</div>
					)}
				</div>
			</div>
		)
	}
}

export default Card