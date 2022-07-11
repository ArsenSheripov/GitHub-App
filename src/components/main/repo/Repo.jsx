import React from 'react'
import './repo.scss'
import { NavLink } from "react-router-dom";

const Repo = (props) => {
	const repo = props.repo

	return (
		<div className="repo">
			<div className="repo__header">
				<h2 className="repo__title"><NavLink to={`/card/${repo.owner.login}/${repo.name}`}>{repo.name}</NavLink></h2>
				<div className="repo__star">{repo.stargazers_count}</div>
			</div>
			<div className="repo__last-commit">Updated at: {repo.updated_at}</div>
			<a href={repo.html_url} className='repo__link' >Ссылка на репозиторий: {repo.html_url}</a>
		</div>
	)
}

export default Repo