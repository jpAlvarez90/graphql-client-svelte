<script>
    import UserCard from '../components/UserCard.svelte';
    import { users, GET_ALL_USERS } from '../graphql/graph_store/store';

    GET_ALL_USERS()
</script>

<svelte:head>
	<title>GrahpQL Svelte Client</title>
</svelte:head>

<div class="pt-3 grid gap-4 md:grid-cols-3 grid-cols-2">
    {#each $users as user}
        <UserCard {user} />
    {/each}
</div>
