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
			description: 'To create an eye catching and informative landing page where businesses would go to from social and paid ads. Also to implement a short form to enquire about signing up to Oneflare to generate warm leads for our Sales team to follow up registration.',
			image: BusinessEnquiryPage,
			skills: 'I learnt that React is tough work! Most importantly I learnt how to manage a React project from start to finish. It was my first time learning how to implement data fetching from and posting to an endpoint, validating user input data with RegEx and async validation from the backend. I also refined my skills in creating stateful components.',
			stack: ['React', 'Rails', 'Sass'],
			url: 'https://www.oneflare.com.au/businesses/enquire'
		},
		{
			id: '2',
			name: 'Oneflare Awards',
			description: "Build a landing page to display our annual Oneflare Customer Choice Award winning businesses to engage with our top performing businesses and provide them appreciation and acknowledgment.",
			image: OneflareAwards,
			skills: 'My first project working within Rails to bring this marketing initiative to life.',
			stack: ['Rails', 'Sass'],
			url: 'https://www.oneflare.com.au/awards'
		},
		{
			id: '3',
			name: 'Gif Fetcher',
			description: "A practice project to learn how to fetch data from an API and display it in a React app.",
			image: GifFetcher,
			skills: 'This was my first major React project where I learnt a lot. I was exposed to and learnt data fetching from and posting to an end point, async validation, validation through RegEx and creating various React components.',
			stack: ['React', 'Rails'],
			url: 'https://tarokonno.github.io/gif-fetcher'
		},
		{
			id: '4',
			name: 'To-Done List',
			description: "A classic to-do project to learn the ins and outs of React.",
			image: ToDoList,
			skills: 'This was my first major React project where I learnt a lot. I was exposed to and learnt data fetching from and posting to an end point, async validation, validation through RegEx and creating various React components.',
			stack: ['React', 'Rails'],
			url: 'https://tarokonno.github.io/taro-todo-app'
		},
		{
			id: '5',
			name: 'Scoreboard',
			description: "A React based scoreboard that allows players to be added and scores to be adjusted",
			image: Scoreboard,
			skills: 'This was my first major React project where I learnt a lot. I was exposed to and learnt data fetching from and posting to an end point, async validation, validation through RegEx and creating various React components.',
			stack: ['React', 'Rails'],
			url: 'https://tarokonno.github.io/scoreboard-react'
		}
	]
}

export default projectData;