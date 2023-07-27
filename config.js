// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
	// ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
	// ├┴┐├─┤└─┐││  └─┐
	// └─┘┴ ┴└─┘┴└─┘└─┘

  
	// General
	name: 'Anita',
	openInNewTab: true,
	twelveHourFormat: false,
  title: 'Bento',

	// Theme
	theme: 'latte-mocha',
	imageBackground: false,
  imageUrl: './assets/background.jpg', // Set custom background image URL. If the page is served insecurely, you may have issues loading images from pages over https.

	// Greetings
	greetingMorning: 'Why are you awake' + '?',
	greetingAfternoon: 'Good afternoon,',
	greetingEvening: 'Good evening,',
	greetingNight: 'Bedtime soon,',

	// Layout
	bentoLayout: 'bento', // 'bento', 'lists', 'buttons'

	// Weather
	weatherKey: '86c910cd02018b824a355c0928e73b2c', // Write here your API Key
	weatherIcons: 'OneDark', // 'Onedark', 'Nord', 'Dark', 'White'
	weatherUnit: 'C', // 'F', 'C'
	language: 'en', // More languages in https://openweathermap.org/current#multi

	trackLocation: true, // If false or an error occurs, the app will use the lat/lon below
	defaultLatitude: '52.486244',
	defaultLongitude: '-1.890401',

	// Autochange
	autoChangeTheme: true,

	// Autochange by OS
	changeThemeByOS: true,

	// Autochange by hour options (24hrs format, string must be in: hh:mm)
	changeThemeByHour: false,
	hourDarkThemeActive: '18:30',
	hourDarkThemeInactive: '07:00',

  	// Autochange automatically based on location (sunrise/sunset). Openweathermap API key required.
  	changeThemeByLocation: false,

  // ┌┐ ┬ ┬┌┬┐┌┬┐┌─┐┌┐┌┌─┐
  // ├┴┐│ │ │  │ │ ││││└─┐
  // └─┘└─┘ ┴  ┴ └─┘┘└┘└─┘

	firstButtonsContainer: [
		{
			id: '1',
			name: 'Github',
			icon: 'github',
			link: 'https://github.com/',
		},
		{
			id: '2',
			name: 'Mail',
			icon: 'mail',
			link: 'https://outlook.live.com/mail/',
		},
		{
			id: '3',
			name: 'Netflix',
			icon: 'tv-2',
			link: 'https://www.netflix.com/browse',
		},
		{
			id: '4',
			name: 'Hoyolab',
			icon: 'gamepad-2',
			link: 'https://www.hoyolab.com/home',
		},
		{
			id: '5',
			name: 'Reddit',
			icon: 'library',
			link: 'https://reddit.com',
		},
		{
			id: '6',
			name: 'Youtube',
			icon: 'youtube',
			link: 'https://youtube.com/',
		},
	],

	secondButtonsContainer: [
		{
			id: '1',
			name: 'Music',
			icon: 'headphones',
			link: 'https://open.spotify.com',
		},
		{
			id: '2',
			name: 'twitter',
			icon: 'twitter',
			link: 'https://twitter.com/',
		},
		{
			id: '3',
			name: 'bot',
			icon: 'bot',
			link: 'https://discord.com/app',
		},
		{
			id: '4',
			name: 'Amazon',
			icon: 'shopping-bag',
			link: 'https://amazon.com/',
		},
		{
			id: '5',
			name: 'Hashnode',
			icon: 'pen-tool',
			link: 'https://hashnode.com/',
		},
		{
			id: '6',
			name: 'Figma',
			icon: 'figma',
			link: 'https://figma.com/',
		},
	],

	// ┬  ┬┌─┐┌┬┐┌─┐
	// │  │└─┐ │ └─┐
	// ┴─┘┴└─┘ ┴ └─┘

	// First Links Container
	firstlistsContainer: [
		{
			icon: 'Watch',
			id: '1',
			links: [
				{
					name: 'Viki',
					link: 'https://www.viki.com/',
				},
				{
					name: 'Disney+',
					link: 'https://www.disneyplus.com/en-gb/home',
				},
				{
					name: 'Now',
					link: 'https://www.nowtv.com/gb/watch/entertainment/highlights',
				},
				{
					name: 'Korean Reality',
					link: 'https://kisstvshow.to/',
				},
			],
		},
		{
			icon: 'coffee',
			id: '2',
			links: [
				{
					name: 'Linkedin',
					link: 'https://www.linkedin.com',
				},
				{
					name: 'Twitter',
					link: 'https://twitter.com/home',
				},
				{
					name: 'Facebook',
					link: 'https://www.facebook.com/',
				},
				{
					name: 'Amazon',
					link: 'https://www.amazon.co.uk/',
				},
			],
		},
	],

	// Second Links Container
	secondListsContainer: [
		{
			icon: 'binary',
			id: '1',
			links: [
				{
					name: 'Spotify',
					link: 'https://www.spotify.com',
				},
				{
					name: 'Reddit',
					link: 'https://www.reddit.com',
				},
				{
					name: 'Hashnode',
					link: 'https://www.hashnode.com',
				},
				{
					name: 'Pocket',
					link: 'https://www.pocket.com',
				},
			],
		},
		{
			icon: 'github',
			id: '2',
			links: [
				{
					name: 'Front',
					link: 'https://www.reddit.com/r/Frontend/',
				},
				{
					name: 'Rust',
					link: 'https://www.reddit.com/r/rust/',
				},
				{
					name: 'Go',
					link: 'https://www.reddit.com/r/golang/',
				},
				{
					name: 'Repos',
					link: 'https://github.com/migueravila',
				},
			],
		},
	],
};
