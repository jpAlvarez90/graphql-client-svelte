<script>
    export let user
</script>

<a href={`/users/${user._id}`} class="p-6 bg-gray-100 text-gray-800 text-center rounded-md 
    shadow-sm hover:shadow-md flex flex-col items-center">
    <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.logolynx.com%2Fimages%2Flogolynx%2F5c%2F5c5fbe66daa900ad13c9a0046596c465.png&f=1&nofb=1"
        alt="UserCard" class="h-20 w-20">
    <h1 class="text-2xl" > {user.nickname} </h1>
    <h3> {user.fullname} </h3>
</a>