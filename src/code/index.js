import riot from 'riot'
import mixin from 'riot-redux-mixin'

import './tags'
import configureStore from './store/configureStore'

let store = configureStore()

riot.mixin('redux', mixin(store))
riot.mount('bp-app')
