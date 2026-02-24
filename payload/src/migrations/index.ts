import * as migration_20260128_165852_initial_setup from './20260128_165852_initial_setup'
import * as migration_20260224_023000_add_logo_text from './20260224_023000_add_logo_text'

export const migrations = [
  {
    up: migration_20260128_165852_initial_setup.up,
    down: migration_20260128_165852_initial_setup.down,
    name: '20260128_165852_initial_setup',
  },
  {
    up: migration_20260224_023000_add_logo_text.up,
    down: migration_20260224_023000_add_logo_text.down,
    name: '20260224_023000_add_logo_text',
  },
]
