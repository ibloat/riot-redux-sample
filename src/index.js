import './tags/app.tag'
import './tags/counter.tag'

import riot from 'riot'
import { createStore } from 'redux'
import rrm from 'riot-redux-mixin'
import rr from './reducers'

const store = createStore(rr)
riot.mixin(rrm(store))

riot.mount('sample-app')
