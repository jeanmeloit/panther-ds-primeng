import { ProjectConfiguration } from '@config/configuration'

/**
 * @license
 * Copyright Panther DS. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
export const environment = {
  production: true,
  url: ProjectConfiguration.enviroment.dev,
  backoOfficeUrl: ProjectConfiguration.backoffice.dev,
}
