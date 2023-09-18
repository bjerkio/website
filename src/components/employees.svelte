<script>
  import Employee from './employee.svelte';
  import bns from '$assets/people/bns.jpg?w=300&h=400';
  import brage from '$assets/people/brage.jpg?w=300&h=400';
  import christina from '$assets/people/christina.jpg?w=300&h=400';
  import markus from '$assets/people/markus.jpg?w=300&h=400';
  import simen from '$assets/people/simen.jpg?w=300&h=400';
  import simon from '$assets/people/simon.jpg?w=300&h=400';
  import thomas from '$assets/people/thomas.jpg?w=300&h=400';
  import sandra from '$assets/people/sandra.jpg?w=300&h=400';
  import cop from '$assets/people/cop.jpg?w=300&h=400';

  const employees = [
    // Thomas
    {
      givenName: 'Thomas',
      familyName: 'Brustad',
      position: 'Rådgiver',
      phone: '+47 402 86 277',
      email: 'thomas@bjerk.io',
      image: thomas,
      socialMedias: {
        linkedin: {
          url: 'https://www.linkedin.com/in/thomasbrustad/'
        },
        github: {
          url: 'https://github.com/HanBrustad'
        }
      }
    },
    // Simen
    {
      givenName: 'Simen A. W.',
      familyName: 'Olsen',
      position: 'Daglig leder',
      phone: '+47 95 30 80 87',
      email: 'simen@bjerk.io',
      image: simen,
      socialMedias: {
        linkedin: {
          url: 'https://www.linkedin.com/in/simenandre/'
        },
        github: {
          url: 'https://github.com/simenandre'
        }
      }
    },
    // Carl Oscar
    {
      givenName: 'Carl Oscar',
      familyName: 'Petterson',
      position: 'Rådgiver',
      phone: '+47 908 59 851',
      email: 'cop@bjerk.io',
      image: cop,
      socialMedias: {
        linkedin: {
          url: 'https://www.linkedin.com/in/copetterson/'
        },
        github: {
          url: 'https://github.com/copetterson'
        }
      }
    },
    // Brage
    {
      givenName: 'Brage Sekse',
      familyName: 'Aarset',
      position: 'Programvareutvikler',
      phone: '+47 464 65 823',
      email: 'brage@bjerk.io',
      image: brage,
      socialMedias: {
        linkedin: {
          url: 'https://www.linkedin.com/in/braaar/'
        },
        github: {
          url: 'https://www.github.com/braaar/'
        }
      }
    },
    // Markus
    {
      givenName: 'Markus',
      familyName: 'Moripen',
      position: 'Programvareutvikler',
      phone: '+47 970 30 084',
      email: 'markus@bjerk.io',
      image: markus,
      socialMedias: {
        linkedin: {
          url: 'https://www.linkedin.com/in/moripen/'
        },
        github: {
          url: 'https://github.com/moripen'
        }
      }
    },
    // Simon
    {
      givenName: 'Simon',
      familyName: 'Rugland',
      position: 'Programvareutvikler',
      phone: '+47 474 46 841',
      email: 'js@bjerk.io',
      image: simon,
      socialMedias: {
        linkedin: {
          url: 'https://www.linkedin.com/in/simon-rugland/'
        },
        github: {
          url: 'https://github.com/simonrugland'
        }
      }
    },
    // Sandra
    {
      givenName: 'Sandra Viktoria',
      familyName: 'Toftemo',
      position: 'Programvareutvikler',
      phone: '+47 406 30 694',
      email: 'sandra.toftemo@bjerk.io',
      image: sandra,
      socialMedias: {
        linkedin: {
          url: 'https://www.linkedin.com/in/sandra-viktoria-doseth-toftemo-b9b946227/'
        },
        github: {
          url: 'https://github.com/xillians'
        }
      }
    },
    // Christina
    {
      givenName: 'Anna Christina',
      familyName: 'Lyra',
      position: 'Markedsføringssjef',
      phone: '+47 936 86 056',
      email: 'christina@bjerk.io',
      image: christina,
      socialMedias: {
        linkedin: {
          url: 'https://www.linkedin.com/in/annachristinalyra/'
        },
        github: {
          url: 'https://github.com/ChristinaLyra'
        }
      }
    },
    // Bjørn Niklas
    {
      givenName: 'Bjørn Niklas',
      familyName: 'Sjøstrøm',
      position: 'Styreleder',
      phone: '+47 905 86 616',
      email: 'bns@bjerk.io',
      image: bns,
      socialMedias: {
        linkedin: {
          url: 'https://www.linkedin.com/in/bj%C3%B8rn-niklas-sj%C3%B8str%C3%B8m-8043277/'
        },
        github: {
          url: 'https://github.com/seacurrent'
        }
      }
    }
  ];
</script>

{#each employees as employee}
  <Employee
    givenName={employee.givenName}
    familyName={employee.familyName}
    position={employee.position}
    phone={employee.phone}
    email={employee.email}
    image={employee.image}
    socialMedia={[
      { type: 'linkedin', url: employee.socialMedias.linkedin.url },
      { type: 'github', url: employee.socialMedias.github.url }
    ]}
  />
{/each}

