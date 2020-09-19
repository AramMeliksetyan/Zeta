import React from 'react'
import BlogInfo from '../../ui/BlogInfo'
import { blogInfoData } from '../../ui/BlogInfo/constants'
import './style.scss'
import MainBackground from '../../ui/main-background'
import RecentPosts from '../../ui/recent-posts'
import { recentsPostsInfo } from '../../ui/recent-posts/constants'
import Categories from '../../ui/categories'
import { categoriesInfo } from '../../ui/categories/constants'
import SimpleTabs from '../../ui/tabs'
import { tabsCommentsData } from '../../ui/tabs/constants'

export default function Blog() {
    return (
        <React.Fragment>
            <MainBackground title='Blog' text='READ THE NEWS'/>
            <section className="blog-page-section">
                <div className="row">
                    <div className="left-area">
                        <BlogInfo data={blogInfoData} />
                    </div>
                    <div className="right-area">
                        <div className='search-form'>
                        <input type='text' placeholder='Enter keywords' required/>
                        </div>
                        <RecentPosts data={recentsPostsInfo} title='Recent Posts'/>
                        <Categories data={categoriesInfo} />
                        <SimpleTabs data={tabsCommentsData}/>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}
