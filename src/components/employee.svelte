<script lang="ts">
  import GithubLogo from 'phosphor-svelte/lib/GithubLogo';
  import LinkedinLogo from 'phosphor-svelte/lib/LinkedinLogo';
  import Image from '$components/image.svelte';
  import { JsonLd } from 'svelte-meta-tags';
  import type { Picture } from 'vite-imagetools';

  export let givenName: string;
  export let familyName: string;
  export let position: string;
  export let phone: string;
  export let email: string;

  type socialMedia = {
    type: 'github' | 'linkedin';
    url: string;
  };

  export let socialMedia: socialMedia[] = [];
  export let image: Picture;
  export let photographerName: string | undefined = undefined;

  const name = `${givenName} ${familyName}`;
</script>

<JsonLd
  schema={{
    '@context': 'https://schema.org',
    '@type': 'Person',
    givenName,
    familyName,
    sameAs: socialMedia.map((media) => media.url),
    worksFor: [
      {
        '@type': 'EmployeeRole',
        name: position,
        worksFor: {
          '@type': 'LocalBusiness',
          name: 'Bjerk AS',
          sameAs: ['https://bjerk.io/']
        }
      }
    ]
  }}
/>

<JsonLd
  schema={{
    '@context': 'https://schema.org',
    '@type': 'ImageObject',
    contentUrl: image.img.src,
    license: 'https://creativecommons.org/licenses/by/4.0/',
    creditText: 'Bjerk AS',
    creator: {
      '@type': 'Person',
      name: photographerName ?? 'Bjerk AS'
    }
  }}
/>

<div class="employee">
  <Image src={image} class="profile-image" alt="" />
  <div class="section">
    <div class="intro">
      <p class="name">{name}</p>
      <p class="position">{position}</p>
    </div>
    <div class="details">
      <p class="phone"><a href={`tel:${phone}`}>{phone}</a></p>
      <p class="email"><a href={`mailto:${email}`}>{email}</a></p>
    </div>
    {#if socialMedia.length > 0}
      <ul class="social-media-links">
        {#each socialMedia as link}
          {#if link.type == 'linkedin'}
            <li>
              <a
                href={link.url}
                target="_blank"
                rel="noopener"
                aria-label={`Gå til LinkedIn-profilen til ${name}`}
              >
                <LinkedinLogo />
              </a>
            </li>
          {/if}
          {#if link.type == 'github'}
            <li>
              <a
                href={link.url}
                target="_blank"
                rel="noopener"
                aria-label={`Gå til GitHub-profilen til ${name}`}
              >
                <GithubLogo />
              </a>
            </li>
          {/if}
        {/each}
      </ul>
    {/if}
  </div>
</div>

<style lang="scss">
  .employee {
    display: flex;
    flex-direction: column;
    gap: var(--size-base);
  }

  .section {
    display: flex;
    flex-direction: column;
    gap: var(--size-base);
  }

  :global(.profile-image) {
    border-radius: var(--border-radius-sm);
    width: 100%;
    height: 100%;
  }

  .intro {
    min-height: 70px;

    .name {
      font-size: var(--font-size-base);
      font-weight: 600;
    }

    .position {
      color: var(--color-low-contrast-text);
    }
  }

  .details {
    font-size: var(--font-size-sm);

    a {
      color: var(--color-low-contrast-text);
    }
  }

  .social-media-links {
    display: flex;
    flex-direction: row;
    gap: var(--size-xs);
    list-style: none;
    padding: 0;
    margin: 0;
    li {
      font-size: var(--font-size-md);
      a {
        color: var(--color-low-contrast-text);
      }
    }
  }
</style>
