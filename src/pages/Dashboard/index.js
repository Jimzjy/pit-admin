import React from 'react';
import { connect } from "react-redux";
import { action } from '../../store/dashboard'

function Dashboard(props) {
  const { dispatchAdd } = props

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

const mapStateToProps = ({ dashboard }) => ({ dashboard });

const mapDispatchToProps = (dispatch) => ({
  dispatchAdd(data) {
    dispatch(action.add(data))
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Dashboard));