import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Space } from 'antd'

import Title from './title'
import tweet from './tweet'
import { getss } from '@utils/ge'
const CardRight = ({ app }) => {
  const clickHandle = () => {
    // console.log('lsjfls')
    getss()
  }
  return (
    <div className="col-right">
      <div className="app-meta">
        <Title name={app.name} publisher={app.publisher} />
        <span className="app-lic">{app.price}</span>
      </div>
      <div
        className="app-intro"
        dangerouslySetInnerHTML={{ __html: app.desc }}
      />
      <Space wrap>
        <Button type="primary">Primary Button</Button>
        <Button>Default Button</Button>
        <Button type="dashed">Dashed Button</Button>
        <Button type="text">Text Button</Button>
        <Button type="link">Link Button</Button>
      </Space>
      <hr />
      <div className="app-link">
        <button onClick={clickHandle}>获取</button>
        <div>
          <Link to="/list">jump to list</Link>
          <img src="media/ccs.jpg" />
        </div>
        <a
          className="btn"
          href={app.link}
          target="_blank"
          rel="noreferrer noopener"
        >
          Get App
        </a>
        <button
          type="button"
          className="ml-10 btn btn-twitter"
          onClick={() => {
            tweet(app.tweet)
          }}
        >
          <span className="icon icon-inline icon-twitter-light"></span>
          Share on Twitter
        </button>
      </div>
    </div>
  )
}

export default CardRight
