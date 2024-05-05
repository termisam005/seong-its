import React from 'react';
import { useState } from 'react';
import Header from '../../components/header/Header';
import GnbComponents from '../../components/header/GnbComponents';
import HeaderLeft from '../../components/header/HeaderLeft';
import HeaderRight from '../../components/header/HeaderRight';
import ProfileComponent from '../../components/common/ProfileComponent';
import ImgComponent from '../../components/common/ImgComponent';

import CheckComponent from '../../components/common/CheckComponent';
import CheckTextComponent from '../../components/common/CheckTextComponent';
import TreeComponent from '../../components/accordion/TreeComponent';
import TreePartComponent from '../../components/accordion/TreePartComponent';
import TreeCheckComponent from '../../components/accordion/TreeCheckComponent';
import TreeAccordComponent from '../../components/accordion/TreeAccordComponent';


const Tree = () => {

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

                <div className='guide_center'>
                    <article className='guide_top'>
                        <h1>Tree</h1>
                    </article>

                    <article className="Gr_contents" style={{marginTop:'100px'}}>
                        <div className="comp_top flex_wrap">
                            <h2>Item</h2>
                        </div>
                        <div class="m-t-80">
                            <div class="dflx" style={{gap:'50px'}}>
                                <div class="relative w200">
                                    <p class="w-100 fs_bold" style={{position:'absolute', top:'-60px'}}>Check box</p>
                                    <TreeComponent accordClass={'accordion_block'} treeTopClass={'tree_button dflx_ac gap_8 h32'} 
                                    checkClass={'check_text w-100'} txt={'일부요소 선택'}>
                                        <div className="display_grid p-l-24 auto_row32">
                                            <CheckComponent type={'checkbox'} checkClass={'checkbox_type as_center'} checkId={'choice1'}
                                            labelClass={'fs_13 fc_white'} txt={'선택 text text'} />
                                            <CheckComponent type={'checkbox'} checkClass={'checkbox_type as_center'} checkId={'choice2'}
                                            labelClass={'fs_13 fc_white'} txt={'미선택 text text'} />
                                            <CheckComponent type={'checkbox'} checkClass={'checkbox_type as_center'} checkId={'choice3'}
                                            labelClass={'fs_13 fc_white'} txt={'선택 text text'} />
                                        </div> 
                                    </TreeComponent>
                                    <div class="accordion_block">
                                        <div class="tree_button dflx_ac gap_8 h32">
                                            <CheckTextComponent checkClass={'check_text w-100'} text={'미선택'}>
                                                <ImgComponent className={'img_off w20'} src={'checkbox_line_20.svg'} />
                                                <ImgComponent className={'img_selected w20'} src={'checkbox_checked_20.svg'} />
                                            </CheckTextComponent>                        
                                        </div>
                                    </div>
                                    <div class="accordion_block">
                                        <div class="tree_button dflx_ac gap_8 h32">
                                            <CheckComponent type={'checkbox'} checkClass={'checkbox_type'} checkId={'choice5'} 
                                            labelClass={'fs_13 fc_white'} txt={'전체 선택'} checked={'checked'} />                                    
                                        </div>
                                    </div>
                                </div>
                                <div class="relative w200">
                                    <p class="w-100 fs_bold" style={{position:'absolute', top:'-60px'}}>Accordion + cb</p>
                                    <TreePartComponent accordClass={'accordion_block'} treeTopClass={'tree_button dflx_ac gap_8 h32'} 
                                    checkClass={'check_text w-100'} txt={'일부요소 선택'}>
                                        <div className="display_grid p-l-24 auto_row32">
                                            <CheckComponent type={'checkbox'} checkClass={'checkbox_type as_center'} checkId={'choice11'}
                                            labelClass={'fs_13 fc_white'} txt={'선택 text text'} />
                                            <CheckComponent type={'checkbox'} checkClass={'checkbox_type as_center'} checkId={'choice12'}
                                            labelClass={'fs_13 fc_white'} txt={'미선택 text text'} />
                                            <CheckComponent type={'checkbox'} checkClass={'checkbox_type as_center'} checkId={'choice13'}
                                            labelClass={'fs_13 fc_white'} txt={'선택 text text'} />
                                        </div>
                                    </TreePartComponent>
                                    <TreeCheckComponent accordClass={'accordion_block'} treeTopClass={'tree_button dflx_ac gap_8 h32'} 
                                    checkClass={'check_text w-100'} txt={'전체 선택'}>
                                        <div className="display_grid p-l-24 auto_row32">
                                            <CheckComponent type={'checkbox'} checkClass={'checkbox_type as_center'} checkId={'choice14'}
                                            labelClass={'fs_13 fc_white'} txt={'선택 text text'} checked={'checked'} />
                                            <CheckComponent type={'checkbox'} checkClass={'checkbox_type as_center'} checkId={'choice15'}
                                            labelClass={'fs_13 fc_white'} txt={'미선택 text text'} checked={'checked'} />
                                        </div> 
                                    </TreeCheckComponent>
                                </div>
                                <div class="relative w200">
                                    <p class="w-100 fs_bold" style={{position:'absolute', top:'-60px'}}>Accordion</p>
                                    <TreeAccordComponent accordClass={'accordion_block accord'} treeTopClass={'tree_button dflx_ac gap_8 h32'} 
                                    checkClass={'check_text w-100'} txt={'Lv.1 Open'}>
                                        <div class="p-l-48 fs_13 display_grid auto_row32">
                                            <span class="as_center">Lv.2</span>
                                            <span class="as_center">Lv.2-1</span>
                                        </div>
                                    </TreeAccordComponent>
                                </div>                    
                            </div>
                        </div>
                    </article>

                </div>

            </div>
        </div>
    );
};

export default Tree;
