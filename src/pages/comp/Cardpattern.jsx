import React from 'react';
import { useState } from 'react';
import Header from '../../components/header/Header';
import GnbComponents from '../../components/header/GnbComponents';
import HeaderLeft from '../../components/header/HeaderLeft';
import HeaderRight from '../../components/header/HeaderRight';
import ProfileComponent from '../../components/common/ProfileComponent';
import ImgComponent from '../../components/common/ImgComponent';
import ButtonComponent from '../../components/common/ButtonComponent';

import TmboxComponent from '../../components/card/TmboxComponent';
import SmarttopComponent from '../../components/card/SmarttopComponent';
import SmartContComponent from '../../components/card/SmartContComponent';
import IndidlComponent from '../../components/card/IndidlComponent';
import TabledlComponent from '../../components/card/TabledlComponent';
import WeatherSign from '../../components/card/WeatherSign';
import DustcontComponent from '../../components/card/DustcontComponent';
import ExpPagingComponent from '../../components/common/ExpPagingComponent';


const Cardpattern = () => {

    return (
      <div className='guide_back'>
        <div className='guide_wrap cards'>
            
            <Header>
                <HeaderLeft />
                <GnbComponents />
                <HeaderRight>
                    <ProfileComponent />
                </HeaderRight>
            </Header>

            <div className='guide_center width1720'>

                <article className='guide_top'>
                    <h1>Cards pattern</h1>
                </article>

                <article className="Gr_contents m-t-100">
                    <section className="comp_conts">
                        <div className="grid_column4 col_gap30">
                            <div className='w280'>
                                <TmboxComponent className={'tmbox'}>
                                    <div className="tmbox_top">
                                        <p className="tmbox_date">
                                            <span>2022년 01월 23일 21:12</span>
                                        </p>
                                    </div>
                                    <dl className="tm_dl">
                                        <dt>
                                            <p>[생생뉴스] 부천시청 앞 추출사고</p>
                                        </dt>
                                        <dd>
                                            <p className='pure'>부천시민 A씨는 무단횡단자를 피해 부천시청 앞 3차선에서 2차선에서 주행중인 시민 B씨와 부딪힐 뻔 했습니다.</p>
                                        </dd>
                                        <p className="detail_see">
                                            <span className="word">더보기</span>
                                            <span className="mark_trig_down12"></span>
                                        </p>
                                    </dl>
                                </TmboxComponent>
                                <TmboxComponent className={'tmbox'}>
                                    <div>
                                        <div className="tmbox_top">
                                            <p className="tmbox_date">
                                                <span>2022년 01월 23일 21:12</span>
                                            </p>
                                            <span className='sign_tri2 jam'></span>
                                        </div>
                                        <dl className="tm_dl">
                                            <dt>
                                                <p>송내역 사거리 정체발생(평균속도 2km/h) 이하</p>
                                            </dt>
                                            <dd>
                                                <div className='map_ex1'>
                                                    <ImgComponent src={'map_ex1.svg'} />
                                                </div>
                                                <div className="label_line m-b-8">
                                                    <span className="label_tag label_color15 fs_11">부분통제(진행중)</span>
                                                </div>
                                                <p>완료예정시간: 2022년 01월 23일 19:30</p>
                                            </dd>
                                            <p className="detail_see">
                                                <span className="word">더보기</span>
                                                <span className="mark_trig_down12"></span>
                                            </p>
                                        </dl>
                                    </div>
                                </TmboxComponent>
                                <TmboxComponent className={'tmbox'}>
                                    <div className="">
                                        <div className="tmbox_top">
                                            <p className="tmbox_date">
                                                <span>2022년 01월 23일 21:12</span>
                                            </p>
                                            <span className='sign_tri2 jam'></span>
                                        </div>
                                        <dl className="tm_dl">
                                            <dt>
                                                <p>솔안공원입구교차로~송내역앞교차로</p>
                                            </dt>
                                            <dd>
                                                <div className="label_line m-b-8">
                                                    <span className="label_tag grade_color06 fs_12_medium">지체</span>
                                                </div>
                                                <p>현재 속도: 19.78km/h</p>
                                            </dd>
                                            <p className="detail_see">
                                                <span className="word">더보기</span>
                                                <span className="mark_trig_down12"></span>
                                            </p>
                                        </dl>
                                    </div>
                                </TmboxComponent>
                                <TmboxComponent className={'tmbox'}>
                                    <div className="tmbox_top">
                                        <p className="tmbox_date">
                                            <span>2022년 01월 23일 21:12</span>
                                        </p>
                                        <span className="label_tag grade_color06 fs_12_medium">지체</span>
                                    </div>
                                    <dl className="tm_dl">
                                        <dt>
                                            <p>솔안공원입구교차로~송내역앞교차로</p>
                                        </dt>
                                        <dd>
                                            <p className='pure'>평균 속도: 19.78km/h</p>
                                        </dd>
                                        <p className="detail_see">
                                            <span className="word">더보기</span>
                                            <span className="mark_trig_down12"></span>
                                        </p>
                                    </dl>
                                </TmboxComponent>
                            </div>

                            <div className='w280'>
                                <div className="indi_share">
                                    <IndidlComponent dlClass={'indi_dl half'} title={'평균예측 정확도'} 
                                    result={'51.23'} unitClass={'unit'} unit={'%'} />
                                    <IndidlComponent dlClass={'indi_dl half'} title={'정체발생예측건수'} 
                                    result={'19'} unitClass={'unit'} unit={'건'} />
                                </div>
                                <div className="indi_share">
                                    <IndidlComponent dlClass={'indi_dl third'} title={'교차로'} result={'227'} />
                                    <IndidlComponent dlClass={'indi_dl third green'} title={'원활'} result={'227'} />
                                    <IndidlComponent dlClass={'indi_dl third red'} title={'정체'} result={'208'} />
                                </div>
                                <div className="indi_share">
                                    <IndidlComponent dlClass={'indi_dl'} title={'속도'} result={'F'} />
                                    <IndidlComponent dlClass={'indi_dl'} title={'지체시간'} result={'A'} />
                                    <IndidlComponent dlClass={'indi_dl'} title={'대기행렬'} result={'C'} />
                                    <IndidlComponent dlClass={'indi_dl'} title={'교통량'} result={'F'} />
                                </div>
                                <div className="vert_2line m-t-30">
                                    <div className="exp_cont p-4 hauto">
                                        <div className="dflx_as_jbet m-t-4 m-b-4">
                                            <p className="fs_13 fc_primary">지체시간</p>
                                            <p className="fs_13 fc_primary dflx_ae">
                                                <span>71</span>
                                                <span>초</span>
                                            </p>
                                        </div>
                                        <div className="speed_box table bord">
                                            <TabledlComponent dlClass={'table_dl'} title={'전일'} ddClass={'tar p-r-8'} ddText={'00.00 (▾ 00)'} />
                                            <TabledlComponent dlClass={'table_dl'} title={'전주'} ddClass={'tar p-r-8'} ddText={'00.00 (▾ 00)'} />
                                        </div>
                                    </div>
                                    <div className="exp_cont p-4 hauto">
                                        <div className="dflx_as_jbet m-t-4 m-b-4">
                                            <p className="fs_13 fc_primary">대기행렬</p>
                                            <p className="fs_13 fc_primary dflx_ae">
                                                <span>398</span>
                                                <span>m</span>
                                            </p>
                                        </div>
                                        <div className="speed_box table bord">
                                            <TabledlComponent dlClass={'table_dl'} title={'전일'} ddClass={'tar p-r-8'} ddText={'00.00 (▾ 00)'} />
                                            <TabledlComponent dlClass={'table_dl'} title={'전주'} ddClass={'tar p-r-8'} ddText={'00.00 (▾ 00)'} />
                                        </div>
                                    </div>
                                </div>
                                <div className="vert_2line m-t-30">
                                    <div className="speed_box dflx_ac_jcent">
                                        <h1 className="speed_result">
                                            <span>12,000</span>
                                            <span className="unit">대</span>
                                        </h1>
                                    </div>
                                    <div className="speed_box table bord">
                                        <TabledlComponent dlClass={'table_dl'} title={'전일'} ddClass={'tar p-r-8'} ddText={'00.00 (-00)'} />
                                        <TabledlComponent dlClass={'table_dl'} title={'전주'} ddClass={'tar p-r-8'} ddText={'00.00 (-00)'} />
                                    </div>
                                </div>
                                <div className="m-t-30">
                                    <div className="tab_line m-b-8">
                                        <ButtonComponent className={'btn_line1 btn_xs selected'} txt={'오늘'} />
                                        <ButtonComponent className={'btn_line1 btn_xs'} txt={'내일'} />
                                    </div>
                                    <section className="exp_weather gap_4">
                                        <article className="weather_cont">
                                            <WeatherSign weatherClass={'weather_sign h-100'} markClass={'weath_mark56 sun'} 
                                            resultClass={'dflx_ae fs_18_medium fc_white'} temper={'-12.3'} unitClass={'unit fs_12'} unit={'℃'} 
                                            textClass={'fs_12 m-t-4'} text={'가끔 눈 또는 비'} />
                                        </article>
                                        <article className="weather_cont">
                                            <div className="weather_box">
                                                <dl className="weath_dl">
                                                    <dt>풍향</dt>
                                                    <dd>서</dd>
                                                </dl>
                                                <dl className="weath_dl">
                                                    <dt>풍속</dt>
                                                    <dd>2.1%</dd>
                                                </dl>
                                                <dl className="weath_dl">
                                                    <dt>2.1%</dt>
                                                    <dd>82%</dd>
                                                </dl>
                                                <dl className="weath_dl">
                                                    <dt>1시간 강수량</dt>
                                                    <dd>0 ㎜</dd>
                                                </dl>
                                            </div>
                                        </article>
                                    </section>
                                    <section className="dflx_ac gap_4">
                                        <DustcontComponent contClass={'dust_cont'} recordClass={'weath_record m-b-4'} record={'초 미세먼지'} 
                                        resultClass={'dflx_ac fs_18_medium fc_white'} countClass={'fc_green m-r-4'} count={'24'} 
                                        unitClass={'unit fs_12 op06'} unit={'㎍/㎥'} />
                                        <DustcontComponent contClass={'dust_cont'} recordClass={'weath_record m-b-4'} record={'미세먼지'} 
                                        resultClass={'dflx_ac fs_18_medium fc_white'} countClass={'fc_yellow m-r-4'} count={'135'} 
                                        unitClass={'unit fs_12 op06'} unit={'㎍/㎥'} />
                                    </section>
                                </div>
                                <div className="m-t-30">
                                    <TmboxComponent className={'tmbox p-8'}>
                                        <div className="dflx_jend">
                                            <span className="record m-b-8">
                                                기준일: 2023.01.01
                                            </span>
                                        </div>
                                        <div className="dflx_as_jbet">
                                            <div className="w-65">
                                                <dl className="start_dl">
                                                    <dd>충돌건수</dd>
                                                    <dt className="p-t-8">
                                                        <span>7</span>
                                                        <span>건</span>
                                                    </dt>
                                                </dl>
                                            </div>
                                            <div className="w-35">
                                                <div className="speed_box table bord">
                                                    <dl className="table_dl">
                                                        <dt className="op06">소방</dt>
                                                        <dd className="tar p-r-8">42건</dd>
                                                    </dl>
                                                    <dl className="table_dl">
                                                        <dt className="op06">경찰</dt>
                                                        <dd className="tar p-r-8">3건</dd>
                                                    </dl>
                                                </div>
                                            </div>
                                        </div>
                                    </TmboxComponent>
                                </div>
                                <div className="m-t-30">
                                    <section className="emer_detail">
                                        <dl className="park_dl">
                                            <dt className="op06">목적지</dt>
                                            <dd>순천향대학교부천병원응급실</dd>
                                        </dl>
                                        <dl className="park_dl">
                                            <dt className="op06">예상시간</dt>
                                            <dd>2022.02.23. 21:14:52</dd>
                                        </dl>
                                        <dl className="park_dl">
                                            <dt className="op06">유형</dt>
                                            <dd>소방</dd>
                                        </dl>
                                        <dl className="park_dl">
                                            <dt className="op06">세부유형</dt>
                                            <dd>사고 부상</dd>
                                        </dl>
                                        <dl className="park_dl">
                                            <dt className="op06">차량번호</dt>
                                            <dd>34가 6905</dd>
                                        </dl>
                                        <dl className="park_dl">
                                            <dt className="op06">기타</dt>
                                            <dd>-</dd>
                                        </dl>
                                    </section>
                                </div>
                            </div>

                            <div className='w280'>
                                <section className="dflx_ac gap_4">
                                    <DustcontComponent contClass={'dust_cont'} recordClass={'weath_record m-b-4'} record={'30분 평균속도예보'} 
                                    resultClass={'dflx_ae fs_18_medium fc_white'} countClass={'m-r-4'} count={'12.1'} 
                                    unitClass={'unit fs_12 op06 m-b-2'} unit={'km/h'} />
                                    <DustcontComponent contClass={'dust_cont'} recordClass={'weath_record m-b-4'} record={'정체발생 예측 건수'} 
                                    resultClass={'dflx_ae fs_18_medium fc_white'} countClass={'m-r-4'} count={'14'} 
                                    unitClass={'unit fs_12 op06 m-b-2'} unit={'건'} />
                                </section>
                                <section className="m-t-4">
                                    <div className="fore_box">
                                        <dl className="fore_dl">
                                            <dt className="m-b-4">시티월드앞교차로</dt>
                                            <span className="label_tag grade_color02 fs_11">30분 예측</span>
                                        </dl>
                                        <div className="fore_cent">
                                            <ImgComponent className={'img_arrow'} src={'arrow_right_yellow_36.svg'} />
                                            <p className="status danger">정체</p>
                                        </div>
                                        <dl className="fore_dl">
                                            <dt className="m-b-4">오류동삼거리</dt>
                                            <span className="label_tag grade_color08 fs_11">5.6% 개선</span>
                                        </dl>
                                    </div>
                                    <div className="fore_box">
                                        <dl className="fore_dl">
                                            <dt className="m-b-4">외발산삼거리</dt>
                                            <span className="label_tag grade_color02 fs_11">30분 예측</span>
                                        </dl>
                                        <div className="fore_cent">
                                            <ImgComponent className={'img_arrow'} src={'arrow_right_yellow_36.svg'} /> 
                                            <p className="status danger">정체</p>
                                        </div>
                                        <dl className="fore_dl">
                                            <dt className="m-b-4">외발산사거리</dt>
                                            <span className="label_tag grade_color08 fs_11">5.6% 개선</span>
                                        </dl>
                                    </div>
                                </section>
                                <section className="m-t-30">
                                    <div className="bg_traffic p-8">
                                    <div className="dflx_ac m-b-10">
                                            <span className="label_tag grade_color06 fs_11">지체</span>
                                            <span className="label_txt">외발산지하차도북측 ~ 공항천주교앞교차로</span>
                                    </div>
                                    <div className="dflx_ac w-100 m-b-4">
                                            <span className="sp_graph sky" style={{width:'30%'}}></span>
                                            <span className="fs_11 op06 m-l-8">18.0 km/h</span>
                                    </div>
                                    <div className="dflx_ac w-100 m-b-4">
                                            <span className="sp_graph" style={{width:'20%'}}></span>
                                            <span className="fs_11 op06 m-l-8">21.3 km/h</span>
                                        </div>
                                    </div>
                                    <div className="bg_traffic p-8 m-t-4">
                                        <div className="dflx_ac m-b-10">
                                            <span className="label_tag grade_color02 fs_11">정체</span>
                                            <span className="label_txt">시티월드앞교차로 ~ 오류동삼거리</span>
                                        </div>
                                        <div className="dflx_ac w-100 m-b-4">
                                            <span className="sp_graph sky" style={{width:'30%'}}></span>
                                            <span className="fs_11 op06 m-l-8">18.0 km/h</span>
                                        </div>
                                        <div className="dflx_ac w-100 m-b-4">
                                            <span className="sp_graph" style={{width:'20%'}}></span>
                                            <span className="fs_11 op06 m-l-8">21.3 km/h</span>
                                        </div>
                                    </div>
                                    <div className="dflx_ac_jcent m-t-12">
                                        <div className="dflx_ac">
                                            <span className="sp_graph sky"></span>
                                            <span className="fs_11 m-l-8">누적</span>
                                    </div>
                                    <div className="dflx_ac m-l-16">
                                            <span className="sp_graph"></span>
                                            <span className="fs_11 m-l-8">현재</span>
                                        </div>
                                    </div>
                                </section>
                                <section className="m-t-30">
                                    <div className="bg_traffic p-8">
                                    <div className="dflx_ac m-b-10">
                                            <span className="label_tag grade_color08 fs_11">일반</span>
                                            <span className="fs_16_medium p-l-8">10</span>
                                            <span className="label_txt fs_12">제이드카운티 1단지 방면</span>
                                    </div>
                                    <dl className="busrt_dl">
                                            <dt className="op06 fs_11">1번째</dt>
                                            <dd>
                                                <span className="fs_14">7분 후</span>
                                                <div className="busrt_wrap m-l-8">
                                                    <span className="call">5번째 전</span>
                                                    <span className="green">여유</span>
                                                    <span className="green">저상</span>
                                                </div>
                                            </dd>
                                    </dl>
                                    <dl className="busrt_dl m-t-5">
                                            <dt className="op06 fs_11">2번째</dt>
                                            <dd>
                                                <span className="fs_14">20분 후</span>
                                                <div className="busrt_wrap m-l-8">
                                                    <span className="call">20번째 전</span>
                                                    <span className="red">혼잡</span>
                                                    <span className="green">저상</span>
                                                </div>
                                            </dd>
                                        </dl>
                                    </div>
                                    <div className="bg_traffic p-8 m-t-4">
                                        <div className="dflx_ac m-b-10">
                                            <span className="label_tag grade_color08 fs_11">일반</span>
                                            <span className="fs_16_medium p-l-8">10</span>
                                            <span className="label_txt fs_12">제이드카운티 1단지 방면</span>
                                    </div>
                                    <dl className="busrt_dl">
                                            <dt className="op06 fs_11">1번째</dt>
                                            <dd>
                                                <span className="fs_14">7분 후</span>
                                                <div className="busrt_wrap m-l-8">
                                                    <span className="call">5번째 전</span>
                                                    <span className="green">여유</span>
                                                    <span className="green">저상</span>
                                                </div>
                                            </dd>
                                        </dl>
                                        <dl className="busrt_dl m-t-5">
                                            <dt className="op06 fs_11">2번째</dt>
                                            <dd>
                                                <span className="fs_14">20분 후</span>
                                                <div className="busrt_wrap m-l-8">
                                                    <span className="call">20번째 전</span>
                                                    <span className="red">혼잡</span>
                                                    <span className="green">저상</span>
                                                </div>
                                            </dd>
                                        </dl>
                                    </div>
                                    <ExpPagingComponent/>
                                </section>
                                <article className="bg_traffic m-t-30">
                                    <div className="road_traffic">
                                        <article className="line_bus">
                                            <p className="ic_artff"></p>
                                            <div className="bb_line"></div>
                                            <div className="list_bus">
                                                <dl className="box_dl bus_dl">
                                                    <dd>
                                                        <p className="tff_text">
                                                            용문내공원
                                                        </p>
                                                        <p className="hints">
                                                            용문내공원
                                                        </p>
                                                    </dd>
                                                </dl>
                                            </div>
                                        </article>
                                        <article className="line_bus">
                                            <p className="ic_artff"></p>
                                            <div className="bb_line"></div>
                                            <div className="list_bus">
                                                <dl className="box_dl bus_dl">
                                                    <dd>
                                                        <p className="tff_text">
                                                            용문내공원
                                                        </p>
                                                        <p className="hints">
                                                            용문내공원
                                                        </p>
                                                    </dd>
                                                </dl>
                                            </div>
                                        </article>
                                        <article className="line_bus">
                                            <p className="ic_artff"></p>
                                            <div className="bb_line org"></div>
                                            <div className="list_bus">
                                                <dl className="box_dl bus_dl">
                                                    <dd>
                                                        <p className="tff_text">
                                                            용문내공원
                                                        </p>
                                                        <p className="hints">
                                                            12514
                                                        </p>
                                                    </dd>
                                                </dl>
                                            </div>
                                        </article>
                                        <article className="line_bus">
                                            <p className="ic_artff"></p>
                                            <div className="bb_line red"></div>
                                            <div className="list_bus">
                                                <dl className="box_dl bus_dl">
                                                    <dd>
                                                        <p className="tff_text">
                                                            용문내공원
                                                        </p>
                                                        <p className="hints">
                                                            12514
                                                        </p>
                                                    </dd>
                                                </dl>
                                            </div>
                                        </article>
                                    </div>
                                </article>
                                <section className="emer_vms m-t-30">
                                    <div className="vms_top">
                                        <div className="dflx_ac">
                                            <p className="vms_word">석촌역</p>
                                            <ImgComponent className={'arr_right'} src={'arrow_bold_right_fff_12.svg'} />
                                            <p className="vms_word">방이역</p>
                                        </div>
                                        <p className="vms_word danger m-l-8">정체</p>
                                    </div>
                                    <div className="vms_monit">
                                        <ImgComponent src={'ex_vms.svg'} />
                                    </div>
                                    <div className="vms_top p-12 m-t-40">
                                        <p className="vms_word tac fc_yellow">
                                            <span className="display_block">송내역</span>
                                            <span className="display_block m-t-4">송내대로</span>
                                        </p>
                                        <ImgComponent className={'arr_right w20'} src={'arrow_bold_right_fff_20.svg'} />
                                        <p className="vms_word tac fc_yellow">
                                            <span className="display_block">중동대로</span>
                                            <span className="display_block m-t-4 fc_light_green">정체</span>
                                        </p>
                                    </div>
                                </section>
                            </div>
                            <div className="bott_info chart">
                                <SmarttopComponent smartClass={'smart_top'} labelClass={'label_tag label_color07 fs_12_medium'}
                                label={'최적화(RNN.TF)'} dateClass={'date'} datetime={'19:00'} />
                                <section className="smart_chart_wrap">
                                    <div className="chart">
                                        <ImgComponent className={'w120'} src={'chart_pie_120.svg'} />
                                    </div>
                                    <SmartContComponent className={'smart_cont bott'}>
                                        <p className="sm_result">
                                            <span className="fs_24_medium">12.42</span>
                                            <span className="mini">%</span>
                                        </p>
                                        <p className="sm_txt lh_16 m-t-4">
                                            통과교통량<br/>
                                            개선율
                                        </p>
                                    </SmartContComponent>
                                </section>
                            </div>
                        </div>
                    </section>
                </article>

            </div>

        </div>
      </div>
    );
};

export default Cardpattern;
