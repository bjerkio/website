---
title: Hva er infrastruktur som kode (IaC)?
# headline:
description:
  Ansible, Terraform, Pulumi, CloudFormation, CDK, Serverless, Helm. Hva er
  egentlig alt det der? Finn det ut her.
date: 2023-11-03T15:00:00
image: ./simen-host-2023.jpg
keywords:
  devops, sikkerhet, menneskelig feil, deployment, "devops-tjenester",
  distribusjon
author:
  - simenandre
---

Det korte svaret er at _Infrastructure as Code_ (IAC) er en måte å beskrive,
styre og provisjonere infrastruktur på. Det vil si, alt fra servere, nettverk,
databaser og andre ting, og i dag er det kanskje vanligst at man provisjonerer
disse tingene i en av de store skyleverandørene som [Google Cloud][gcloud],
[Azure][azure] og [Amazon Web Services (AWS)][aws].

Infrastruktur som kode har endret hvordan IT-ressurser håndteres og styres. Med
infrastruktur som kode kan du bruke prinsipper fra programmering, slik som
versjoneringskontroll (Git), samarbeid og kontinuerlig integrasjon og levering
(CI/CD) slik at organisasjoner kan bli mer effektive og automatisere prosesser.

Verktøyene reduserer risiko for menneskelig feil, og skaper hurtige og sikre
deployments (utrullinger). Måten det ofte fungerer på er at man definerer en
ønsket tilstand til infrastrukturen, eksempelvis at en _Deployment_ i
[Kubernetes][k8s] skal kjøre en Docker-fil med en spesifisert tag eller en
server skal ha installert Ubuntu, så sørger verktøyet for at det blir sånn.
Dette skiftet har også vært med på å skape en ny rolle i IT-organisasjoner,
nemlig [_DevOps_][devops] (en slags sammensmeltet rolle mellom utvikler og
IT-driftspersonell).

[gcloud]: https://cloud.google.com/
[azure]: https://azure.microsoft.com/
[aws]: https://aws.amazon.com/
[k8s]: https://kubernetes.io/
[devops]: https://en.wikipedia.org/wiki/DevOps

## Verktøyene for infrastruktur som kode

Det finnes mange verktøy. Det første verktøyet som tok verden med storm var nok
Chef, som ble lansert i 2009. Siden den gang har det kommet mange verktøy, slik
som [Puppet][], [Terraform][], [Ansible][], [Pulumi][], [CloudFormation][],
[CDK][], [Serverless][] og [Helm][].

[puppet]: https://puppet.com/
[terraform]: https://www.terraform.io/
[ansible]: https://www.ansible.com/
[pulumi]: https://www.pulumi.com/
[cloudformation]: https://aws.amazon.com/cloudformation/
[cdk]: https://aws.amazon.com/cdk/
[serverless]: https://www.serverless.com/
[helm]: https://helm.sh/

Den mest populære i dag? Det er nok [Terraform fra Hashicorp][terraform].
Terraform kom ut i 2014, og verktøyet lar deg definere infrastruktur som kode i
HCL (Hashicorp Configuration Language).

```hcl
provider "aws" { region = "us-west-2" }

resource "aws_instance" "example" {
  ami = "ami-0c55b159cbfafe1f0"
  instance_type = "t2.micro"

  tags = { Name = "ExampleInstance" }
}

```

Det som er fint med Terraform er at det er et stort økosystem av moduler, et
stort community og det er enkelt å komme i gang.

Personlig har jeg blitt veldig glad i [Pulumi][], som er et verktøy som lar deg
definere infrastruktur som kode i et hvilket som helst programmeringsspråk.

Det er også et stort økosystem av moduler, og det er enkelt å komme i gang.

Eksempel:

```typescript
import * as pulumi from "@pulumi/pulumi";
import * as aws from "@pulumi/aws";

const example = new aws.ec2.Instance("example", {
  ami: "ami-0c55b159cbfafe1f0",
  instanceType: "t2.micro",
  tags: {
    Name: "ExampleInstance",
  },
});
```

En av fordelene med Pulumi er at det lar deg bruke et hvilket som helst
programmeringsspråk. Begge verktøyene jeg har vist frem her er basert på åpen
kildekode. Personlig har jeg bidratt både til Terraform og Pulumi (kanskje
spesielt [Pulumis GitHub Action-ting][pulumi-github-actions]).

[pulumi-github-actions]:
  https://www.pulumi.com/blog/supercharging-our-github-action-with-the-pulumi-automation-api/

## Hva hjelper dette deg?

Jeg tror det gir mening for de fleste å bruke infastruktur som kode på et eller
annet tidspunkt, på et eller annet nivå, når man lager et digitalt produkt. Det
trenger kanskje ikke å være de mest automatiserte løsningene, eller [en
skreddersydd plattform slik som NAV bruker][nais].

Infrastruktur som kode tilbyr en måte å få konsekvente miljøer (det er likt i
produksjon som i testing, for eksempel), større grad av samarbeid, hastighet og
smidighet. Det gir en mer pålitelig og sikker infrastruktur, og tror jeg er
grunn nok for de fleste.

[nais]: https://nais.io/

## Hva er neste steg?

Vær pragmatisk – ikke prøv å gjør alt på en gang. Start med å ta i bruk
infrastruktur som kode i liten skala, og se hvordan det fungerer. De fleste
verktøy, slik som Terraform og Pulumi, lar deg starte med å definere enkle ting,
og så kan du bygge på etter hvert.

Den lever også fint sammen med det du har satt opp manuelt inne i webkonsollen
til skyleverandøren din. Faktisk kan du [importere eksisterende ressurser inn i
Pulumi][import-pulumi] og [Terraform][import-terraform], slik at du kan få en
oversikt over hva du har, og så kan du bygge videre på det.

Om du vil lære mer så hjelper gjerne en av [våre rådgivere] deg. Om Pulumi høres
interessant ut, så har vi [meetups i Oslo Pulumi User Group][pug], som jeg er
med å arrangerer. Om du vil bare skravle litt om infrastruktur som kode, eller
skyleverandører eller annet, så er du velkommen til [vår
Discord-server][discord]. Her finner du de fleste av oss i Bjerk!

[import-pulumi]: https://www.pulumi.com/docs/reference/cli/pulumi_import/
[import-terraform]:
  https://developer.hashicorp.com/terraform/language/state/import
[våre rådgivere]: https://bjerk.io/kontakt
[pug]: https://www.meetup.com/oslo-pulumi-user-group/
[discord]: https://discord.gg/v6uUBFxXNf
