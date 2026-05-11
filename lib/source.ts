import { i18n, sectionLabels } from './i18n';
import { docs } from '@/.source';
import { loader } from 'fumadocs-core/source';

export const source = loader({
  i18n,
  baseUrl: '/',
  source: docs.toFumadocsSource(),
});
