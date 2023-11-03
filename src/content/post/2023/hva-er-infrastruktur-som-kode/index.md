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

- Hva? Hvorfor? Hvordan? Hvor?

Det korte svaret er at _Infrastructure as Code_ eller IAC er en måte å beskrive,
styre og provisjonere infrastruktur på. Det vil si, alt fra servere, nettverk,
databaser og andre ting, og i dag er det kanskje mer vanlig at man provisjonerer
disse tingene i en av de store skyleverandørene som Google Cloud, Azure og
Amazon Web Services (AWS).

Infrastruktur som kode har endret stort hvordan IT-ressurser håndteres og
styres. Med infrastruktur som kode kan du bruke prinsipper fra programmering,
slik som versjoneringskontroll (Git), samarbeid og kontinuerlig integrasjon og
levering (CI/CD) slik at organisasjoner kan bli mer effektive og automatisere
prosesser.

Verktøyene reduserer risiko for menneskelig feil, skaper hurtige og sikre
deployments (eller utrulling). Måten det ofte fungerer på er at man definererer
en ønsket tilstand til infrastrukturen, eksempelvis at en _Deployment_ i
Kubernetes skal kjøre en Docker-fil med en spesifisert tag, og så sørger
verktøyet for at det blir sånn. Dette skiftet har også vært med på å skape en ny
rolle i IT-organisasjoner, nemlig _DevOps_ (en slags sammensmeltet rolle mellom
utvikling og IT-driftspersonell).

## Verktøyene

Det finnes mange verktøy, det første verktøyet som tok verden med storm var nok
Chef, som ble lansert i 2009. Siden den gang har det kommet mange verktøy, slik
som Puppet, Terraform, Ansible, Pulumi, CloudFormation, CDK, Serverless og Helm.

Den mest populære i dag? Det er nok Terraform fra Hashicorp. Terraform kom ut i
2014, og verktøyet lar deg definere infrastruktur som kode i HCL (Hashicorp
Configuration Language).

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

Personlig har jeg blitt veldig glad i Pulumi, som er et verktøy som lar deg
definere infrastruktur som kode i et hvilket som helst programmeringsspråk. Det
er også et stort økosystem av moduler, og det er enkelt å komme i gang.

```typescript
import * as pulumi from '@pulumi/pulumi';
import * as aws from '@pulumi/aws';

const example = new aws.ec2.Instance('example', {
  ami: 'ami-0c55b159cbfafe1f0',
  instanceType: 't2.micro',
  tags: {
    Name: 'ExampleInstance',
  },
});
```

En av fordelene med Pulumi er at det er i et hvilket som helst
programmeringsspråk. Alle verktøyene er basert på åpen kildekode, og personlig
har jeg bidratt både til Terraform og Pulumi.

## Hva hjelper det meg med?

Jeg tror det gir mening for de fleste å bruke infastruktur som kode på et eller
annet tidspunkt når man lager et digitalt prod
