import styled from'styled-components';
import style from '../../assets/global-style';

export const Main = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
`

export const Nav = styled.div`
  background: #fff;
  width: 80px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Logo = styled.div`
  font-weight: bold;
  font-size: 20px;
  text-align: center;
  margin: 20px 0 40px;

  .w0 {
    color: ${style['grey']};
  }
  .w1 {
    color: ${style['accent-color']};
    margin: 0 2px;
  }
  .w2 {
    color: ${style['primary-color']};
  }
`

export const NavItem = styled.div`
  cursor: pointer;
  margin-bottom: 15px;

  &>a {
    width: 40px;
    height: 40px;
    display: inline-block;
    text-align: center;
    line-height: 40px;
    border-radius: 12px;
    &:hover {
      background: ${style['grey']}2e;
    }
    &.active {
      background: ${style['primary-color']};

      &>span {
        color: #fff;
      }
    }

    &>span {
      font-size: 22px;
      color: ${style['grey']};
    }
  }
`

export const Middle = styled.div`
  flex: 1;
  height: 100vh;

  .nav-content {
    height: calc(100% - 60px);
    overflow: auto;
    background: ${style['bg-color']};
    border-radius: 40px 40px 0 0;
    padding: 20px;
  }
`

export const Header = styled.div`
  line-height: 60px;
  padding-left: 10px;
  font-weight: bold;
  font-size: 20px;
`

export const User = styled.div`
  width: 260px;
`