import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { action } from '../../store/dashboard'
import { action as homeAction } from '../../store/home'

function Dashboard(props) {
  const { route, dispatchAdd } = props

  useEffect(() => {
    props.dispatchUpdateNavName(route.name)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const add = () => {
    dispatchAdd(2)
  }

  return (
    <div>
      dashboard
      {props.dashboard.v}
      <button onClick={add}></button>
    </div>
  )
}

const mapStateToProps = ({ dashboard, home }) => ({ dashboard, home });

const mapDispatchToProps = (dispatch) => ({
  dispatchAdd(data) {
    dispatch(action.add(data))
  },
  dispatchUpdateNavName(name) {
    dispatch(homeAction.updateNavName(name))
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Dashboard));