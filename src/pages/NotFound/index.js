import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { action as homeAction } from '../../store/home'
import './style.scss'

function NotFound(props) {
  const { route } = props

  useEffect(() => {
    props.dispatchUpdateNavName(route.name)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div>
      404
    </div>
  )
}

const mapStateToProps = ({ dashboard, home }) => ({ dashboard, home });

const mapDispatchToProps = (dispatch) => ({
  dispatchUpdateNavName(name) {
    dispatch(homeAction.updateNavName(name))
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(NotFound));