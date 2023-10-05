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
</script>

<Employee
  givenName="Thomas"
  familyName="Brustad"
  position="Rådgiver"
  phone="+47 402 86 277"
  email="thomas@bjerk.io"
  image={thomas}
  socialMedia={[
    { type: 'linkedin', url: 'https://www.linkedin.com/in/thomasbrustad/' },
    { type: 'github', url: 'https://github.com/HanBrustad' }
  ]}
  photographerName="Steffen Normark"
/>

<Employee
  givenName="Simen A. W."
  familyName="Olsen"
  position="Daglig leder"
  phone="+47 95 30 80 87"
  email="simen@bjerk.io"
  image={simen}
  socialMedia={[
    { type: 'linkedin', url: 'https://www.linkedin.com/in/simenandre/' },
    { type: 'github', url: 'https://github.com/simenandre' }
  ]}
  photographerName="Steffen Normark"
/>

<Employee
  givenName="Carl Oscar"
  familyName="Petterson"
  position="Rådgiver"
  phone="+47 908 59 851"
  email="cop@bjerk.io"
  image={cop}
  socialMedia={[
    {
      type: 'linkedin',
      url: 'https://www.linkedin.com/in/copetterson/'
    },
    {
      type: 'github',
      url: 'https://github.com/copetterson'
    }
  ]}
  photographerName="Tom-Egil Jensen"
/>

<Employee
  givenName="Brage Sekse"
  familyName="Aarset"
  position="Programvareutvikler"
  phone="+47 464 65 823"
  email="brage@bjerk.io"
  image={brage}
  socialMedia={[
    { type: 'linkedin', url: 'https://www.linkedin.com/in/braaar/' },
    { type: 'github', url: 'https://github.com/braaar' }
  ]}
  photographerName="Steffen Normark"
/>

<Employee
  givenName="Markus"
  familyName="Moripen"
  position="Programvareutvikler"
  phone="+47 970 30 084"
  email="markus@bjerk.io"
  image={markus}
  socialMedia={[
    { type: 'linkedin', url: 'https://www.linkedin.com/in/moripen/' },
    { type: 'github', url: 'https://github.com/moripen' }
  ]}
  photographerName="Steffen Normark"
/>

<Employee
  givenName="Simon"
  familyName="Rugland"
  position="Programvareutvikler"
  phone="+47 474 46 841"
  email="js@bjerk.io"
  image={simon}
  socialMedia={[
    { type: 'linkedin', url: 'https://www.linkedin.com/in/simon-rugland/' },
    { type: 'github', url: 'https://github.com/simonrugland' }
  ]}
  photographerName="Fabian Roberto Gomez"
/>

<Employee
  givenName="Sandra Viktoria"
  familyName="Toftemo"
  position="Programvareutvikler"
  phone="+47 406 30 694"
  email="sandra.toftemo@bjerk.io"
  image={sandra}
  socialMedia={[
    {
      type: 'linkedin',
      url: 'https://www.linkedin.com/in/sandra-viktoria-doseth-toftemo-b9b946227/'
    },
    {
      type: 'github',
      url: 'https://github.com/xillians'
    }
  ]}
  photographerName="Steffen Normark"
/>

<Employee
  givenName="Anna Christina"
  familyName="Lyra"
  position="Markedsføringssjef"
  phone="+47 936 86 056"
  email="christina@bjerk.io"
  image={christina}
  socialMedia={[
    { type: 'linkedin', url: 'https://www.linkedin.com/in/annachristinalyra/' },
    { type: 'github', url: 'https://github.com/ChristinaLyra' }
  ]}
  photographerName="Steffen Normark"
/>

<Employee
  givenName="Bjørn Niklas"
  familyName="Sjøstrøm"
  position="Styreleder"
  phone="+47 905 86 616"
  email="bns@bjerk.io"
  image={bns}
  socialMedia={[
    {
      type: 'linkedin',
      url: 'https://www.linkedin.com/in/bj%C3%B8rn-niklas-sj%C3%B8str%C3%B8m-8043277/'
    },
    {
      type: 'github',
      url: 'https://github.com/seacurrent'
    }
  ]}
  photographerName="Sebastian Andersen"
/>
