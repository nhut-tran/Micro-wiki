import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { getErr } from '../../store/configureStore/appStore'
import LeftPanel from './LeftPanel'
import RightPanel from './RightPanel'

function LookUpContent() {
  return (
    <div className='lookup'>
      <LeftPanel />
      <RightPanel />
    </div>
  )

}
const mapStateToProps = (state, { match }) => {
  const filter = match.params.filter
  return {
    err: getErr(state, filter)
  }
}
export default withRouter(connect(mapStateToProps)(LookUpContent))