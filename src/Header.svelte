<script>
    import {Link} from '@c0ldra1n/svero';
</script>

<header class="header-container">
  <div class="nav nav-home">
    <Link href="/home" class="nav-link">Go Home</Link>
  </div>
  <div class="nav nav-about">
    <Link href="/about" class="nav-link">About</Link>
  </div>
    <div class="nav nav-todos">
    <Link href="/todos" class="nav-link">Todos</Link>
  </div>
</header>

<style>
    .header-container {
        padding: 20px;
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
    }

    .nav {
        padding: 20px;
        background: #f2f2f2;
        flex-grow: 1;
    }
</style>
