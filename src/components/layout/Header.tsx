import React from 'react';
import styled, { css } from 'styled-components';
import { ContainerDiv } from '@/common/style/common';
import { HeaderAndFooter } from '@/common/style/common';
import { useNavigate } from 'react-router-dom';
import Nav from '../common/Nav';

export default function Header() {
    const navigate = useNavigate();

    const goToHome = () => {
        navigate('/');
    };

    const goToLogin = () => {
        navigate('/user/sign-in');
    };

    return (
        <HeaderWrap>
            <ContainerDiv>
                <div className="header_left">
                    <div className="logo" onClick={goToHome}>
                        <img src="/img/logo.svg" alt="LOGO" />
                    </div>
                    <Nav />
                </div>
                <ul className="header_right">
                    <li onClick={goToLogin}>
                        <img src="/img/icon.svg" alt="ICON" />
                    </li>
                </ul>
            </ContainerDiv>
        </HeaderWrap>
    );
}

const HeaderWrap = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 70px;
    background-color: #29293f;
    color: #fff;

    > div {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .header_left {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: 15px;
    }

    .header_left > ul {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: 1rem;
    }

    .header_left > ul > li {
        cursor: pointer;
    }

    .logo {
        width: 45px;
        margin-right: 15px;
        cursor: pointer;
        transition: all 0.8s ease-in-out;
    }

    .header_right li {
        width: 25px;
        color: #fff;
        cursor: pointer;
    }

    ${HeaderAndFooter}
    @media screen and (max-width: 380px) {
        .header_left ul {
            display: none;
        }
    } ;
`;
