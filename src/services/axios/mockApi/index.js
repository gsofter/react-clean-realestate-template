import mock from './mock'
import './auth'
import './api'

mock.onAny().passThrough()
