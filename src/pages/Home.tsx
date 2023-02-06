import React from 'react';
import SwiperList from '../components/common/SwiperList';
import styled from 'styled-components';
import { MainTitle } from '@/common/style/common';
import Link from '@/components/main/Link';
import { useNavigate } from 'react-router-dom';
import CourseBox from '@/components/main/CourseList';
import { useCourseQuery } from '@/api/course';
import { banner } from '@/assets/banner';
interface IItems {
    readonly img: string;
    readonly name: string;
}

export default function Home() {
    const swiperUseStatus = process.env.REACT_APP_SWIPER_USE;
    const items: IItems[] = banner;
    //useQuery list
    const { data, status } = useCourseQuery();

    return (
        <MainWrap>
            {swiperUseStatus && <SwiperList lists={items} />}
            <Link />
            <CourseWrap>
                <MainTitle>교육영상</MainTitle>
                <CourseBox lists={data} status={status} />
            </CourseWrap>
        </MainWrap>
    );
}

const MainWrap = styled.div`
    margin-bottom: 30px;
`;

const CourseWrap = styled.div`
    margin-top: 30px;
`;
