import type React from 'react';

import {
  AmazonwebservicesOriginalWordmark,
  AnsibleOriginal,
  CypressioOriginal,
  DjangoPlain,
  DjangorestOriginal,
  ExpressOriginal,
  GooglecloudOriginal,
  GraphqlPlain,
  JavaOriginalWordmark,
  JavascriptOriginal,
  NestjsOriginal,
  NextjsOriginal,
  NodejsOriginal,
  PlaywrightOriginal,
  PythonOriginal,
  ReactOriginal,
  TerraformOriginal,
  TerraformPlain,
  TypescriptOriginal
} from 'devicons-react';

export type SkillName =
  // Languages
  | 'Typescript'
  | 'Javascript'
  | 'Java'
  | 'Python'
  // Backend
  | 'NestJS'
  | 'NodeJS'
  | 'ExpressJS'
  | 'Django'
  | 'Django Rest Framework'
  // Frontend
  | 'ReactJS'
  | 'NextJS'
  | 'AWS'
  | 'GCP'
  | 'GraphQL'
  // Testing
  | 'Cypress'
  | 'Playwright'
  // Infrastructure Orchestration
  | 'Terraform'
  | 'Terraform CDK'
  | 'Ansible';

export type SkillProps = {
  skill: SkillName;
};

export const skillIconMap: Record<
  SkillName,
  React.FunctionComponent<React.SVGProps<SVGAElement> & { size?: number }>
> = {
  // Languages
  Typescript: TypescriptOriginal,
  Javascript: JavascriptOriginal,
  Python: PythonOriginal,
  Java: JavaOriginalWordmark,
  // Back-end
  NodeJS: NodejsOriginal,
  NestJS: NestjsOriginal,
  ExpressJS: ExpressOriginal,
  Django: DjangoPlain,
  'Django Rest Framework': DjangorestOriginal,
  AWS: AmazonwebservicesOriginalWordmark,
  GCP: GooglecloudOriginal,
  GraphQL: GraphqlPlain,
  Ansible: AnsibleOriginal,
  // Front-end
  ReactJS: ReactOriginal,
  NextJS: NextjsOriginal,
  // Testing
  Cypress: CypressioOriginal,
  Playwright: PlaywrightOriginal,
  // Infrastructure Orschestration
  Terraform: TerraformOriginal,
  'Terraform CDK': TerraformPlain
};
