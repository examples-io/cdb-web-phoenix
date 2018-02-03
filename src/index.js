import React from 'react'
import { Route } from 'react-router'
import { Phoenix } from "./components"
import Demo from './demo/Demo'
import reducers from './demo/Reducer'

/**
 * @description Wire-up Phoenix with Login Component.
 */
Phoenix (
    <div>
        <Route exact path='/' component={Demo} />
    </div>
    , reducers
);
