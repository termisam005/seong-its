import React from 'react';
import { useState } from 'react';
import Header from '../../components/header/Header';
import GnbComponents from '../../components/header/GnbComponents';
import HeaderLeft from '../../components/header/HeaderLeft';
import HeaderRight from '../../components/header/HeaderRight';
import ProfileComponent from '../../components/common/ProfileComponent';
import ImgComponent from '../../components/common/ImgComponent';
import CheckComponent from '../../components/common/CheckComponent';
import ButtonComponent from '../../components/common/ButtonComponent';
import ButtonWithComponent from '../../components/common/ButtonWithComponent';
import SelectComponent from '../../components/select/SelectComponent';
import PopupComponent from '../../components/popup/PopupComponent';

import InputComponent from '../../components/input/InputComponent';
import InputLargeComponent from '../../components/input/InputLargeComponent';
import InputLargeLineComponent from '../../components/input/InputLargeLineComponent';
import InputPassLargeComponent from '../../components/input/InputPassLargeComponent';
import InputMdComponent from '../../components/input/InputMdComponent';
import InputMdLineComponent from '../../components/input/InputMdLineComponent';
import InputPassMdComponent from '../../components/input/InputPassMdComponent';
import InputZoneComponent from '../../components/input/InputZoneComponent';
import InputPassComponent from '../../components/input/InputPassComponent';

import SearchSettComponent from '../../components/search/SearchSettComponent';
import SearchSettLineComponent from '../../components/search/SearchSettLineComponent';
import SearchWordComponent from '../../components/search/SearchWordComponent';
import SearchWordLineComponent from '../../components/search/SearchWordLineComponent';
import SearchBoardComponent from '../../components/search/SearchBoardComponent';
import SearchBoardLineComponent from '../../components/search/SearchBoardLineComponent';

import EditorTextComponent from '../../components/editor/EditorTextComponent';
import EditorVms1Component from '../../components/editor/EditorVms1Component';
import EditorVms2Component from '../../components/editor/EditorVms2Component';
import EditorVms3Component from '../../components/editor/EditorVms3Component';



const Input = () => {

    //아이디 이벤트
    const [id, setId] = useState('');
    const [idInput, setIdinput] = useState();
    const [deletor, setDeletor] = useState(false);

    const writePut = (e) => {
        setId(e.target.value);
        setIdinput(true);
        setDeletor(true);
    }
    const onDelete = (e) => {
        setId(e.target.value = '');
        setIdinput(false);
        setDeletor(false);
    }

    //비밀번호 이벤트
    const [password, setPassword] = useState('');
    const [viewer, setViewer] = useState(false);

    const writePass = (e) => {
        setPassword(e.target.value);
    }
    const onSee = (e) => {
        setPassword(e.target.value);
        setViewer(!viewer);
    }

    return (
        <div className='guide_back'>
            <div className='guide_wrap'>
            
                <Header>
                    <HeaderLeft />
                    <GnbComponents />
                    <HeaderRight>
                        <ProfileComponent />
                    </HeaderRight>
                </Header>

                <div className='guide_center width1720'>

                    <article className='guide_top'>
                        <h1>Input field</h1>
                    </article>
                    <article className="Gr_contents m-t-100">
                        <section className="comp_conts dflx col_gap20">
                            <div>
                                <h1 className="fs_28_bold w172 m-t-60">Text input</h1>
                            </div>
                            <dl className="comp_dl">
                                <dd className="comp_dd">
                                    <div className="components col_gap20 m-b-20">
                                        <p className="comp_size m-r-40"></p>
                                        <p className="w320 fs_bold">28px</p>
                                        <p className="w320"></p>
                                        <p className="w320 fs_bold">40px</p>
                                        <p className="w320"></p>
                                    </div>
                                    <div className="components col_gap20">
                                        <p className="comp_size m-r-40"></p>
                                        <p className="sub_font w320">Fill</p>
                                        <p className="sub_font w320">Line</p>
                                        <p className="sub_font w320">Fill</p>
                                        <p className="sub_font w320">Line</p>
                                    </div>
                                    <div className="compline">
                                        <p className="comp_size m-r-40">Empty</p>
                                        <div className="components col_gap20">
                                            <InputZoneComponent zoneClass={'put_zone w320'} type={'text'} placeholder={'placeholder'} 
                                            value={id} onChange={writePut} onDelete={onDelete} 
                                            inputClass={'wrput'} 
                                            deleteClass={deletor? 'put_check put_delete dflx' : 'put_check put_delete'}  />
                                            <InputZoneComponent zoneClass={'put_zone w320'} type={'text'} placeholder={'placeholder'} 
                                            value={id} onChange={writePut} onDelete={onDelete} 
                                            inputClass={'wrput line'} 
                                            deleteClass={deletor? 'put_check put_delete dflx' : 'put_check put_delete'}  />
                                            <InputZoneComponent zoneClass={'put_zone w320'} type={'text'} placeholder={'아이디'} 
                                            value={id} onChange={writePut} onDelete={onDelete} 
                                            inputClass={'wrput large'} 
                                            deleteClass={deletor? 'put_check put_delete dflx' : 'put_check put_delete'}  />
                                            <InputZoneComponent zoneClass={'put_zone w320'} type={'text'} placeholder={'placeholder'} 
                                            value={id} onChange={writePut} onDelete={onDelete} 
                                            inputClass={'wrput large line'} 
                                            deleteClass={deletor? 'put_check put_delete dflx' : 'put_check put_delete'}  />
                                        </div>
                                    </div>
                                    <div className="compline m-t-25">
                                        <p className="comp_size m-r-40">Focus</p>
                                        <div className="components col_gap20">
                                            <div className="put_zone w320">
                                                <InputComponent className={'wrput on'} type={'text'} placeholder="" value="인" />
                                                <span className="put_check put_delete dpblock">
                                                    <ImgComponent className={'w12 op06'} src={"close_fill_fff_12.svg"} />
                                                </span>
                                            </div>
                                            <div className="put_zone w320">
                                                <InputComponent className={'wrput line on'} type={'text'} placeholder="" value="인" />
                                                <span className="put_check put_delete dpblock">
                                                    <ImgComponent className={'w12 op06'} src={"close_fill_fff_12.svg"} />
                                                </span>
                                            </div>
                                            <div className="put_zone w320">
                                                <InputComponent className={'wrput large on'} type={'text'} placeholder="아이디" value="가" />
                                                <span className="put_check put_delete dpblock">
                                                    <ImgComponent className={'w12 op06'} src={"close_fill_fff_12.svg"} />
                                                </span>
                                            </div>
                                            <div className="put_zone w320">
                                                <InputComponent className={'wrput large line on'} type={'text'} placeholder="아이디" value="가" />
                                                <span className="put_check put_delete dpblock">
                                                    <ImgComponent className={'w12 op06'} src={"close_fill_fff_12.svg"} />
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="compline m-t-25">
                                        <p className="comp_size m-r-40">view</p>
                                        <div className="components col_gap20">
                                            <div className="put_zone w320">
                                            </div>
                                            <div className="put_zone w320">
                                            </div>
                                            <InputPassLargeComponent zoneClass={'put_zone w320'} type={'password'} inputClass={'wrput pass large'} placeholder={'비밀번호'} 
                                            value={password} onChange={writePass} onSee={onSee} 
                                            seeClass={'put_check put_see'}  />
                                            <InputPassLargeComponent zoneClass={'put_zone w320'} type={'password'} inputClass={'wrput pass large line'} placeholder={'비밀번호'} 
                                            value={password} onChange={writePass} onSee={onSee} 
                                            seeClass={'put_check put_see'}  />
                                        </div>
                                    </div>

                                    <div className="compline m-t-25">
                                        <p className="comp_size m-r-40">hide</p>
                                        <div className="components col_gap20">
                                            <div className="w320"></div>
                                            <div className="w320"></div>
                                            <InputPassComponent zoneClass={'put_zone w320'} type={'password'} inputClass={'wrput pass large'} placeholder={'비밀번호'} 
                                            value={'비밀번호'} onChange={writePass} onSee={onSee} 
                                            seeClass={'put_check put_see on'} />
                                            <InputPassComponent zoneClass={'put_zone w320'} type={'password'} inputClass={'wrput pass large line'} placeholder={'비밀번호'} 
                                            value={'비밀번호'} onChange={writePass} onSee={onSee} 
                                            seeClass={'put_check put_see on'} />
                                        </div>
                                    </div>
                                    
                                    <div className="compline m-t-25">
                                        <p className="comp_size m-r-40">Complete</p>
                                        <div className="components col_gap20">
                                            <InputZoneComponent zoneClass={'put_zone w320'} type={'text'} placeholder={'placeholder'} 
                                            value={'Done'} onChange={writePut} onDelete={onDelete} 
                                            inputClass={'wrput'} 
                                            deleteClass={deletor? 'put_check put_delete dflx' : 'put_check put_delete'}  />
                                            <InputZoneComponent zoneClass={'put_zone w320'} type={'text'} placeholder={'placeholder'} 
                                            value={'Done'} onChange={writePut} onDelete={onDelete} 
                                            inputClass={'wrput line'} 
                                            deleteClass={deletor? 'put_check put_delete dflx' : 'put_check put_delete'}  />                                            
                                            <InputZoneComponent zoneClass={'put_zone w320'} type={'text'} placeholder={'placeholder'} 
                                            value={'Done'} onChange={writePut} onDelete={onDelete} 
                                            inputClass={'wrput large'} 
                                            deleteClass={deletor? 'put_check put_delete dflx' : 'put_check put_delete'}  />
                                            <InputZoneComponent zoneClass={'put_zone w320'} type={'text'} placeholder={'placeholder'} 
                                            value={'Done'} onChange={writePut} onDelete={onDelete} 
                                            inputClass={'wrput large line'} 
                                            deleteClass={deletor? 'put_check put_delete dflx' : 'put_check put_delete'}  />                                           
                                        </div>
                                    </div>

                                    <div className="compline m-t-25">
                                        <p className="comp_size m-r-40">Error</p>
                                        <div className="components col_gap20">
                                            <div className="w320">
                                            </div>
                                            <div className="w320">
                                            </div>
                                            <InputZoneComponent zoneClass={'put_zone w320'} type={'text'} placeholder={'아이디'} 
                                            value={'Label'} onChange={writePut} onDelete={onDelete} 
                                            inputClass={'wrput large error'} 
                                            deleteClass={deletor? 'put_check put_delete dflx' : 'put_check put_delete'} messClass={'mess error'} message={'Error message'} />  
                                            <InputZoneComponent zoneClass={'put_zone w320'} type={'text'} placeholder={'아이디'} 
                                            value={'Label'} onChange={writePut} onDelete={onDelete} 
                                            inputClass={'wrput large line error'} 
                                            deleteClass={deletor? 'put_check put_delete dflx' : 'put_check put_delete'} messClass={'mess error'} message={'Error message'} /> 
                                        </div>
                                    </div>

                                    <div className="compline">
                                        <p className="comp_size m-r-40"></p>
                                        <div className="components col_gap20">
                                            <div className="w320"></div>
                                            <div className="w320"></div>
                                            <InputPassComponent zoneClass={'put_zone w320'} type={'password'} inputClass={'wrput pass large error'} placeholder={'비밀번호'} 
                                            value={'비밀번호'} onChange={writePass} onSee={onSee} 
                                            seeClass={'put_check put_see on'} messClass={'mess error'} message={'Error message'} />
                                            <InputPassComponent zoneClass={'put_zone w320'} type={'password'} inputClass={'wrput pass large line error'} placeholder={'비밀번호'} 
                                            value={'비밀번호'} onChange={writePass} onSee={onSee} 
                                            seeClass={'put_check put_see on'}  messClass={'mess error'} message={'Error message'} />
                                        </div>
                                    </div>
                                </dd>
                            </dl>
                        </section>

                        <dl className="comp_dl">
                            <dt className="comp_dt fs_28_bold w172 m-r-100">Read only</dt>
                            <dd className="comp_dd">
                                <div className="compline col_gap20">
                                    <InputZoneComponent zoneClass={'put_zone w320'} type={'text'} placeholder={'아이디'} value={'Default'} inputClass={'wrput read_only'} readonly 
                                    deleteClass={deletor? 'put_check put_delete dflx' : 'put_check put_delete'} />  
                                    <div className="w320"></div>
                                    <InputZoneComponent zoneClass={'put_zone w320'} type={'text'} placeholder={'아이디'} value={'Default'} inputClass={'wrput large read_only'} readonly 
                                    deleteClass={deletor? 'put_check put_delete dflx' : 'put_check put_delete'} />
                                </div>
                                <div className="compline col_gap20 m-t-25">
                                    <InputZoneComponent zoneClass={'put_zone w320'} type={'text'} placeholder={'아이디'} value={'Default'} inputClass={'wrput read_light'} readonly 
                                    deleteClass={deletor? 'put_check put_delete dflx' : 'put_check put_delete'} />
                                    <div className="w320"></div>
                                    <InputZoneComponent zoneClass={'put_zone w320'} type={'text'} placeholder={'아이디'} value={'Default'} inputClass={'wrput large read_light'} readonly 
                                    deleteClass={deletor? 'put_check put_delete dflx' : 'put_check put_delete'} />
                                </div>
                                <div className="compline col_gap20 m-t-25">
                                    <InputZoneComponent zoneClass={'put_zone w320'} type={'text'} placeholder={'아이디'} value={'Error'} inputClass={'wrput read_error'} readonly 
                                    deleteClass={deletor? 'put_check put_delete dflx' : 'put_check put_delete'} />
                                    <div className="w320"></div>
                                    <InputZoneComponent zoneClass={'put_zone w320'} type={'text'} placeholder={'아이디'} value={'Error'} inputClass={'wrput large read_error'} readonly 
                                    deleteClass={deletor? 'put_check put_delete dflx' : 'put_check put_delete'} />
                                </div>
                                <div className="compline col_gap20 m-t-25">
                                    <InputZoneComponent zoneClass={'put_zone w320'} type={'text'} placeholder={'아이디'} value={'Normal'} inputClass={'wrput read_normal'} readonly 
                                    deleteClass={deletor? 'put_check put_delete dflx' : 'put_check put_delete'} />
                                    <div className="w320"></div>
                                    <InputZoneComponent zoneClass={'put_zone w320'} type={'text'} placeholder={'아이디'} value={'Normal'} inputClass={'wrput large read_normal'} readonly 
                                    deleteClass={deletor? 'put_check put_delete dflx' : 'put_check put_delete'} />
                                </div>
                            </dd>
                        </dl>

                        <dl className="comp_dl">
                            <dt className="comp_dt fs_28_bold w172">Text area</dt>
                            <dd className="comp_dd">    
                                <div className="compline col_gap20">
                                    <p className="comp_size as_start m-r-40 p-t-20">Empty</p>
                                    <div className="temrs_text_wrap w320">
                                        <textarea className="terms_area scroll" placeholder="Text Area"></textarea>
                                    </div>
                                    <div className="temrs_text_wrap line w320">
                                        <textarea className="terms_area scroll" placeholder="Text Area"></textarea>
                                    </div>
                                </div>
                                <div className="compline col_gap20">
                                    <p className="comp_size as_start m-r-40 p-t-20">Read only</p>
                                    <div className="temrs_text_wrap line_fill w320">
                                        <textarea className="terms_area scroll" placeholder="Text Area">Text area</textarea>
                                    </div>
                                    <div className="w320"></div>
                                    <div className="temrs_text_wrap line_fill w320">
                                        <textarea className="terms_area scroll" placeholder="Text Area">Text area</textarea>
                                    </div>
                                </div>
                            </dd>
                        </dl>

                        <dl className="comp_dl m-b-100">
                            <dt className="comp_dt fs_28_bold w172">Search</dt>
                            <dd className="comp_dd">
                                <div className="compline gap_20">
                                </div>
                                <div className="compline col_gap60  m-b-25">
                                    <p className="comp_size">Default</p>
                                    <SearchSettComponent lineClass={'srch_line'} zoneClass={'put_zone w240'} type={'text'} placeholder={'Search'} />
                                    <SearchSettLineComponent lineClass={'srch_line'} zoneClass={'put_zone w240'} type={'text'} placeholder={'Search'} />
                                </div>

                                <div className="compline col_gap60  m-b-25"> 
                                    <p className="comp_size"></p>    
                                    <SearchWordComponent lineClass={'srch_line'} zoneClass={'put_zone w226'} type={'text'} placeholder={'Search'} />      
                                    <SearchWordLineComponent lineClass={'srch_line'} zoneClass={'put_zone w226'} type={'text'} placeholder={'Search'} />
                                </div>

                                <div className="compline col_gap60 m-b-25">
                                    <p className="comp_size"></p>
                                    <SearchBoardComponent lineClass={'srch_line'} zoneClass={'put_zone w226'} btClass={"bt_srch op04"}
                                    type={'text'} placeholder={'검색'} />
                                    <SearchBoardLineComponent lineClass={'srch_line'} zoneClass={'put_zone w226'} btClass={"bt_srch op04"}
                                    type={'text'} placeholder={'검색'} />
                                </div>

                                <div className="compline col_gap60  m-b-25">
                                    <p className="comp_size">Focused</p>
                                    <div className="srch_line">
                                        <div className="put_zone w240">
                                            <InputComponent className={'wrput on'} type={'text'} placeholder="" value="인" />
                                            <span className="put_check put_delete dpblock">
                                                <ImgComponent className={'w12 op06'} src={"close_fill_fff_12.svg"} />
                                            </span>
                                        </div>
                                        <ButtonWithComponent type={'submit'} className={'btn_srch28 on'}>
                                            <span className="dflx_ac_jcent op06">
                                                <ImgComponent className={'w20'} src={'icon_srch_20.svg'} />
                                            </span>
                                        </ButtonWithComponent>
                                    </div>
                                    <div className="srch_line">
                                        <div className="put_zone w240">
                                            <InputComponent className={'wrput line on'} type={'text'} placeholder="" value="인" />
                                            <span className="put_check put_delete dpblock">
                                                <ImgComponent className={'w12 op06'} src={"close_fill_fff_12.svg"} />
                                            </span>
                                        </div>
                                        <ButtonWithComponent type={'submit'} className={'btn_srch28 on'}>
                                            <span className="dflx_ac_jcent op06">
                                                <ImgComponent className={'w20'} src={'icon_srch_20.svg'} />
                                            </span>
                                        </ButtonWithComponent>
                                    </div>
                                </div>

                                <div className="compline col_gap60 m-b-25">
                                    <p className="comp_size"></p>
                                    <div className="srch_line">
                                        <div className="put_zone w226">
                                            <InputComponent className={'wrput on'} type={'text'} placeholder="" value="인" />
                                            <span className="put_check put_delete dpblock">
                                                <ImgComponent className={'w12 op06'} src={"close_fill_fff_12.svg"} />
                                            </span>
                                        </div>
                                        <ButtonWithComponent type={'submit'} className={'btn_srch28 on word shadow'} >
                                            검색
                                        </ButtonWithComponent>
                                    </div>
                                    <div className="srch_line">
                                        <div className="put_zone w226">
                                            <InputComponent className={'wrput line on'} type={'text'} placeholder="" value="인" />
                                            <span className="put_check put_delete dpblock">
                                                <ImgComponent className={'w12 op06'} src={"close_fill_fff_12.svg"} />
                                            </span>
                                        </div>
                                        <ButtonWithComponent type={'submit'} className={'btn_srch28 on word shadow'} >
                                            검색
                                        </ButtonWithComponent>
                                    </div>
                                </div>

                                <div className="compline col_gap60 m-b-25">
                                    <p className="comp_size"></p>
                                    <div className="srch_line">
                                        <div className="put_zone w226">     
                                            <div className="srch_zone w-100 wrput on">
                                                <button type="button" className={'bt_srch op04'}></button>
                                                <InputComponent className={'fs_13 fc_white m-l-8'} type={'text'} placeholder="" value="인" />
                                                <span className="put_check put_delete dpblock">
                                                    <ImgComponent className={'w12 op06'} src={"close_fill_fff_12.svg"} />
                                                </span>
                                            </div>
                                        </div>
                                        <ButtonWithComponent type={'submit'} className={'btn_srch28 on word shadow'} >
                                            검색
                                        </ButtonWithComponent>
                                    </div>
                                    <div className="srch_line">
                                        <div className="put_zone w226">     
                                            <div className="srch_zone w-100 wrput line on">
                                                <button type="button" className={'bt_srch op04'}></button>
                                                <InputComponent className={'fs_13 fc_white m-l-8'} type={'text'} placeholder="" value="인" />
                                                <span className="put_check put_delete dpblock">
                                                    <ImgComponent className={'w12 op06'} src={"close_fill_fff_12.svg"} />
                                                </span>
                                            </div>
                                        </div>
                                        <ButtonWithComponent type={'submit'} className={'btn_srch28 on word shadow'} >
                                            검색
                                        </ButtonWithComponent>
                                    </div>
                                </div>

                                <div className="compline col_gap60 m-b-150">
                                    <p className="comp_size w100" style={{marginLeft:'-60px'}}>Drop down list</p>
                                    <article className="pos_rel">
                                        <div className="srch_line">
                                            <div className="put_zone w240">
                                                <InputComponent className={'wrput on'} type={'text'} placeholder="" value="인" />
                                                <span className="put_check put_delete dpblock">
                                                    <ImgComponent className={'w12 op06'} src={"close_fill_fff_12.svg"} />
                                                </span>
                                                <ul className="selectbox_options scroll dpblock">
                                                    <li className="selected option">인천국제공항</li>
                                                    <li className="option">인천대공원</li>
                                                    <li className="option">인천시청</li>
                                                    <li className="option">인천항사거리</li>
                                                    <li className="option">인천국제공항</li>
                                                    <li className="option">인천대공원</li>
                                                    <li className="option">인천시청</li>
                                                </ul>
                                            </div>
                                            <ButtonWithComponent type={'submit'} className={'btn_srch28 on'}>
                                                <span className="dflx_ac_jcent op06">
                                                    <ImgComponent className={'w20'} src={'icon_srch_20.svg'} />
                                                </span>
                                            </ButtonWithComponent>
                                        </div>
                                    </article>
                                    <article>
                                        <div className="srch_line">
                                            <div className="put_zone w240">
                                                <InputComponent className={'wrput line on'} type={'text'} placeholder="" value="인" />
                                                <span className="put_check put_delete dpblock">
                                                    <ImgComponent className={'w12 op06'} src={"close_fill_fff_12.svg"} />
                                                </span>
                                                <ul className="selectbox_options scroll dpblock">
                                                    <li className="selected option">인천국제공항</li>
                                                    <li className="option">인천대공원</li>
                                                    <li className="option">인천시청</li>
                                                    <li className="option">인천항사거리</li>
                                                    <li className="option">인천국제공항</li>
                                                    <li className="option">인천대공원</li>
                                                    <li className="option">인천시청</li>
                                                </ul>
                                            </div>
                                            <ButtonWithComponent type={'submit'} className={'btn_srch28 on'}>
                                                <span className="dflx_ac_jcent op06">
                                                    <ImgComponent className={'w20'} src={'icon_srch_20.svg'} />
                                                </span>
                                            </ButtonWithComponent>
                                        </div>
                                    </article>
                                </div>

                                <div className="compline col_gap60 m-b-25">
                                    <p className="comp_size">Complete</p>
                                    <SearchSettComponent lineClass={'srch_line'} zoneClass={'put_zone w240'} type={'text'} placeholder={'Search'} value={'Label'} />
                                    <SearchSettLineComponent lineClass={'srch_line'} zoneClass={'put_zone w240'} type={'text'} placeholder={'Search'} value={'Label'} />
                                </div>

                                <div className="compline col_gap60 m-b-25">
                                    <p className="comp_size"></p>
                                    <SearchWordComponent lineClass={'srch_line'} zoneClass={'put_zone w226'} type={'text'} placeholder={'Search'} value={'Label'} />      
                                    <SearchWordLineComponent lineClass={'srch_line'} zoneClass={'put_zone w226'} type={'text'} placeholder={'Search'} value={'Label'} />  
                                </div>

                                <div className="compline col_gap60 m-b-25">
                                    <p className="comp_size"></p>
                                    <SearchBoardComponent lineClass={'srch_line'} zoneClass={'put_zone w226'} btClass={"bt_srch op04"}
                                    type={'text'} placeholder={'검색'}  value={'Label'} />
                                    <SearchBoardLineComponent lineClass={'srch_line'} zoneClass={'put_zone w226'} btClass={"bt_srch op04"}
                                    type={'text'} placeholder={'검색'} value={'Label'} />
                                </div>
                            </dd>
                        </dl>
                    </article>

                    <article className="Gr_contents">
                        <div className="comp_top">
                            <h3 className="fs_bold">Usage</h3>
                        </div>
                        <section className="comp_conts">
                            <dl className="comp_dl col_gap40">
                                <section className="login_input">
                                    <InputZoneComponent zoneClass={'put_zone m-b-8'} type={'text'} placeholder={'아이디'} 
                                    value={id} onChange={writePut} onDelete={onDelete} 
                                    inputClass={'wrput large'} 
                                    deleteClass={deletor? 'put_check put_delete dflx' : 'put_check put_delete'}  />
                                    <InputPassLargeComponent zoneClass={'put_zone w320'} type={'password'} inputClass={'wrput pass large'} placeholder={'비밀번호'} 
                                    value={password} onChange={writePass} onSee={onSee} 
                                    seeClass={'put_check put_see'}  />
                                    <div className='save_group'>
                                        <CheckComponent type={'checkbox'} checkClass={'checkbox_type login'} checkId={'checkbox01'} name={'checkbox_login'} 
                                        labelClass={'fs_13'} txt={'아이디저장'} />
                                        <div className='pw_initial dflx_ac'>
                                            <a>비빌번호 초기화</a>
                                        </div>
                                    </div>
                                    <ButtonComponent type={'submit'} className={'btn_primary btn_l w-100'} txt={'로그인'} />
                                </section>
                                <section className="login_input">
                                    <InputZoneComponent zoneClass={'put_zone m-b-8'} type={'text'} placeholder={'아이디'} 
                                    value={id} onChange={writePut} onDelete={onDelete} 
                                    inputClass={'wrput large'} 
                                    deleteClass={deletor? 'put_check put_delete dflx' : 'put_check put_delete'}  />
                                    <InputPassComponent zoneClass={'put_zone w320'} type={'password'} inputClass={'wrput pass large error'} placeholder={'비밀번호'} 
                                    value={'1234567'} onChange={writePass} onSee={onSee} 
                                    seeClass={'put_check put_see on'} messClass={'mess error on'} message={'Error message'} />
                                    <div className='save_group'>
                                        <CheckComponent type={'checkbox'} checkClass={'checkbox_type login'} checkId={'checkbox02'} name={'checkbox_login'} 
                                        labelClass={'fs_13'} txt={'아이디저장'} checked />
                                        <div className='pw_initial dflx_ac'>
                                            <a>비빌번호 초기화</a>
                                        </div>
                                    </div>
                                    <ButtonComponent type={'submit'} className={'btn_primary btn_l w-100'} txt={'로그인'} />
                                </section>
                                <PopupComponent boxClass={'popover_box w320 m-l-60'} titleBgClass={'popup_title_bg'} 
                                titleClass={'popup_title'} title={'주소록 추가'} close={''}>
                                    <div className="popup_contents p-20">
                                        <dl className="pop_rcd_dl">
                                            <dt>소속</dt>
                                            <dd>
                                                <SelectComponent className={"selector sm"}>
                                                    <option value="">교통정보과</option>
                                                    <option value="">교통정보과</option>
                                                    <option value="">교통정보과</option>
                                                </SelectComponent>
                                            </dd>
                                        </dl>
                                        <dl className="pop_rcd_dl">
                                            <dt>내선번호</dt>
                                            <dd>
                                                <InputZoneComponent zoneClass={'put_zone'} type={'text'} placeholder={'아이디'} 
                                                value={'Done'} onChange={writePut} onDelete={onDelete} 
                                                inputClass={'wrput line'} 
                                                deleteClass={deletor? 'put_check put_delete dflx' : 'put_check put_delete'}  />
                                            </dd>
                                        </dl>
                                        <dl className="pop_rcd_dl">
                                            <dt>직급</dt>
                                            <dd>
                                                <InputZoneComponent zoneClass={'put_zone'} type={'text'} placeholder={'아이디'} 
                                                value={'8급'} onChange={writePut} onDelete={onDelete} 
                                                inputClass={'wrput line'} 
                                                deleteClass={deletor? 'put_check put_delete dflx' : 'put_check put_delete'}  />
                                            </dd>
                                        </dl>
                                        <dl className="pop_rcd_dl">
                                            <dt>내선번호</dt>
                                            <dd>
                                                <InputZoneComponent zoneClass={'put_zone'} type={'text'} placeholder={'아이디'} 
                                                value={'032-000-0000'} onChange={writePut} onDelete={onDelete} 
                                                inputClass={'wrput line'} 
                                                deleteClass={deletor? 'put_check put_delete dflx' : 'put_check put_delete'}  />
                                            </dd>
                                        </dl>
                                        <dl className="pop_rcd_dl m-b-20">
                                            <dt>연락처</dt>
                                            <dd>
                                                <InputZoneComponent zoneClass={'put_zone'} type={'text'} placeholder={'아이디'} 
                                                value={'010-0000-0000'} onChange={writePut} onDelete={onDelete} 
                                                inputClass={'wrput line'} 
                                                deleteClass={deletor? 'put_check put_delete dflx' : 'put_check put_delete'}  />
                                            </dd>
                                        </dl>
                                        <ButtonComponent type={'button'} className={'btn_primary btn_m w-100'} txt={'추가'} />
                                    </div>
                                </PopupComponent>
                            </dl>
                        </section>
                    </article>

                    <article className="Gr_contents">
                        <div className="comp_top">
                            <h2>Editor</h2>
                        </div>
                        <section className="comp_conts">
                            <div className="dflx">
                                <p className="m-b-8">Text</p>
                                <p className="m-b-8" style={{marginLeft:'824px'}}>Vms</p>
                            </div>
                            <div className="dflx_ac col_gap48 m-b-50 m-r-40">
                                <EditorTextComponent />
                                <EditorVms1Component />
                            </div>
                        </section>

                        <p class="fs_bold m-b-20">VMS input field</p>
                        <div class="dflx col_gap464 m-b-20">
                            <p class="fs_12 fc_grey87">480 X 96</p>
                            <p class="fs_12 fc_grey87">480 X 288</p>
                        </div>

                        <div class="dflx_ac col_gap40 p-20">                            
                            <dl class="comp_dl">
                                <dd>
                                    <div class="vms_area m-b-60">
                                        <span>인천시청사거리 <span class="fc_error">사고발생</span></span><br />
                                        <span>시청방면 <span class="fc_error">6분정체</span></span>
                                    </div>
                                    <div class="vms_area m-t-30">
                                        <span>인천시청사거리 <span class="fc_error">사고발생</span></span><br />
                                        <span>시청방면 <span class="fc_error">6분정체</span></span>
                                    </div>
                                </dd>

                                <dd>
                                    <div class="vms_area vms288">
                                        <div>
                                            <span>인천시청사거리 <span class="fc_error">사고발생</span></span><br />
                                            <span>시청방면 <span class="fc_error">6분정체</span></span>
                                        </div>    
                                    </div>
                                </dd>
                            </dl>
                        </div>
                        
                        <div class="dflx m-b-20">
                                <p class="fs_12 fc_grey87">720 X 144</p>
                            </div>
                            <dl class="comp_dl">
                                <dd>
                                    <div class="vms_area vms720">
                                        <span>인천시청사거리 <span class="fc_error">사고발생</span></span><br />
                                        <span>시청방면 <span class="fc_error">6분정체</span></span>
                                    </div>
                                </dd>
                            </dl>
                    </article>
                </div>

            </div>
        </div>
    );
};

export default Input;
