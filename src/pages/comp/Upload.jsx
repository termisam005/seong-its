import React from 'react';
import { useState } from 'react';
import Header from '../../components/header/Header';
import GnbComponents from '../../components/header/GnbComponents';
import HeaderLeft from '../../components/header/HeaderLeft';
import HeaderRight from '../../components/header/HeaderRight';
import ProfileComponent from '../../components/common/ProfileComponent';
import ImgComponent from '../../components/common/ImgComponent';

import FileUploadType1 from '../../components/etc/FileUploadType1';
import FileUploadType2 from '../../components/etc/FileUploadType2';
import ImageThumbnailRegistration from '../../components/etc/ImageThumbnailRegistration';
import ImageThumbnailModify from '../../components/etc/ImageThumbnailModify';


const Upload = () => {

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
                        <h1>Upload</h1>
                    </article>

                    <article className='Gr_contents'>
                        <div className='comp_top flex_wrap'>
                            <h2>File Upload</h2>
                        </div>
                        <section className='comp_conts dflx_as'>
                            <div className='dashed_box dflx_ac_jcent p-20 gap_40'>
                                <FileUploadType1 addedClass='w440 h120'>
                                </FileUploadType1>
                                <FileUploadType2 addedClass='w300 h48 p-20'>
                                </FileUploadType2>           
                                <FileUploadType2 addedClass='w300 h40 p-8'>
                                </FileUploadType2>           
                            </div>                 
                        </section>
                    </article>

                    <article className='Gr_contents'>
                        <div className='comp_top flex_wrap'>
                            <h2>Image thumnail</h2>
                        </div>
                        <div className='dflx_as fc_grey60 p-l-20 p-r-20 fs_12'>
                            <span className='w-30'>Empty</span>
                            <span className='w-30 m-l-60'>Set up</span>
                            <span className='w-30 m-l-60'>Frame</span>
                        </div>
                        <section className='comp_conts'>
                            <div className='dflx_as p-20 m-t-20'>
                                <ImageThumbnailRegistration 
                                    addedClass='bg_grey06 flex_column dflx_ac_jcent w-30 h200 relative'
                                    imageID='imageUpload'
                                >
                                </ImageThumbnailRegistration>
                                <ImageThumbnailModify                                
                                    addedClass='dflx_ac_jcent w-30 h200 relative m-l-60 image_modify'
                                    imageID='imageModify'
                                    imageSrc='image_thumbnail_sample.png'
                                >
                                </ImageThumbnailModify>
                                <div className='dflx_ac_jcent w-30 h200 m-l-60 frame_border p-10'>
                                    <ImgComponent src={'image_frame_sample.png'} className='image_center' />
                                </div>
                            </div>                     
                        </section>
                    </article>

                </div>

            </div>
        </div>
    );
};

export default Upload;
