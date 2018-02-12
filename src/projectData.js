import BusinessEnquiryPage from './images/business-enquiry-page.png';
import OneflareAwards from './images/customer-choice-awards.png';
import CostGuide from './images/cost-guide.png';
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
			stack: ['React', 'Rails', 'Sass', 'fetch', 'async'],
			url: 'https://www.oneflare.com.au/businesses/enquire'
		},
		{
			id: '2',
			name: 'Oneflare Awards',
			description: "Build a landing page to display our annual Oneflare Customer Choice Award winning businesses to engage with our top performing businesses and provide them appreciation and acknowledgment.",
			image: OneflareAwards,
			skills: 'My first project working within Rails to bring this marketing initiative to life from design to development. I became familiar with the Rails framework, refined my skills in design using Sketch and front end development with Bootstrap and Sass and learned how information is organised in the database to display on the front end.',
			stack: ['Rails', 'Sass'],
			url: 'https://www.oneflare.com.au/awards'
		},
		{
			id: '3',
			name: 'Cost Guide Centre',
			description: 'An SEO content strategy to provide costs and information on Oneflare\'s service categories.',
			image: CostGuide,
			skills: 'Working with the Rails developers to structure routes and data and working within the Rails framework using partials to structure the layout and designs from Sketch mockups.',
			stack: ['Rails', 'Sass'],
			url: 'https://www.oneflare.com.au/costs'
		},
		{
			id: '4',
			name: 'Gif Fetcher',
			description: 'A fun tutorial project from Treehouse to fetch data from the Giphy API and display information on the front end.',
			image: GifFetcher,
			skills: 'Familiarising myself with data fetching tools such as fetch and axios and being able to effectively retrieve information to manipulate on the front end.',
			stack: ['React', 'Axios', 'Css'],
			url: 'https://tarokonno.github.io/gif-fetcher'
		},
		{
			id: '5',
			name: 'To-Done List',
			description: "A classic to-do app tutorial from Treehouse to learn the ins and outs of React.",
			image: ToDoList,
			skills: 'Helped me refine my understanding of React concepts like uni directional data flow and being able to change the way a component looks and acts depending on that state.',
			stack: ['React', 'Css'],
			url: 'https://tarokonno.github.io/taro-todo-app'
		},
		{
			id: '6',
			name: 'Scoreboard',
			description: "A React based scoreboard app tutorial from Treehouse that allows players to be added and scores to be adjusted",
			image: Scoreboard,
			skills: 'I learnt the fundamentals of Redux and state management as this tutorial helped implement Redux into an existing React project. I learned the benefits of Redux and how effective it is as scalability is needed when apps get bigger and have more complex state. This really tested my knowledge of ES6 and Javascript and am looking forward to learning more about Redux.',
			stack: ['React', 'Redux', 'Css'],
			url: 'https://tarokonno.github.io/scoreboard-react'
		}
	]
}

export default projectData;