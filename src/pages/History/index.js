import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { action as homeAction } from '../../store/home'
import './style.scss'
import { Table } from '../../components'

function History(props) {
  const { route, dashboard } = props

  useEffect(() => {
    props.dispatchUpdateNavName(route.name)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className='history'>
      <Table data={dashboard.history}></Table>
    </div>
  )
}

const mapStateToProps = ({ dashboard, home }) => ({ dashboard, home });

const mapDispatchToProps = (dispatch) => ({
  dispatchUpdateNavName(name) {
    dispatch(homeAction.updateNavName(name))
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(History));