const Menu = () => (
	<nav className="absolute top-0 left-0 z-10 bg-white border-gray-200 dark:bg-gray-900">
		<div className="max-w-screen-xl flex flex-wrap items-center content-center justify-around mx-auto p-4">
			<button
				data-collapse-toggle="navbar-default"
				type="button"
				className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
				aria-controls="navbar-default"
				aria-expanded="false"
			>
				<span className="sr-only">Open main menu</span>
				<svg
					className="w-6 h-6"
					aria-hidden="true"
					fill="currentColor"
					viewBox="0 0 20 20"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						fill-rule="evenodd"
						d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
						clip-rule="evenodd"
					></path>
				</svg>
			</button>
			<div className="hidden w-full md:block md:w-auto" id="navbar-default">
				<ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
					<li>
						<a
							href="https://docs.dynamic.xyz/docs"
							target="_blank"
							className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
							aria-current="page"
						>
							Docs
						</a>
					</li>
					<li>
						<a
							href="https://app.dynamic.xyz/dashboard/overview"
							target="_blank"
							className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
						>
							Dashboard
						</a>
					</li>
					<li>
						<a
							href="https://dynamiccustomers.slack.com"
							target="_blank"
							className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
						>
							Slack
						</a>
					</li>
				</ul>
			</div>
		</div>
	</nav>
)

export default Menu
