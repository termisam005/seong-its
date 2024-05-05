import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import ImgComponent from '../../components/common/ImgComponent';
import ButtonComponent from '../../components/common/ButtonComponent';
import Header from '../../components/header/Header';
import GnbComponents from '../../components/header/GnbComponents';
import HeaderLeft from '../../components/header/HeaderLeft';
import HeaderRight from '../../components/header/HeaderRight';
import ProfileComponent from '../../components/common/ProfileComponent';
import HdStatusComponent from '../../components/common/HdStatusComponent';
import HdtimeComponent from '../../components/common/HdtimeComponent';
import ButtonWithComponent from '../../components/common/ButtonWithComponent';
import SelectBoxComponent from '../../components/select/SelectBoxComponent';
import SelectBoxFill from '../../components/select/SelectBoxFill';
import DatepickerFillWith from '../../components/date/DatepickerFillWith';
import LnbDivComponent from '../../components/common/LnbDivComponent';
import ProgressBox from '../../components/map/ProgressBox';
import ProgressComponent from '../../components/map/ProgressComponent';
import DistanceComponent from '../../components/map/DistanceComponent';
import SearchWordComponent from '../../components/search/SearchWordComponent';
import SearchBoardComponent from '../../components/search/SearchBoardComponent';
import FnbSearchBar from '../../components/footer/FnbSearchBar';



const Navigation = () => {

    //SelectBox
    const [selbox, setSelbox] = useState(false);
    const handleFocus = () => {
        setSelbox(!selbox);
    }
    const closeBox = () => {
        setSelbox(false);
    }
    const [currentValue, setCurrentValue] = useState('');
    const onChangeSelectValue = (e) => {
        const {innerText} = e.target;
        setCurrentValue(innerText);
        setSelbox(false);
    }
    const onChangeValue = (e) =>{
        setCurrentValue(e.target.value);
    }

    //tab button
    const [tabButton, setTabButton] = useState(1);
    const onClickTab = (index) => {
        setTabButton(index);
    }

    return (
      <div className='guide_back'>
        <div className='guide_wrap navigation'>
            
            <Header>
                <HeaderLeft />
                <GnbComponents />
                <HeaderRight>
                    <ProfileComponent />
                </HeaderRight>
            </Header>

            <div className='guide_center width1720'>

                <article className='guide_top'>
                    <h1>Navigation</h1>
                </article>

                <article className="Gr_contents">
                    <div className="comp_top flex_wrap">
                        <h2>GNB</h2>
                        <p className="w-100 m-t-12 fs_bold">Tab menu type</p>
                    </div>
                    <section className="comp_conts">
                        <div className="display_grid">

                            <Header headerClass={'posrel'}>
                                <HeaderLeft />
                                <nav className='gnb'>
                                    <ul className='gap_30'>
                                        <li>
                                            <Link to="#" className='on'>Selected</Link>
                                        </li>
                                        <li>
                                            <Link to="#">Default</Link>
                                        </li>
                                        <li>
                                            <Link to="#">Default</Link>
                                        </li>
                                        <li>
                                            <Link to="#">Default</Link>
                                        </li>
                                        <li>
                                            <Link to="#">Default</Link>
                                        </li>
                                    </ul>
                                </nav>
                                <HeaderRight>
                                    <HdStatusComponent stausClass={'hd_status'} markClass={'weath_mark32 some_snow_rain'} textClass={'hd_text'} 
                                    temper={'-23.0℃'} slash={'/'} air={'30mm'} />
                                    <HdtimeComponent stausClass={'hd_status'} textClass={'hd_text'} date={'2022-05-26'} slash={''} time={'14:10:40'} />
                                    <ProfileComponent />
                                </HeaderRight>
                            </Header>                         
                            <div className="gnb_box gap_30 h40 m-t-60">
                                <div className="dflx_ac gap_4">
                                    <ButtonComponent type={'button'} 
                                    className={tabButton === 1? 'btn_gnb_split btn_s selected' : 'btn_gnb_split btn_s'} 
                                    txt={'좌측 화면'} onClick={() => onClickTab(1)} />
                                    <ButtonComponent type={'button'} 
                                    className={tabButton === 2? 'btn_gnb_split btn_s selected' : 'btn_gnb_split btn_s'} 
                                    txt={'중앙 화면'} onClick={() => onClickTab(2)} />
                                    <ButtonComponent type={'button'} 
                                    className={tabButton === 3? 'btn_gnb_split btn_s selected' : 'btn_gnb_split btn_s'} 
                                    txt={'우측 화면'} onClick={() => onClickTab(3)} />
                                    <ButtonComponent type={'button'} 
                                    className={tabButton === 4? 'btn_gnb_split btn_s selected' : 'btn_gnb_split btn_s'} 
                                    txt={'관리자화면'} onClick={() => onClickTab(4)} />
                                </div>
                                <nav className='gnb'>
                                    <ul className='gap_30'>
                                        <li>
                                            <Link to="#" className='on'>Selected</Link>
                                        </li>
                                        <li>
                                            <Link to="#">Default</Link>
                                        </li>
                                        <li>
                                            <Link to="#">Default</Link>
                                        </li>
                                        <li>
                                            <Link to="#">Default</Link>
                                        </li>
                                        <li>
                                            <Link to="#">Default</Link>
                                        </li>
                                    </ul>
                                </nav>
                                <div className="gnb_information gap_30">
                                    <div className="dflx_ac gap_8">
                                        <ImgComponent src={'sometimes_snow_or_rain_32.svg'} />
                                        <span className="fs_14">-23.0ºC / 30mm</span>
                                    </div>
                                    <div className="fs_14">2022-05-26 14:10:40</div>
                                    <div className="hd_profile">
                                        <div className="profile_box on">
                                            <span className="profile20"></span>
                                            <span className="comma_under8"></span>
                                        </div>
                                        <div className="member_popover on p-20">
                                            <div className="tac m-b-12">
                                                <ImgComponent className={''} src={'member_icon_32.svg'} />
                                                <div className="m-t-8">교통행정과</div>
                                            </div>
                                            <div className="dflx_ac_jbet btm_white20 p-t-8 p-b-8 w142">
                                                <span className="fs_12 fc_grey60">아이디</span>
                                                <span className="fs_14_medium">abcdee123</span>
                                            </div>
                                            <div className="dflx_ac_jbet btm_white20 p-t-8 p-b-8 w142">
                                                <span className="fs_12 fc_grey60">이름</span>
                                                <span className="fs_14_medium">홍길동</span>
                                            </div>
                                            <button className="btn_xs m-t-32 w-100 btn_secondary radius_2" type="button">로그아웃</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        
                        <p className="fs_bold m-b-40" style={{marginTop:'300px'}}>Select menu type</p>
                        <Header headerClass={'posrel'}>
                            <HeaderLeft>
                                <SelectBoxComponent selboxClass={selbox? "selectbox w220 fill h28 gap_8 on" : "selectbox w220 fill h28 gap_8"}
                                focus={handleFocus} open={selbox} close={closeBox} onChange={onChangeValue} placeholder={'개별차량 이동경로 시뮬레이션'} currentValue={currentValue}>
                                    <li onClick={onChangeSelectValue} className="option">교통운영1</li>
                                    <li onClick={onChangeSelectValue} className="option">교통운영2</li>
                                    <li onClick={onChangeSelectValue} className="option">교통운영3</li>
                                </SelectBoxComponent>
                            </HeaderLeft>
                            <HeaderRight>
                                <HdStatusComponent stausClass={'hd_status'} markClass={'weath_mark32 clock'} textClass={'hd_text'} temper={'2022-05-26  수요일  14:10:40 '} slash={'/'} air={'0mm'} />
                                <HdStatusComponent stausClass={'hd_status'} markClass={'weath_mark32 very_bad'} textClass={'hd_text'} 
                                temper={'매우나쁨'} slash={'/'} air={'71 ㎍/㎥'} />
                                <ProfileComponent />
                            </HeaderRight>
                        </Header>

                        <h2 className="m-t-120">GNB Items</h2>
                        <p className="fs_14 fc_grey60 m-t-5">시스템 특성에 따라 정보 요소들을 적절히 선택하여 구성</p>

                        <div className="dflx col_gap40">
                            <div>
                                <p className="fs_18_bold m-t-60">Left</p>
                                <p className="fs_14 fc_grey60 m-t-5">로고, 시스템, 서비스명 + 서비스 이동(Select box)</p>
                                <div className="dflx_column black_box m-t-20">
                                    <div className="dflx_as">
                                        <div className="dflx p-l-100">
                                            <div className="dashed_box p-20">
                                                <div className=" gap_40 relative">
                                                    <p className="fs_14 fs_bold" style={{position:'absolute', left:'-120px'}}>Logo</p>
                                                    <div className="dflx_column row_gap20">
                                                        <div className="h40 dflx_ac">
                                                            <ImgComponent src={'gnb_logo.svg'} />
                                                        </div>
                                                        <div className="h40 dflx_ac">
                                                            <ImgComponent src={'gnb_logo_incheon.svg'} />
                                                        </div>
                                                        <div className="h40 dflx_ac">
                                                            <ImgComponent src={'gnb_logo_bucheon.svg'} />
                                                        </div>    
                                                        <div className="h40 dflx_ac">
                                                            <span className="fs_18 fs_bold">인천광역시 통합운영시스템</span>
                                                        </div>  
                                                        </div>                                         
                                                </div>       
                                                <div className="dflx_ac m-t-40 relative">
                                                    <p className="fs_14 fs_bold" style={{position:'absolute', left:'-120px'}}>Select box</p>
                                                    <div className="w220">
                                                        <SelectBoxFill wrapClass={'select_wrap w220'} placeholder={'통합운영시스템'} />
                                                    </div>
                                                </div>    
                                                <div className="dflx_ac m-t-20 relative">
                                                    <p className="fs_14 fs_bold" style={{position:'absolute', left:'-120px'}}>Tab</p>
                                                    <div className="dflx_ac gap_4">
                                                        <ButtonComponent type={'button'} 
                                                        className={tabButton === 1? 'btn_gnb_split btn_s selected' : 'btn_gnb_split btn_s'} 
                                                        txt={'좌측 화면'} onClick={() => onClickTab(1)} />
                                                        <ButtonComponent type={'button'} 
                                                        className={tabButton === 2? 'btn_gnb_split btn_s selected' : 'btn_gnb_split btn_s'} 
                                                        txt={'중앙 화면'} onClick={() => onClickTab(2)} />
                                                        <ButtonComponent type={'button'} 
                                                        className={tabButton === 3? 'btn_gnb_split btn_s selected' : 'btn_gnb_split btn_s'} 
                                                        txt={'우측 화면'} onClick={() => onClickTab(3)} />
                                                        <ButtonComponent type={'button'} 
                                                        className={tabButton === 4? 'btn_gnb_split btn_s selected' : 'btn_gnb_split btn_s'} 
                                                        txt={'관리자화면'} onClick={() => onClickTab(4)} />
                                                    </div>
                                                </div>    
                                            </div>

                                        </div>                                                             
                                    </div>
                                </div>
                            </div>
                            {/* <div>
                                <p className="fs_18_bold m-t-60">Middle</p>
                                <p className="fs_14 fc_grey60 m-t-5">탐색메뉴(대메뉴)탭</p>
                                <div className="dflx_column black_box p-40 m-t-20">
                                    <p className="fs_14 fs_bold">Logo</p>
                                    <nav className='gnb posrel m-t-40'>
                                        <ul className='gap_30'>
                                            <li>
                                                <Link to="#" className='on'>Selected</Link>
                                            </li>
                                            <li>
                                                <Link to="#">Default</Link>
                                            </li>
                                            <li>
                                                <Link to="#">Default</Link>
                                            </li>
                                            <li>
                                                <Link to="#">Default</Link>
                                            </li>
                                            <li>
                                                <Link to="#">Default</Link>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div> */}
                            <div>
                                <p className="fs_18_bold m-t-60">Right</p>
                                <p className="fs_14 fc_grey60 m-t-5"> 주요정보 or 추가 액션메뉴</p>
                                <div className="dflx_column black_box p-20 m-t-20">
                                    <p className="fs_14 fs_bold m-t-10">Date & Time</p>
                                    <div className="dashed_box p-20 m-t-10">
                                        <div className="dflx col_gap20">
                                            <HdtimeComponent stausClass={'hd_status'} markClass={'time_mark20 clock_direct'}
                                            textClass={'hd_text'} date={'2022-05-26'} slash={'수요일'} time={'14:10:40'} />
                                            <HdtimeComponent stausClass={'hd_status'} markClass={'time_mark20 clock'}
                                            textClass={'hd_text'} date={'2022-05-26'} slash={'수요일'} time={'14:10:40'} />
                                        </div>
                                        <div className='m-t-40'>                                            
                                            <HdtimeComponent stausClass={'hd_status'} textClass={'hd_text'} date={'2022-05-26'} time={'14:10:40'} />
                                        </div>
                                        <p className="fs_14 fs_bold m-t-40">Weather</p>
                                        <div className="dflx flx_wrap gap_20 m-t-20">
                                            {/* <HdStatusComponent stausClass={'hd_status'} markClass={'weath_mark32 some_snow_rain'} textClass={'hd_text'} 
                                            temper={'-23.0℃'} slash={'/'} air={'30mm'} />
                                            <HdStatusComponent stausClass={'hd_status'} markClass={'weath_mark32 very_bad'} textClass={'hd_text'} 
                                            temper={'매우나쁨'} slash={'/'} air={'71 ㎍/㎥'} /> */}

                                            {/* 아이콘 추가 */}
                                            <HdStatusComponent stausClass={'hd_status'} markClass={'weath_mark32 sun'} textClass={'hd_text'} 
                                            temper={'맑음'} slash={'/'} air={'0mm'} />

                                            <HdStatusComponent stausClass={'hd_status'} markClass={'weath_mark32 cloud_many'} textClass={'hd_text'} 
                                            temper={'구름많음'} slash={'/'} air={'10mm'} />

                                            <HdStatusComponent stausClass={'hd_status'} markClass={'weath_mark32 cloud'} textClass={'hd_text'} 
                                            temper={'흐림'} slash={'/'} air={'5mm'} />

                                            <HdStatusComponent stausClass={'hd_status'} markClass={'weath_mark32 rain'} textClass={'hd_text'} 
                                            temper={'비'} slash={'/'} air={'30mm'} />

                                            <HdStatusComponent stausClass={'hd_status'} markClass={'weath_mark32 rain_snow'} textClass={'hd_text'} 
                                            temper={'비/눈'} slash={'/'} air={'20mm'} />

                                            <HdStatusComponent stausClass={'hd_status'} markClass={'weath_mark32 snow'} textClass={'hd_text'} 
                                            temper={'눈'} slash={'/'} air={'20mm'} />

                                            <HdStatusComponent stausClass={'hd_status'} markClass={'weath_mark32 shower'} textClass={'hd_text'} 
                                            temper={'소나기'} slash={'/'} air={'100mm'} />

                                            <HdStatusComponent stausClass={'hd_status'} markClass={'weath_mark32 drizzle'} textClass={'hd_text'} 
                                            temper={'빗방울'} slash={'/'} air={'20mm'} />

                                            <HdStatusComponent stausClass={'hd_status'} markClass={'weath_mark32 drizzle_sleet'} textClass={'hd_text'} 
                                            temper={'빗방울/눈날림 '} slash={'/'} air={'10mm'} />

                                            <HdStatusComponent stausClass={'hd_status'} markClass={'weath_mark32 sleet'} textClass={'hd_text'} 
                                            temper={'눈날림'} slash={'/'} air={'10mm'} />
                                        </div>
                                    </div>
                                    <p className="fs_14 fs_bold m-t-60">Profile menu</p>
                                    <div className="dflx gap_40 m-t-20">
                                        <ProfileComponent />
                                    </div>
                                </div>
                            </div>
                        </div>                       
                    </section>
                </article>
                
                <article className="Gr_contents m-t-100">
                    <div className="comp_top flex_wrap">
                        <h2>LNB</h2>
                    </div>
                    <p className="fs_bold">Fixed type</p>
                    <p className="fc_grey60 fs_14 m-t-10 m-b-40">GNB 아래에 상시 노출</p>
                    <section className="comp_conts">

                        <header className="posrel">
                            <article className='header_in'>
                                <HeaderLeft />
                                <nav className='gnb'>
                                    <ul className='gap_30'>
                                        <li>
                                            <Link to="#" className='on'>Selected</Link>
                                        </li>
                                        <li>
                                            <Link to="#">Default</Link>
                                        </li>
                                        <li>
                                            <Link to="#">Default</Link>
                                        </li>
                                        <li>
                                            <Link to="#">Default</Link>
                                        </li>
                                        <li>
                                            <Link to="#">Default</Link>
                                        </li>
                                    </ul>
                                </nav>
                                <HeaderRight>
                                    <HdStatusComponent stausClass={'hd_status'} markClass={'weath_mark32 some_snow_rain'} textClass={'hd_text'} 
                                    temper={'-23.0℃'} slash={'/'} air={'30mm'} />
                                    <HdtimeComponent stausClass={'hd_status'} textClass={'hd_text'} date={'2022-05-26'} slash={''} time={'14:10:40'} />
                                    <ProfileComponent />
                                </HeaderRight>
                            </article>
                            <div className="lnb_box h40 dflx">
                                <div className="lnb_anchor gap_30">
                                    <Link to="#" className='fc_primary'>교통운영 모니터링</Link>
                                    <Link to="#">신호운영 현황</Link>
                                    <Link to="#">시뮬레이션</Link>
                                </div>
                                <div className="m-b-2">
                                    <DatepickerFillWith wrapClass={'date_wrap w220'} />
                                </div>
                            </div>
                        </header>

                    </section>

                    <p className="fs_bold m-t-150">Dropdown type</p>
                    <p className="fc_grey60 fs_14 m-t-10 m-b-40">메뉴 선택 후 자동 닫힘</p>
                    <section className="comp_conts">
                        <header className="posrel">
                            <article className='header_in'>
                                <HeaderLeft>
                                    <SelectBoxFill wrapClass={'select_wrap w220'} placeholder={'placeholder'} />
                                </HeaderLeft>
                                <HeaderRight>
                                    <HdtimeComponent stausClass={'hd_status'} markClass={'time_mark20 clock'} textClass={'hd_text'} 
                                    date={'2022-05-26'} slash={'수요일'} time={'14:10:40'} />
                                    <HdStatusComponent stausClass={'hd_status'} markClass={'weath_mark32 very_bad'} textClass={'hd_text'} 
                                    temper={'매우나쁨'} slash={'/'} air={'71 ㎍/㎥'} />
                                    <ProfileComponent />
                                </HeaderRight>
                            </article>
                            <div className="lnb_box">
                                <div className="lnb_anchor gap_40 on">
                                    <LnbDivComponent topClass={'dflx_ac gap_8 h40 lnb_anchor__title'} titleImgSrc={'gnb_monitoring_fff_20.svg'}
                                    titleClass={'fs_14_medium fc_grey60'} title={'신호운영 모니터링'} subClass={'lnb_sub_anchor gap_20'}>
                                        <li>
                                            <Link to="#">교통운영 모니터링</Link>
                                        </li>
                                        <li>
                                            <Link to="#">신호 운영 현황</Link>
                                        </li>
                                        <li>
                                            <Link to="#">교차로 TOD 조회</Link>
                                        </li>
                                    </LnbDivComponent>
                                    <LnbDivComponent topClass={'dflx_ac gap_8 h40 lnb_anchor__title'} titleImgSrc={'gnb_signal_analysis_fff_20.svg'}
                                    titleClass={'fs_14_medium fc_grey60'} title={'신호운영 분석'} subClass={'lnb_sub_anchor gap_20'}>
                                        <li>
                                            <Link to="#">교차로 분석</Link>
                                        </li>
                                        <li>
                                            <Link to="#">도로 분석</Link>
                                        </li>
                                        <li>
                                            <Link to="#">연동그룹별 분석</Link>
                                        </li>
                                        <li>
                                            <Link to="#">시뮬레이션 비교분석</Link>
                                        </li>
                                    </LnbDivComponent>
                                    <LnbDivComponent topClass={'dflx_ac gap_8 h40 lnb_anchor__title'} titleImgSrc={'gnb_simulation_fff_20.svg'}
                                    titleClass={'fs_14_medium fc_grey60'} title={'시뮬레이션'} subClass={'lnb_sub_anchor gap_20'}>
                                        <li>
                                            <Link to="#" className="selected">개별차량 이동경로 시뮬레이션</Link>
                                        </li>
                                        <li>
                                            <Link to="#">차량별 이동경로 조회</Link>
                                        </li>
                                        <li>
                                            <Link to="#">긴급차량 시뮬레이션 분석</Link>
                                        </li>
                                    </LnbDivComponent>
                                    <LnbDivComponent topClass={'dflx_ac gap_8 h40 lnb_anchor__title'} titleImgSrc={'gnb_analysis_fff_20.svg'}
                                    titleClass={'fs_14_medium fc_grey60'} title={'신호 최적화'} subClass={'lnb_sub_anchor gap_20'}>
                                        <li>
                                            <Link to="#">신호 최적화 분석</Link>
                                        </li>
                                        <li>
                                            <Link to="#">최적화 결과 조회</Link>
                                        </li>
                                        <li>
                                            <Link to="#">연동그룹별 최적화 결과 조회</Link>
                                        </li>
                                    </LnbDivComponent>
                                    <LnbDivComponent divClass={'lnb_administrator m-l-40'} topClass={'dflx_ac gap_8 h40 lnb_anchor__title'} 
                                    titleImgSrc={'gnb_analysis_fff_20.svg'} titleClass={'fs_14_medium fc_grey60'} title={'관리자 메뉴'} subClass={'lnb_sub_anchor gap_20'}>
                                        <li>
                                            <Link to="#">메뉴 권한 관리</Link>
                                        </li>
                                        <li>
                                            <Link to="#">첨두/비첨두 시간 관리</Link>
                                        </li>
                                        <li>
                                            <Link to="#">코드 정보 조회</Link>
                                        </li>
                                        <li>
                                            <Link to="#">교차로 TOD 보고서 관리</Link>
                                        </li>
                                    </LnbDivComponent>
                                </div>
                            </div>
                        </header>
                    </section>

                    <p className="fs_bold" style={{marginTop:'300px'}}>Popup type</p>
                    <p className="fc_grey60 fs_14 m-t-10 m-b-40">LNB하단 화면은 팝업화면이며 X클릭 시 기존 LNB로 복귀함</p>

                    <header className="posrel">
                        <Header headerClass={'posrel'}>
                            <HeaderLeft />
                            <nav className='gnb'>
                                <ul className='gap_30'>
                                    <li>
                                        <Link to="#" className='on'>Selected</Link>
                                    </li>
                                    <li>
                                        <Link to="#">Default</Link>
                                    </li>
                                    <li>
                                        <Link to="#">Default</Link>
                                    </li>
                                    <li>
                                        <Link to="#">Default</Link>
                                    </li>
                                    <li>
                                        <Link to="#">Default</Link>
                                    </li>
                                </ul>
                            </nav>
                            <HeaderRight>
                                <HdStatusComponent stausClass={'hd_status'} markClass={'weath_mark32 some_snow_rain'} textClass={'hd_text'} 
                                temper={'-23.0℃'} slash={'/'} air={'30mm'} />
                                <HdtimeComponent stausClass={'hd_status'} textClass={'hd_text'} date={'2022-05-26'} slash={''} time={'14:10:40'} />
                                <ProfileComponent />
                            </HeaderRight>
                        </Header>
                        <div className="lnb_popup_content">
                            <div className="lnb_popup_title_bg dflx_ac_jbet">
                                <span className="fc_primary fs_20_medium">Popup title</span>
                                <ButtonWithComponent type="button">
                                    <ImgComponent src={'close_line_fff_24.svg'} />
                                </ButtonWithComponent>
                            </div>
                        </div>
                    </header>

                </article>

                <article className="Gr_contents m-t-140">
                    <div className="comp_top flex_wrap">
                        <h2>FNB</h2>
                    </div>
                    <p className="fs_bold">Type 1</p>
                    <p className="fc_grey60 fs_14 m-t-10 m-b-40">GNB와 함께 사용</p>
                    <section className="comp_conts">
                        <div className="dflx_jbet gap_40">
                            <div className="tab_line">
                                <ButtonWithComponent className={'btn_icon icon_ffb btn_m tooltip_parents selected'}>
                                    <ImgComponent className={'img w24 op04'} src={'layer_fff_24.svg'} />
                                    <ImgComponent className={'img_on w24 '} src={'layer_sky_24.svg'} />
                                    <div className="tooltip_label">
                                        레이어
                                    </div>
                                </ButtonWithComponent>
                                <ButtonWithComponent className={'btn_icon icon_ffb btn_m tooltip_parents'}>
                                    <ImgComponent className={'img w24 op04'} src={'legend_fff_24.svg'} />
                                    <ImgComponent className={'img_on w24 '} src={'legend_sky_24.svg'} />
                                    <div className="tooltip_label">
                                        범례
                                    </div>
                                </ButtonWithComponent>
                                <ButtonWithComponent className={'btn_icon icon_ffb btn_m tooltip_parents'}>
                                    <ImgComponent className={'img w24 op04'} src={'linked_group_fill_fff_24.svg'} />
                                    <ImgComponent className={'img_on w24 '} src={'linked_group_fill_sky_24.svg'} />
                                    <div className="tooltip_label">
                                        연동그룹
                                    </div>
                                </ButtonWithComponent>
                            </div>
                            <div className="dflx">
                                <div className="playbar_type2_box mini h40">
                                    <div className="w-100 dflx_ac_jcent gap_20">
                                        <span className="fc_grey87 fs_14_medium">시뮬레이션 재생시간</span>
                                        <span className="fc_grey87 fs_14_medium">08:55:08</span>
                                    </div>
                                </div>
                            </div>
                            <div className="dflx ai_end gap_16">
                                <DistanceComponent distClass={'map_scale_box'} distance={'5km'} />
                                <div>
                                    <div className="tab_line">
                                        <ButtonWithComponent className={'btn_icon icon_ffb btn_m'}>
                                            <ImgComponent className={'w24'} src={'minus_fff_24.svg'} />
                                        </ButtonWithComponent>
                                        <ButtonWithComponent className={'btn_icon icon_ffb btn_m'}>
                                            <ImgComponent className={'w24'} src={'plus_line_fff_24.svg'} />
                                        </ButtonWithComponent>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="dflx_jbet gap_40 m-t-60">
                            <div className="dflx">
                                <div className="tab_line">
                                    <ButtonWithComponent className={'btn_icon icon_ffb btn_m tooltip_parents'}>
                                        <ImgComponent className={'img w24 op04'} src={'layer_fff_24.svg'} />
                                        <ImgComponent className={'img_on w24 '} src={'layer_sky_24.svg'} />
                                        <div className="tooltip_label">
                                            레이어
                                        </div>
                                    </ButtonWithComponent>
                                    <ButtonWithComponent className={'btn_icon icon_ffb btn_m tooltip_parents'}>
                                        <ImgComponent className={'img w24 op04'} src={'legend_fff_24.svg'} />
                                        <ImgComponent className={'img_on w24 '} src={'legend_sky_24.svg'} />
                                        <div className="tooltip_label">
                                            범례
                                        </div>
                                    </ButtonWithComponent>
                                    <ButtonWithComponent className={'btn_icon icon_ffb btn_m tooltip_parents'}>
                                        <ImgComponent className={'img w24 op04'} src={'linked_group_fill_fff_24.svg'} />
                                        <ImgComponent className={'img_on w24 '} src={'linked_group_fill_sky_24.svg'} />
                                        <div className="tooltip_label">
                                            연동그룹
                                        </div>
                                    </ButtonWithComponent>
                                </div>    
                                <div className="connect_line h40 m-l-8">
                                    <ButtonWithComponent className={'btn_icon btn_m selected'}>
                                        <ImgComponent className={'img w24 op04'} src={'map_fill_fff_24.svg'} />
                                        <ImgComponent className={'img_on w24 '} src={'map_fill_sky_24.svg'} />
                                        <span className="word">소통정보</span>
                                    </ButtonWithComponent>
                                    <ButtonWithComponent className={'btn_icon btn_m'}>
                                        <ImgComponent className={'img w24 op04'} src={'machine_20.svg'} />
                                        <ImgComponent className={'img_on w24 '} src={'machine_sky_20.svg'} />
                                        <span className="word">시설물</span>
                                    </ButtonWithComponent>
                                    <ButtonWithComponent className={'btn_icon btn_m'}>
                                        <ImgComponent className={'img w24 op04'} src={'heatmap_fill_fff_24.svg'} />
                                        <ImgComponent className={'img_on w24 '} src={'heatmap_fill_sky_24.svg'} />
                                        <span className="word">히트맵</span>
                                    </ButtonWithComponent>
                                    <ButtonWithComponent className={'btn_icon btn_m'}>
                                        <ImgComponent className={'img w24 op04'} src={'analysis_fill_fff_24.svg'} />
                                        <ImgComponent className={'img_on w24 '} src={'analysis_fill_sky_24.svg'} />
                                        <span className="word">현황</span>
                                    </ButtonWithComponent>
                                </div>
                            </div>
                            <div className="btn_fnb_tab h40 fnb_absolute_tab">
                                <ButtonComponent className={'btn_m w120 selected'} txt={'상황관리'} />
                                <ButtonComponent className={'btn_m w120'} txt={'긴급차량'} />
                            </div>
                            <div className="dflx ai_end gap_16">
                                <DistanceComponent distClass={'map_scale_box'} distance={'5km'} />
                                <ProgressComponent size='large'>
                                    <ProgressBox boxClass={'progress_box h40'} />
                                </ProgressComponent>
                            </div>
                        </div>
                        <div className="dflx_jbet gap_40 m-t-60">
                            <div className="fnb_search_bar on">
                                <ButtonWithComponent className={'tooltip_parents btn_icon large'}>
                                    <ImgComponent className={'img w24 op04'} src={'layer_fff_24.svg'} />
                                    <ImgComponent className={'img_on w24 '} src={'layer_sky_24.svg'} />
                                    <div className="tooltip_label">
                                        레이어
                                    </div>
                                </ButtonWithComponent>
                                <ButtonWithComponent className={'tooltip_parents btn_icon large'}>
                                    <ImgComponent className={'img w24 op04'} src={'legend_fff_24.svg'} />
                                    <ImgComponent className={'img_on w24 '} src={'legend_sky_24.svg'} />
                                    <div className="tooltip_label">
                                        범례
                                    </div>
                                </ButtonWithComponent>
                                <ButtonWithComponent className={'w40 selected btn_fnb_search'}>
                                    <ImgComponent className={'img op04'} src={'search_fff_24.svg'} />
                                    <ImgComponent className={'img_on'} src={'search_sky_24.svg'} />
                                    <div className="tooltip_label">
                                        검색
                                    </div>
                                </ButtonWithComponent>
                                <div className="search_bar_input">
                                    <div className="dflx_ac gap_8">
                                        <select className="selector w120 fill">
                                            <option value="">CCTV</option>
                                            <option value="">CCTV1</option>
                                            <option value="">CCTV2</option>
                                            <option value="">CCTV3</option>
                                        </select>
                                        <SearchWordComponent lineClass={'srch_line'} zoneClass={'put_zone w240'} type={'text'} placeholder={'Search'} />
                                    </div>
                                </div>
                            </div>
                            <div className="btn_fnb_tab h40 fnb_absolute_tab">
                                <ButtonComponent className={'btn_m w120 selected'} txt={'상황관리'} />
                                <ButtonComponent className={'btn_m w120'} txt={'긴급차량'} />
                            </div>

                            <div className="dflx ai_end gap_16">
                                <DistanceComponent distClass={'map_scale_box'} distance={'5km'} />
                                <div className="connect_line h40">
                                    <ButtonWithComponent className={'btn_icon btn_m selected'}>
                                        <ImgComponent className={'img w24 op04'} src={'map_fill_fff_24.svg'} />
                                        <ImgComponent className={'img_on w24 '} src={'map_fill_sky_24.svg'} />
                                        <span className="word">소통정보</span>
                                    </ButtonWithComponent>
                                    <ButtonWithComponent className={'btn_icon btn_m'}>
                                        <ImgComponent className={'img w24 op04'} src={'machine_20.svg'} />
                                        <ImgComponent className={'img_on w24 '} src={'machine_sky_20.svg'} />
                                        <span className="word">소통정보</span>
                                    </ButtonWithComponent>
                                    <ButtonWithComponent className={'btn_icon btn_m'}>
                                        <ImgComponent className={'img w24 op04'} src={'heatmap_fill_fff_24.svg'} />
                                        <ImgComponent className={'img_on w24 '} src={'heatmap_fill_sky_24.svg'} />
                                        <span className="word">히트맵</span>
                                    </ButtonWithComponent>
                                    <ButtonWithComponent className={'btn_icon btn_m'}>
                                        <ImgComponent className={'img w24 op04'} src={'analysis_fill_fff_24.svg'} />
                                        <ImgComponent className={'img_on w24 '} src={'analysis_fill_sky_24.svg'} />
                                        <span className="word">현황</span>
                                    </ButtonWithComponent>
                                </div>
                                <div className="tab_line">
                                    <ButtonWithComponent className={'btn_icon icon_ffb btn_m'}>
                                        <ImgComponent className={'w24'} src={'minus_fff_24.svg'} />
                                    </ButtonWithComponent>
                                    <ButtonWithComponent className={'btn_icon icon_ffb btn_m'}>
                                        <ImgComponent className={'w24'} src={'plus_line_fff_24.svg'} />
                                    </ButtonWithComponent>
                                </div>
                            </div>
                        </div>
                    </section>

                    <p className="fs_bold m-t-60">Type 2</p>
                    <p className="fc_grey60 fs_14 m-t-10 m-b-40">네비게이션이 Header가 아닌 footer에 위치하는 경우</p>
                    <section className="comp_conts">
                        <div className="relative">

                            <div className="footer_nav p-l-20">
                                <SearchBoardComponent lineClass={'srch_line'} zoneClass={'put_zone w240'} btClass={"bt_srch op04"}
                                type={'text'} placeholder={'부천시(전체)'} />
                                <div className="gnb_anchor gap_30">
                                    <a className="fc_primary">메인</a>
                                    <a>교통소통</a>
                                    <a>Default</a>
                                    <a>Default</a>
                                </div>
                                <DistanceComponent distClass={'map_scale_box type2 m-l-a'} distance={'5km'} />
                                <div className="dflx m-l-20 footer_ffb">                                
                                    <ButtonWithComponent className={'btn_l w64 icon_ffb tooltip_parents selected'}>
                                        <ImgComponent className={'img w24 op04'} src={'setting_fill_fff_24.svg'} />
                                        <ImgComponent className={'img_on w24 '} src={'setting_fill_sky_24.svg'} />
                                        <div className="tooltip_label">설정</div>
                                    </ButtonWithComponent>
                                    <ButtonWithComponent className={'btn_l w64 icon_ffb tooltip_parents'}>
                                        <ImgComponent className={'img w24 op04'} src={'filter_fff_24.svg'} />
                                        <ImgComponent className={'img_on w24 '} src={'filter_sky_24.svg'} />
                                        <div className="tooltip_label">레이어 관리</div>
                                    </ButtonWithComponent>
                                    <ButtonWithComponent className={'btn_l w64 icon_ffb tooltip_parents'}>
                                        <ImgComponent className={'img w24 op04'} src={'layer_fff_24.svg'} />
                                        <ImgComponent className={'img_on w24 '} src={'layer_sky_24.svg'} />
                                        <div className="tooltip_label">레이어</div>
                                    </ButtonWithComponent>
                                    <ButtonWithComponent className={'btn_l w64 icon_ffb tooltip_parents'}>
                                        <ImgComponent className={'img w24 op04'} src={'legend_fff_24.svg'} />
                                        <ImgComponent className={'img_on w24 '} src={'legend_sky_24.svg'} />
                                        <div className="tooltip_label">범례</div>
                                    </ButtonWithComponent>
                                    <ButtonWithComponent className={'btn_l w64 icon_ffb tooltip_parents'}>
                                        <ImgComponent className={'img w24 op04'} src={'logout_fff_24.svg'} />
                                        <ImgComponent className={'img_on w24 '} src={'logout_fff_24.svg'} />
                                        <div className="tooltip_label">로그아웃</div>
                                    </ButtonWithComponent>
                                </div>
                            </div>

                        </div>
                    </section>

                    <h2 style={{marginTop:'200px'}}>FNB Items</h2>
                    <p className="fc_grey60 fs_14 m-t-10 m-b-40">시스템 특성에 따라 정보 요소들을 적절히 선택하여 구성</p>
                    <div className="dflx_as col_gap40">
                        <section className="comp_conts">
                            <p className="fs_18_bold m-t-20">Left</p>
                            <div className="black_box p-40 p-r-16 m-t-20">
                                <p className="fs_12 fc_grey60">Toggle</p>
                                <div className="tab_line m-t-20">
                                    <ButtonWithComponent className={'btn_icon icon_ffb btn_m tooltip_parents'}>
                                        <ImgComponent className={'img w24 op04'} src={'layer_fff_24.svg'} />
                                        <ImgComponent className={'img_on w24 '} src={'layer_sky_24.svg'} />
                                        <div className="tooltip_label">레이어</div>
                                    </ButtonWithComponent>
                                    <ButtonWithComponent className={'btn_icon icon_ffb btn_m tooltip_parents m-l-40'}>
                                        <ImgComponent className={'img w24 op04'} src={'layer_fff_24.svg'} />
                                        <ImgComponent className={'img_on w24 '} src={'layer_sky_24.svg'} />
                                        <div className="tooltip_label">레이어</div>
                                    </ButtonWithComponent>
                                    <ButtonWithComponent className={'btn_icon icon_ffb btn_m tooltip_parents'}>
                                        <ImgComponent className={'img w24 op04'} src={'legend_fff_24.svg'} />
                                        <ImgComponent className={'img_on w24 '} src={'legend_sky_24.svg'} />
                                        <div className="tooltip_label">범례</div>
                                    </ButtonWithComponent>
                                    <ButtonWithComponent className={'btn_icon icon_ffb btn_m tooltip_parents m-l-40'}>
                                        <ImgComponent className={'img w24 op04'} src={'layer_fff_24.svg'} />
                                        <ImgComponent className={'img_on w24 '} src={'layer_sky_24.svg'} />
                                        <div className="tooltip_label">
                                            레이어
                                        </div>
                                    </ButtonWithComponent>
                                    <ButtonWithComponent className={'btn_icon icon_ffb btn_m tooltip_parents'}>
                                        <ImgComponent className={'img w24 op04'} src={'legend_fff_24.svg'} />
                                        <ImgComponent className={'img_on w24 '} src={'legend_sky_24.svg'} />
                                        <div className="tooltip_label">
                                            범례
                                        </div>
                                    </ButtonWithComponent>
                                    <ButtonWithComponent className={'btn_icon icon_ffb btn_m tooltip_parents'}>
                                        <ImgComponent className={'img w24 op04'} src={'linked_group_fill_fff_24.svg'} />
                                        <ImgComponent className={'img_on w24 '} src={'linked_group_fill_sky_24.svg'} />
                                        <div className="tooltip_label">
                                            연동그룹
                                        </div>
                                    </ButtonWithComponent>
                                </div>
                                <p className="fs_12 fc_grey60 m-t-60">With search</p>
                                <div className="dflx m-t-20">
                                    <FnbSearchBar>
                                        <ButtonWithComponent className={'btn_icon icon_ffb btn_m tooltip_parents'}>
                                            <ImgComponent className={'img w24 op04'} src={'layer_fff_24.svg'} />
                                            <ImgComponent className={'img_on w24 '} src={'layer_sky_24.svg'} />
                                            <div className="tooltip_label">레이어</div>
                                        </ButtonWithComponent>
                                        <ButtonWithComponent className={'tooltip_parents btn_icon large'}>
                                            <ImgComponent className={'img w24 op04'} src={'legend_fff_24.svg'} />
                                            <ImgComponent className={'img_on w24 '} src={'legend_sky_24.svg'} />
                                            <div className="tooltip_label">범례</div>
                                        </ButtonWithComponent>
                                    </FnbSearchBar>
                                </div>
                                <div className="fnb_search_bar m-t-20 on">
                                    <ButtonWithComponent className={'btn_icon icon_ffb btn_m tooltip_parents'}>
                                        <ImgComponent className={'img w24 op04'} src={'layer_fff_24.svg'} />
                                        <ImgComponent className={'img_on w24 '} src={'layer_sky_24.svg'} />
                                        <div className="tooltip_label">레이어</div>
                                    </ButtonWithComponent>
                                    <ButtonWithComponent className={'tooltip_parents btn_icon large'}>
                                        <ImgComponent className={'img w24 op04'} src={'legend_fff_24.svg'} />
                                        <ImgComponent className={'img_on w24 '} src={'legend_sky_24.svg'} />
                                        <div className="tooltip_label">범례</div>
                                    </ButtonWithComponent>
                                    <ButtonWithComponent className={'w40 btn_fnb_search selected'}>
                                        <ImgComponent className={'img op04'} src={'search_fff_24.svg'} />
                                        <ImgComponent className={'img_on'} src={'search_sky_24.svg'} />
                                        <div className="tooltip_label">범례</div>
                                    </ButtonWithComponent>
                                    <div className="search_bar_input">
                                        <div className="dflx_ac gap_8">
                                            <select className="selector w120 fill">
                                                <option value="">label 1</option>
                                                <option value="">label 2</option>
                                                <option value="">label 3</option>
                                                <option value="">label 4</option>
                                            </select>
                                            <SearchWordComponent lineClass={'srch_line'} zoneClass={'put_zone w176'} type={'text'} placeholder={'placeholder'} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="comp_conts">
                            <p className="fs_18_bold m-t-20 m-t-20">Middle</p>
                            <div className="black_box p-40 p-r-16 m-t-20">
                                <div className="m-t-20 gap_20">
                                    <div className="dflx_ac">
                                        <p className="fs_12 fc_grey60 w100">Toggle</p>
                                        <div className="playbar_type2_box mini h40">
                                            <div className="w-100 dflx_ac_jcent gap_20">
                                                <span className="fc_white fs_14_medium">시뮬레이션 재생시간</span>
                                                <span className="fc_white fs_14_medium">08:55:08</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="dflx_ac m-t-40">
                                        <p className="fs_12 fc_grey60 w100">Tab</p>
                                        <div className="btn_fnb_tab h40">
                                            <ButtonComponent type={'button'} className={'btn_m w120 selected'} txt={'상황관리'} />
                                            <ButtonComponent type={'button'} className={'btn_m w120'} txt={'긴급차량'} />
                                        </div>
                                    </div>  
                                    <div className="dflx_ac m-t-20">
                                        <p className="fs_12 fc_grey60 w100"></p>                                
                                        <div className="btn_fnb_tab h40">
                                            <ButtonComponent type={'button'} className={'btn_m w120 selected'} txt={'상황관리'} />
                                            <ButtonComponent type={'button'} className={'btn_m w120'} txt={'긴급출동'} />
                                            <ButtonComponent type={'button'} className={'btn_m w120'} txt={'돌발검지'} />
                                        </div>
                                    </div>
                                    <div className="dflx_ac m-t-40">
                                        <p className="fs_12 fc_grey60 w100">+Badge</p>                                
                                        <div className="btn_fnb_tab h40">
                                            <ButtonComponent type={'button'} className={'btn_m w120 selected on tab_button'} txt={'상황관리'} />
                                            <ButtonComponent type={'button'} className={'btn_m w120 on tab_button'} txt={'긴급출동'} />
                                            <ButtonComponent type={'button'} className={'btn_m w120 on tab_button'} txt={'돌발검지'} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className="comp_conts">
                            <p className="fs_18_bold m-t-20">Right</p>
                            <div className="black_box p-40 p-r-16 m-t-20">
                                <div className="dflx_ac">
                                    <p className="fs_12 fc_grey60 w100">Map scale</p>                                
                                    <div className="tab_line">
                                        <ButtonWithComponent className={'btn_icon icon_ffb btn_m'}>
                                            <ImgComponent className={'w24'} src={'minus_fff_24.svg'} />
                                        </ButtonWithComponent>
                                        <ButtonWithComponent className={'btn_icon icon_ffb btn_m'}>
                                            <ImgComponent className={'w24'} src={'plus_line_fff_24.svg'} />
                                        </ButtonWithComponent>
                                    </div>
                                </div>
                                <div className="dflx_ac m-t-40">
                                    <p className="fs_12 fc_grey60 w100"></p>  
                                    <ProgressComponent size='large'>
                                        <ProgressBox boxClass={'progress_box h40'} />
                                    </ProgressComponent>
                                </div>
                                <div className="dflx_ac m-t-40">
                                    <p className="fs_12 fc_grey60 w100">Map type</p>  
                                    <div className="connect_line h40">
                                        <ButtonWithComponent className={'btn_icon btn_m selected'}>
                                            <ImgComponent className={'img w24 op04'} src={'map_fill_fff_24.svg'} />
                                            <ImgComponent className={'img_on w24 '} src={'map_fill_sky_24.svg'} />
                                            <span className="word">일반</span>
                                        </ButtonWithComponent>
                                        <ButtonWithComponent className={'btn_icon btn_m'}>
                                            <ImgComponent className={'img w24 op04'} src={'satellite_fill_fff_24.svg'} />
                                            <ImgComponent className={'img_on w24 '} src={'satellite_fill_sky_24.svg'} />
                                            <span className="word">위성</span>
                                        </ButtonWithComponent>
                                        <ButtonWithComponent className={'btn_icon btn_m'}>
                                            <ImgComponent className={'img w24 op04'} src={'mountain_fill_fff_24.svg'} />
                                            <ImgComponent className={'img_on w24 '} src={'mountain_fill_sky_24.svg'} />
                                            <span className="word">지형</span>
                                        </ButtonWithComponent>
                                    </div>
                                </div>
                                <div className="dflx_ac m-t-20">
                                    <p className="fs_12 fc_grey60 w100"> </p>  
                                    <div className="connect_line h40">
                                        <ButtonWithComponent className={'btn_icon btn_m selected'}>
                                            <ImgComponent className={'img w24 op04'} src={'map_fill_fff_24.svg'} />
                                            <ImgComponent className={'img_on w24 '} src={'map_fill_sky_24.svg'} />
                                            <span className="word">소통정보</span>
                                        </ButtonWithComponent>
                                        <ButtonWithComponent className={'btn_icon btn_m'}>
                                            <ImgComponent className={'img w24 op04'} src={'machine_20.svg'} />
                                            <ImgComponent className={'img_on w24 '} src={'machine_sky_20.svg'} />
                                            <span className="word">시설물</span>
                                        </ButtonWithComponent>
                                        <ButtonWithComponent className={'btn_icon btn_m'}>
                                            <ImgComponent className={'img w24 op04'} src={'heatmap_fill_fff_24.svg'} />
                                            <ImgComponent className={'img_on w24 '} src={'heatmap_fill_sky_24.svg'} />
                                            <span className="word">히트맵</span>
                                        </ButtonWithComponent>
                                        <ButtonWithComponent className={'btn_icon btn_m'}>
                                            <ImgComponent className={'img w24 op04'} src={'analysis_fill_fff_24.svg'} />
                                            <ImgComponent className={'img_on w24 '} src={'analysis_fill_sky_24.svg'} />
                                            <span className="word">현황</span>
                                        </ButtonWithComponent>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>

                </article>

            </div>

        </div>
      </div>
    );
};

export default Navigation;
