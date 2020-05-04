import styled from'styled-components';
import style from '../../assets/global-style';

export const Main = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  overflow: hidden;
`

export const Nav = styled.div`
  background: #fff;
  width: 80px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  .exit {
    position: absolute;
    bottom: 0;
  }
`

export const Logo = styled.div`
  font-weight: bold;
  font-size: 20px;
  text-align: center;
  margin: 40px 0;

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
  background: ${style['bg-color']};
  border-radius: 40px 0 0 0;
  padding: 40px 20px 20px;

  .nav-content {
    overflow: auto;
    padding: 20px;
    height: 100%;
  }

  .header {
    padding-left: 20px;
    font-weight: 500;
    font-size: 20px;
  }
`

export const User = styled.div`
  width: 300px;
  background: ${style['bg-color']};

  .content {
    border-radius: 40px 0 0 0;
    background: #fff;
    width: 100%;
    height: 100vh;

    .content_user {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 30px 60px 20px;

      .content_user_left {
        font-size: 20px;

        .name {
          font-weight: bold;
          margin-top: 10px;
        }
      }

      .content_user_right {
        width: 80px;
        height: 80px;
        border-radius: 40px;

        .content_user_right_avatar {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
    }

    .content_labels {
      display: grid;
      grid-template: 80px / 140px 140px;
      padding: 20px;
    }
    
    .recent_title {
      color: ${style["text-light"]};
      font-size: 14px;
      padding: 20px;
    }

    .recent {
      margin: 0 20px 20px;
      padding: 20px;
      background: ${style["primary-color"]};
      border-radius: 18px;
      overflow: auto;
      height: 340px;

      .recent_item {
        .recent_item_block {
          display: flex;
          justify-content: space-between;
          margin-bottom: 20px;
        }
        .recent_item_text {
          font-size: 16px;
          color: #fff;
        }
        .recent_item_date {
          font-size: 14px;
          color: #fff;
          margin-bottom: 10px;
        }
        .recent_item_arrow {
          font-size: 14px;
          color: #fff;
        }
      }
    }
  }
`

export const Divide = styled.div`
  margin: 20px;
  border-bottom: 1px solid ${style['grey']}33;
`

export const Label = styled.div`
  .label_title {
    color: ${style["text-light"]};
    margin-bottom: 20px;
    font-size: 14px;
  }
  .label_content {
    display: flex;
    align-items: center;

    .label_content_deco {
      height: 30px;
      border-left: 3px solid ${props => props.color};
    }
    .label_content_text {
      font-size: 26px;
      margin-left: 10px;
    }
  }
`

