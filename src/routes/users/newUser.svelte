<script>
    import { goto } from '$app/navigation';
    import { REGISTER_ONE_USER } from '../../graphql/graph_store/store';

    let nickname = ""
    let fullname = ""
    let phone = ""
    let city = ""

    function registerUser() {
        REGISTER_ONE_USER({nickname, fullname, phone, city}).then(res => {
            goto('/')
        }).catch(err => {
            console.error(err)
        })
    }
</script>

<div class="flex flex-col justify-center">
    <h1 class="pb-5 text-center md:text-4xl text-2xl font-semibold">Registrar nuevo usuario</h1>
    <form class="flex flex-col justify-center" on:submit|preventDefault={registerUser}>
        <input type="text" class="p-2 md:mx-32
            bg-gray-100 border-solid border-gray-300 border-2 rounded-md my-2"
            placeholder="Nickname"
            bind:value={nickname}>
        <input type="text" class="p-2 md:mx-32
            bg-gray-100 border-solid border-gray-300 border-2 rounded-md my-2"
            placeholder="Fullname"
            bind:value={fullname}>
        <input type="text" class="p-2 md:mx-32
            bg-gray-100 border-solid border-gray-300 border-2 rounded-md my-2"
            placeholder="Phone*"
            bind:value={phone}>
        <input type="text" class="p-2 md:mx-32
            bg-gray-100 border-solid border-gray-300 border-2 rounded-md my-2"
            placeholder="City*"
            bind:value={city}>
        <button type="submit" class="p-2 md:mx-32 bg-black text-white rounded-md my-2">
            Registrar
        </button>
    </form>
</div>
