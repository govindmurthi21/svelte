<script>
	import {Router, Route} from '@c0ldra1n/svero';
	import Header from './Header.svelte';
	import Home from './Home.svelte';
	import About from './About.svelte';
	import Todos from './Todos.svelte';
	import TodosWithStore from './pages/todos/index.svelte';
</script>

<main>
	<h1>Svelete is awesome</h1>
	<Header/>
	<Router>
		<Route fallback path="*" component={Home} />
		<Route path="/about" component={About} />
		<Route path="/todos" component={Todos} />
		<Route path="/todoswithstore" component={TodosWithStore} />
	</Router>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>