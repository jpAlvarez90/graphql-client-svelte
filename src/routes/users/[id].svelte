<script context="module">
	import { GET_ONE_USER, DELETE_USER_BY_ID } from '../../graphql/graph_store/store';
	export async function load({ page }) {
		const id = page.params.id;
		const user = await GET_ONE_USER({ id: id });
		return { props: { user } };
	}
</script>

<script>
	import { goto } from '$app/navigation';

	export let user;

	function deleteUser(id) {
		DELETE_USER_BY_ID({ id : id }).then(res => {
			goto('/')
		}).catch(err => {
			console.error(err)
		})
		
	}
</script>

<div class="p-10 flex flex-col md:grid md:grid-cols-3">
	<div class="flex justify-center items-center">
		<img
			src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.logolynx.com%2Fimages%2Flogolynx%2F5c%2F5c5fbe66daa900ad13c9a0046596c465.png&f=1&nofb=1"
			alt="UserCard"
			class="h-52 w-52"
		/>
	</div>
	<div class="col-span-2">
		<div class="mt-5 md:mt-0">
			<h1 class="p-2 text-xl text-center md:text-5xl font-bold">Nickname: {user.nickname}</h1>
			<h2 class="p-2 text-lg text-center md:text-3xl font-thin">Fullname: {user.fullname}</h2>
			{#if user.phone}
				<h2 class="p-2 text-lg text-center md:text-3xl font-thin">Phone: {user.phone}</h2>
			{:else}
				<h2 class="p-2 text-lg text-center md:text-3xl font-thin">Phone: Not Available</h2>
			{/if}
			{#if user.phone}
				<h2 class="p-2 text-lg text-center md:text-3xl font-thin">City: {user.city}</h2>
			{:else}
				<h2 class="p-2 text-lg text-center md:text-3xl font-thin">City: Not Available</h2>
			{/if}
		</div>
	</div>
</div>

<div class="grid grid-cols-2 gap-1 border-t-2 border-black pt-5">
	<button type="button" class="p-3 text-black rounded-full flex justify-center"> 
		<svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
			<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
		</svg>
	</button>
	
	<button on:click={ deleteUser(user._id) } type="button" class="p-3 text-red-600 rounded-full flex justify-center"> 
		<svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
			<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
		</svg>
	</button>
</div>
