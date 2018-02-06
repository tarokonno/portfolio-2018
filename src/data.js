import BusinessEnquiryPage from './images/business-enquiry-page.png';
import OneflareAwards from './images/customer-choice-awards.png';
import GifFetcher from './images/gif-fetcher.png';
import ToDoList from './images/to-done-list.png';
import Scoreboard from './images/scoreboard-react.png';

const projectData = {
	projects: [
		{
			id: '1',
			name: 'Business Enquiry Page',
			description: "A short form for businesses to land from social and paid ads to fill out to enquire about Oneflare.",
			image: BusinessEnquiryPage
		},
		{
			id: '2',
			name: 'Oneflare Awards',
			description: "Landing page for Oneflare's annual Customer Choice Awards.",
			image: OneflareAwards
		},
		{
			id: '3',
			name: 'Gif Searcher',
			description: "A practice project to learn how to fetch data from an API and display it in a React app.",
			image: GifFetcher
		},
		{
			id: '4',
			name: 'To-Done List',
			description: "A classic to-do project to learn the ins and outs of React.",
			image: ToDoList
		},
		{
			id: '5',
			name: 'Scoreboard',
			description: "A React based scoreboard that allows players to be added and scores to be adjusted",
			image: Scoreboard
		}
	]
}

export default projectData;