import React from "react"
import { Button, Space } from 'antd';
// import  './index.css'

export default function List(){
  return <>
  <div className={'page'}>
    <div className={'item'}>123</div>
  </div>
    list===
    <img src="media/ccs.jpg" />
    <Space wrap>
    <Button type="primary">Primary Button</Button>
    <Button>Default Button</Button>
    <Button type="dashed">Dashed Button</Button>
    <Button type="text">Text Button</Button>
    <Button type="link">Link Button</Button>
  </Space>
  </>
}