import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getRepos } from '../actions/repos';
import Repo from './repo/Repo';
import './main.scss'
import { setCurrentPage } from '../../reducers/reposReducer';
import { createPages } from '../../utils/pagesCreator';
import { useNavigate } from 'react-router-dom';
import Error from './Error';

const Main = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate()
	const repos = useSelector(state => state.repos.items)
	const isFetching = useSelector(state => state.repos.isFetching)
	const isFetchError = useSelector(state => state.repos.isFetchError)
	const currentPage = useSelector(state => state.repos.currentPage)
	const totalCount = useSelector(state => state.repos.totalCount)
	const perPage = useSelector(state => state.repos.perPage)
	const [searchValue, setSearchValue] = useState('')
	const pagesCount = Math.ceil(totalCount / perPage)
	const pages = []
	createPages(pages, pagesCount, currentPage)

	useEffect(() => {
		dispatch(getRepos(searchValue, currentPage, perPage))
	}, [currentPage])

	const searchHendler = () => {
		dispatch(setCurrentPage(1))
		dispatch(getRepos(searchValue, currentPage, perPage))
	}

	if (isFetchError) {
		return navigate('./error')
	}

	return (
		<div className="main">
			<div className="main__search search">
				<input
					value={searchValue}
					onChange={e => setSearchValue(e.target.value)}
					type="text"
					placeholder='Input repo name'
					className='search__input' />
				<button
					className="search__btn"
					onClick={() => searchHendler()}
				>
					Search
				</button>
			</div>
			{
				isFetching === true
					?
					<div className="fetching"></div>
					:
					repos.map(repo =>
						<Repo key={repo.id} repo={repo} />
					)
			}

			<div className="main__pages pages">
				{pages.map((page, index) =>
					<span
						key={index}
						className={currentPage === page ? "pages__item-active" : "pages__item"}
						onClick={() => dispatch(setCurrentPage(page))}
					>
						{page}
					</span>
				)}
			</div>
		</div>
	)
}

export default Main