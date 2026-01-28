import * as migration_20260128_165852_initial_setup from './20260128_165852_initial_setup';

export const migrations = [
  {
    up: migration_20260128_165852_initial_setup.up,
    down: migration_20260128_165852_initial_setup.down,
    name: '20260128_165852_initial_setup'
  },
];
