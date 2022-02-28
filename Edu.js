import React from 'react';
import Tittle from './Tittle';
import { InnerLayout } from '../Global/Layouts';
import SchoolIcon from '@material-ui/icons/School';
import SmallTitle from './SmallTitle';
import EduItems from './EduItems';

function Edu() {
    const school = <SchoolIcon />
    return ( 
        <div className="Edu-class">
            <Tittle title='Education' span='Education' />
            <InnerLayout className="inner-layout">
                <SmallTitle icon={school} title={'Education'} />
                <div className="Edu-item">
                    <EduItems
                        year={'2018-2022'}
                        title={'Bachelor of Engineering (B.E.)'}
                        subTitle={'Rajiv Gandhi College of Engineering and Research'}
                        text={'Computer Science Engineering'} />
                    <EduItems
                        year={'2016-2018'}
                        title={'Higher Secondary School (H.S.C)'}
                        subTitle={'Dharampeth MP Deo Memorial Science College'}
                        text={'General Science '} />
                    <EduItems
                        year={'2010-2016'}
                        title={'Secondary School (S.S.C)'}
                        subTitle={'Saraswati Vidyalaya'}
                        text={'High School'} />
                </div>
            </InnerLayout>
        </div>

    )
}



export default Edu;