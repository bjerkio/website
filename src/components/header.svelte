<script lang="ts">
  import MobileNav from './mobile-nav.svelte';
  import Logo from './logo.svelte';
</script>

<header>
  <a class="logo" aria-label="Gå til forsiden" href="/">
    <Logo />
  </a>
  <nav>
    <ul>
      <li><a href="/about">Om oss</a></li>
      <li><a href="/projects">Prosjekter</a></li>
      <!-- <li><a href="/services">Tjenester</a></li> -->
      <li><a href="/contact">Kontakt</a></li>
    </ul>
    <div class="mobile-nav">
      <MobileNav />
    </div>
  </nav>
</header>

<style lang="scss">
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: var(--container-width);
    margin-inline: auto;
    padding: 2rem 0;

    .logo {
      color: var(--color-high-contrast-text);
      display: inline-block;
    }
  }

  nav {
    display: flex;
    list-style: none;
    gap: 1rem;
    align-items: center;

    ul {
      display: flex;
      list-style: none;
      gap: 1rem;

      li {
        font-size: var(--font-size-sm);

        a {
          color: var(--color-high-contrast-text);
          text-decoration: none;

          &:hover {
            font-weight: 500;
          }
        }

        &:first-child {
          margin-left: 0;
        }
      }
    }
  }

  .mobile-nav {
    display: none;
  }

  @media (max-width: 430px) {
    header {
      nav ul li:not(.emphasis) {
        display: none;
      }
    }
    .mobile-nav {
      display: block;
    }
  }
</style>
