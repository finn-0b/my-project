import * as migration_20260128_165852_initial_setup from './20260128_165852_initial_setup';
import * as migration_20260225_045604_initial from './20260225_045604_initial';

export const migrations = [
  {
    up: migration_20260128_165852_initial_setup.up,
    down: migration_20260128_165852_initial_setup.down,
    name: '20260128_165852_initial_setup',
  },
  {
    up: migration_20260225_045604_initial.up,
    down: migration_20260225_045604_initial.down,
    name: '20260225_045604_initial'
  },
];
