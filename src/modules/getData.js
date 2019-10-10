import db from '../db/db.json';

export default function getData() {
	const goodsWrapper = document.querySelector('.goods');
	return db;
}